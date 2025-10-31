print('starting script')
from fastapi.testclient import TestClient
print('imported TestClient')
from main import app
print('imported app')
client = TestClient(app)
print('created client')
print('done')
