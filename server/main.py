from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from model.login import router as login_router
from model.register import router as register_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://login-app-sage-rho.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(login_router)
app.include_router(register_router)


@app.get("/")
async def read_root():
    return {"message": "Hello, World!"}
