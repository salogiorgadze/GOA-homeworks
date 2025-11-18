name = input("Enter your name:")
password = "Password0505"
guessed = False

print("Welcome",name)
print("Guess my password<3,you have only three attempts")
ask = input("If you are ready type R:")

if ask == "R":
    print("Lets Go")


    for i in range(3):
        guess = input("Enter my password:")

        if guess == password:
            guessed = True
            print("Congrats,You are right")
        elif guess == "":
            print("The field is empty,Write anything")
            print("Attempts left:",2-i)
        else:
            print("Incorrect,Try Again")
            print("Attempts left:",2-i)
    if not guessed:
        print("Incorrect,You dont have more attempts,The right answer was:Password0505")

else:
    print("Get Ready")