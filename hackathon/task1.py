#Instructions:Ask the user to input their name, surname, age, place of living, and gender.
# Store the inputs in appropriate variables and display the information in the terminal in the following format:
#"your name is {name} your age is {age} u living in {living} your gender is {gender}"


name = input("Enter your name:")
surname = input("Enter your surname:")
age = int(input("Enter your age:"))
place = input("Enter your address:")
gender = input("Enter your gender:")

print(f"your name is {name} your age is {age} u living in {place} your gender is {gender}")