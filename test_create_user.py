import models
import database
import utils

# Create tables
database.Base.metadata.create_all(bind=database.engine)

# Create a session
db = database.SessionLocal()

try:
    # Try to create a user
    hashed_pw = utils.hash_password("test123")
    print(f"✅ Password hashed: {hashed_pw[:20]}...")
    
    user = models.User(
        username="debuguser",
        email="debug@test.com",
        password=hashed_pw
    )
    
    db.add(user)
    db.commit()
    db.refresh(user)
    
    print(f"✅ User created successfully!")
    print(f"   ID: {user.id}")
    print(f"   Username: {user.username}")
    print(f"   Email: {user.email}")
    
except Exception as e:
    print(f"❌ ERROR: {e}")
    import traceback
    traceback.print_exc()
finally:
    db.close()