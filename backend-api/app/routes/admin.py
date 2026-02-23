from flask import Blueprint, request, jsonify
from bson.objectid import ObjectId
import os, uuid
from datetime import datetime

from app.db import (
    get_db_connection,
    messages_collection,
    projects_collection,
    certificates_collection
)


admin_routes = Blueprint('admin_routes', __name__)

UPLOAD_FOLDER = os.path.join(os.path.dirname(__file__), '../..', 'uploads')

ADMIN_USERNAME = "admin"
ADMIN_PASSWORD = "admin123"
ADMIN_TOKEN = "supersecrettoken"


def require_admin_auth(req):
    auth = req.headers.get("Authorization", "")
    return auth == f"Bearer {ADMIN_TOKEN}"


# 🎯 login
@admin_routes.route('/login', methods=['POST'])
def admin_login():
    data = request.get_json() or {}

    if data.get("username") == ADMIN_USERNAME and data.get("password") == ADMIN_PASSWORD:
        return jsonify({"success": True, "token": ADMIN_TOKEN}), 200

    return jsonify({"success": False}), 401


# 🎯 get messages (same style as Oracle list)
@admin_routes.route('/messages', methods=['GET'])
def get_messages():
    data = []

    for m in messages_collection.find().sort("_id", -1):

        data.append({
            "id": str(m["_id"]),                      # <-- IMPORTANT FIX
            "name": m.get("name"),
            "email": m.get("email"),
            "message": m.get("message"),
            "created_at": str(m.get("created_at", "")),
            "is_read": bool(m.get("is_read", False))
        })

    return jsonify(data), 200


# 🎯 mark message read
@admin_routes.route('/messages/<string:message_id>/read', methods=['POST'])
def mark_message_read(message_id):
    messages_collection.update_one(
        {"_id": ObjectId(message_id)},
        {"$set": {"is_read": True}}
    )

    return jsonify({"success": True}), 200


# 🎯 upload project
@admin_routes.route('/projects', methods=['POST'])
def upload_project():
    title = request.form.get("title")
    description = request.form.get("description")
    tech_stack = request.form.get("tech_stack")
    github_link = request.form.get("github_link")
    demo_link = request.form.get("demo_link")
    image = request.files.get("image")

    filename = None
    if image:
        ext = os.path.splitext(image.filename)[1]
        filename = f"{uuid.uuid4().hex}{ext}"
        image.save(os.path.join(UPLOAD_FOLDER, filename))

    projects_collection.insert_one({
        "title": title,
        "description": description,
        "tech_stack": tech_stack,
        "github_link": github_link,
        "demo_link": demo_link,
        "image_url": f"/uploads/{filename}" if filename else None
    })

    return jsonify({"success": True}), 201


# 🎯 upload certificate
@admin_routes.route('/certificates', methods=['POST'])
def upload_certificate():
    if not require_admin_auth(request):
        return jsonify({"success": False}), 401

    title = request.form.get("title")
    issuer = request.form.get("issuer")
    year = request.form.get("year")
    cert_link = request.form.get("cert_link")
    image = request.files.get("image")

    filename = None
    if image:
        ext = os.path.splitext(image.filename)[1]
        filename = f"{uuid.uuid4().hex}{ext}"
        image.save(os.path.join(UPLOAD_FOLDER, filename))

    certificates_collection.insert_one({
        "title": title,
        "issuer": issuer,
        "year": year,
        "cert_link": cert_link,
        "image_url": f"/uploads/{filename}" if filename else None
    })

    return jsonify({"success": True}), 201
