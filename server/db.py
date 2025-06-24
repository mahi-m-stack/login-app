from motor.motor_asyncio import AsyncIOMotorClient

MONGO_URL = "mongodb+srv://Mahi:1624@cluster0.7j10c.mongodb.net/"
client = AsyncIOMotorClient(MONGO_URL)
db = client["login_page"]
user_collection = db["users"]
