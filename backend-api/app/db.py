from pymongo import MongoClient

MONGO_URI = "mongodb+srv://krishM:Krish1599@portfollio.u1gr6ih.mongodb.net/portfolio"


client = MongoClient(
    MONGO_URI,
    tls=True,
    tlsAllowInvalidCertificates=True
)

db = client["portfolio"]

messages_collection = db["messages"]
projects_collection = db["projects"]
certificates_collection = db["certificates"]


def get_db_connection():
    return db
