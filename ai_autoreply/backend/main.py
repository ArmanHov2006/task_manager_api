import json
import os
from pathlib import Path
from dotenv import load_dotenv
from .intent_classifier import classify_intent
from .reply_generator import generate_reply

def main():
    # Load environment variables from .env file
    load_dotenv()

    # Get the project root directory
    project_root = Path(__file__).resolve().parents[1]

    # Construct paths to data files
    messages_path = project_root / "data" / "samples" / "messages.txt"
    log_path = project_root / "data" / "logs" / "day2_demo.json"

    # Create logs directory if it doesn't exist
    log_path.parent.mkdir(exist_ok=True)

    with open(messages_path, 'r', encoding='utf-8') as f:
        messages = f.readlines()

    results = []
    for message in messages:
        message = message.strip()
        if not message:
            continue
        intent = classify_intent(message)
        reply = generate_reply(intent, message)
        results.append({
            "input": message,
            "intent": intent,
            "ai_reply": reply
        })
        print(f"Input: \"{message}\"")
        print(f"Intent: {intent}")
        print(f"AI Reply: {reply}\n")

    with open(log_path, 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=4)

if __name__ == "__main__":
    main()