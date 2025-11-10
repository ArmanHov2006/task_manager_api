def classify_intent(text):
    text_lower = text.lower()
    if "thank" in text_lower:
        return "thank_you"
    elif "meeting" in text_lower:
        return "meeting_request"
    elif "issue" in text_lower or "problem" in text_lower:
        return "complaint"
    elif "how" in text_lower or "can you" in text_lower:
        return "info_request"
    else:
        return "other"