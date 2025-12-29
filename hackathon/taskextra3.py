#Instructions:
#Check if the number 5 exists in a list. If it does, store True in result, otherwise store False.
#Test Cases:
#assert result == True when list = [1, 2, 5, 7]
#assert result == False when list = [0, 3, 4]

list = [3, 7, 9,5, 2]

result = False

for i in list:
    if i == 5:
        result = True
print(result)