import requests
import json
import time

BASE_URL = "http://localhost:8000"

def wait_for_server():
    max_attempts = 5
    attempts = 0
    while attempts < max_attempts:
        try:
            response = requests.get(f"{BASE_URL}/")
            if response.status_code == 200:
                print("✅ Server is ready!")
                return True
        except requests.exceptions.ConnectionError:
            attempts += 1
            print(f"Waiting for server (attempt {attempts}/{max_attempts})...")
            time.sleep(2)
    return False

def test_register_user():
    print("\nTesting user registration...")
    data = {
        "username": "testuser1",
        "email": "test1@example.com",
        "password": "password123"
    }
    
    try:
        response = requests.post(f"{BASE_URL}/auth/register", json=data)
        print(f"Status Code: {response.status_code}")
        if response.status_code != 200:
            print(f"Error Response: {response.text}")
        else:
            print(f"Success Response: {json.dumps(response.json(), indent=2)}")
        return response.json() if response.status_code == 200 else None
    except requests.exceptions.ConnectionError as e:
        print(f"Connection Error: Server might not be running - {e}")
    except Exception as e:
        print(f"Unexpected Error: {str(e)}")
        import traceback
        traceback.print_exc()
        return None

def test_login_user(username, password):
    print("\nTesting user login...")
    data = {
        "username": username,
        "password": password
    }
    
    try:
        response = requests.post(
            f"{BASE_URL}/auth/token",
            data=data,  # Note: using data instead of json for form data
            headers={"Content-Type": "application/x-www-form-urlencoded"}
        )
        print(f"Status Code: {response.status_code}")
        if response.status_code != 200:
            print(f"Error Response: {response.text}")
        else:
            print(f"Success Response: {json.dumps(response.json(), indent=2)}")
        return response.json() if response.status_code == 200 else None
    except requests.exceptions.ConnectionError as e:
        print(f"Connection Error: Server might not be running - {e}")
    except Exception as e:
        print(f"Unexpected Error: {str(e)}")
        import traceback
        traceback.print_exc()
        return None

def test_get_me(token):
    print("\nTesting get current user info...")
    try:
        response = requests.get(
            f"{BASE_URL}/auth/me",
            headers={"Authorization": f"Bearer {token}"}
        )
        print(f"Status Code: {response.status_code}")
        if response.status_code != 200:
            print(f"Error Response: {response.text}")
        else:
            print(f"Success Response: {json.dumps(response.json(), indent=2)}")
    except requests.exceptions.ConnectionError as e:
        print(f"Connection Error: Server might not be running - {e}")
    except Exception as e:
        print(f"Unexpected Error: {str(e)}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    # Wait for server to be ready
    if not wait_for_server():
        print("❌ Server not available after maximum attempts")
        exit(1)
    
    # Test registration
    user = test_register_user()
    
    if user:
        # Test login
        token_info = test_login_user("testuser1", "password123")
        
        if token_info and "access_token" in token_info:
            # Test get me
            test_get_me(token_info["access_token"])
    else:
        print("❌ User registration failed, stopping tests")