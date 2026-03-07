score=int(input("Enter your score:"))

if score > 90 and score < 100:
    print("You got A")
elif score > 80 and score < 90:
    print("You got B")
elif score > 70 and score < 80:
    print("You got C")
elif score > 60 and score < 70:
    print("You got C-")
else:
    print("You failed")
