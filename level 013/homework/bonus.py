name = input("Enter your name: ")
password = "Password0505"
attempts = 3
guessed = False

print("Welcome,", name)
print("This is a password guessing game,can you guess my password?<3")
print("You have", attempts, "attempts to guess the correct password.")

ready = input("If you are ready, type R: ")

if ready == "R":
    print("Ulala,Let's start the game.")

    attempts_left = attempts

    for i in range(attempts):
        guess = input("Enter my password: ")

        if guess == password:
            guessed = True
            print("Congratulations! You guessed my password correctly!")
        elif guess == "":
            print("The field is empty.write something.")
        else:
            print("Incorrect password. Keep going!")

        attempts_left -= 1
        if attempts_left > 0:
            print("Attempts left:", attempts_left)
        else:
            print("No attempts left!")

    if not guessed:
        print("The correct password was:", password)
        print("Better luck next time!")

    print("Thank you for playing.smile! SALLY")

else:
    print("Get ready next time. Goodbye!")