from pydantic import BaseModel, EmailStr
from fastapi import APIRouter, HTTPException
from auth import verify_password
from db import user_collection

router = APIRouter()


class UserLogin(BaseModel):
    email: EmailStr
    password: str


@router.post("/login")
async def login(user: UserLogin):
    existing = await user_collection.find_one({"email": user.email})
    if not existing or not verify_password(user.password, existing["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"message": "Login successful"}
