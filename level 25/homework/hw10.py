def remove_spaces(text):
    result = ""
    for char in text:
        if char != " ":
            result += char
    return result