from fastapi.testclient import TestClient
from main import app
import models
import database

# Ensure database tables are created
models.Base.metadata.create_all(bind=database.engine)

client = TestClient(app)


def run_tests():
    print("Testing registration...")
    register_data = {
        "username": "localtestuser",
        "email": "localtest@example.com",
        "password": "password123"
    }
    r = client.post("/auth/register", json=register_data)
    print("Register status:", r.status_code)
    print(r.json())

    print("\nTesting login...")
    login_data = {"username": "localtestuser", "password": "password123"}
    r2 = client.post("/auth/token", data=login_data)
    print("Login status:", r2.status_code)
    print(r2.json())

    if r2.status_code == 200:
        token = r2.json().get("access_token")
        headers = {"Authorization": f"Bearer {token}"}
        r3 = client.get("/auth/me", headers=headers)
        print("Get me status:", r3.status_code)
        print(r3.json())


if __name__ == "__main__":
    run_tests()
