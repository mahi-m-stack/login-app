from pydantic import BaseModel, EmailStr
from fastapi import APIRouter, HTTPException
from auth import hash_password
from db import user_collection

router = APIRouter()


class UserRegister(BaseModel):
    username: str
    email: EmailStr
    password: str


@router.post("/register")
async def register(user: UserRegister):
    existing = await user_collection.find_one({"email": user.email})
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    else:
        hashed_pw = hash_password(user.password)
        new_user = {
            "username": user.username,
            "email": user.email,
            "password": hashed_pw,
        }
        await user_collection.insert_one(new_user)
        return {"message": "User registered successfully"}
