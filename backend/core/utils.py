import uuid


def generate_id():
    generated_uuid = uuid.uuid4()
    uuid_str = str(generated_uuid).split("-")[0]
    return uuid_str.upper()
