#nstructions:
#Use a for loop with range() to calculate the sum of all even numbers from 1 to 10 and store it in result.
#Test Cases:
#assert result == 30

sum = 0
for i in range(1,11):
    if i % 2 == 0:
        sum += i
print(sum)