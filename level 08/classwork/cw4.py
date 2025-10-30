#კალკულატორი

num1 = int(input("Enter number:"))
num2 = int(input("Enter second number:"))
operation = input("Enter operation(+,-,/,*):")

if operation == "+":
    print("Answer:", num1 + num2 )
elif operation == "-":
    print("Answer:", num1 - num2 )
elif operation == "/":
    print("Answer:", num1/num2 )
elif operation == "*":
    print("Answer:", num1*num2 )

else:
    print("wrong operation")