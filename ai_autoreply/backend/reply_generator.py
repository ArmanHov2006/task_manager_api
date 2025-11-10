import os
import anthropic
from dotenv import load_dotenv

load_dotenv()

def generate_reply(intent, text):
    use_mock = os.getenv("USE_MOCK_REPLY_GENERATOR", "True").lower() == "true"

    if use_mock:
        return mock_generate_reply(intent, text)
    else:
        return real_generate_reply(intent, text)

def mock_generate_reply(intent, text):
    system_prompts = {
        "meeting_request": "Write a short polite confirmation for a meeting request.",
        "thank_you": "Write a warm acknowledgment.",
        "complaint": "Write a professional, empathetic response to a customer complaint.",
        "info_request": "Provide a concise, helpful response.",
        "other": "Write a neutral professional reply."
    }
    prompt = f"{system_prompts[intent]}\n\nMessage: {text}\nReply:"
    return f"[AI Reply Simulation] {prompt[:100]}..."

def real_generate_reply(intent, text):
    try:
        client = anthropic.Anthropic(
            # This is the default and can be omitted
            api_key=os.environ.get("ANTHROPIC_API_KEY"),
        )

        system_prompts = {
            "meeting_request": "You are a helpful assistant. Your task is to write a short polite confirmation for a meeting request.",
            "thank_you": "You are a helpful assistant. Your task is to write a warm acknowledgment.",
            "complaint": "You are a helpful assistant. Your task is to write a professional, empathetic response to a customer complaint.",
            "info_request": "You are a helpful assistant. Your task is to provide a concise, helpful response.",
            "other": "You are a helpful assistant. Your task is to write a neutral professional reply."
        }

        message = client.messages.create(
            model="claude-3-sonnet-20240229",
            max_tokens=1024,
            system=system_prompts[intent],
            messages=[
                {
                    "role": "user",
                    "content": text
                }
            ]
        )
        return message.content[0].text
    except Exception as e:
        return f"Error generating response from Anthropic: {e}"