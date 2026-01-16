# numbers = [1,2,3,4,5,6,7,8,9]

# square = list(map(lambda x:x**2,numbers))
# evens = list(filter(lambda x:x%2==0,numbers))
# odds = list(filter(lambda x:x%2 != 0,numbers))
# print(square)
# print(evens)
# print(odds)

# 1) მოცემულია სია nums = [1, 2, 3, 4, 5], map-ის და lambda-ს გამოყენებით მიიღე ახალი სია სადაც თითოეული რიცხვი გამრავლებულია 3-ზე
# 2) მოცემულია სია nums = [3, -1, 0, -7, 8, -2], filter-ის გამოყენებით დატოვე მხოლოდ უარყოფითი რიცხვები
# 3) მოცემულია სია nums = [1, 2, 3, 4, 5, 6], filter -> map ის გამოყენებით დატოვე ლუწი რიცხვები და თითოეული გაამრავლე 2-ზე
# 4) მოცემულია სია nums = [1, 2, 3, 4, 5, 6], filter -> map ის გამოყენებით აიყვანე ყველა რიცხვი კვადრატში და დატოვე მხოლოდ ის რიცხვები რომლებიც მეტია 20-ზე 
# 5) nums = [9, 2, 7, 4, 5, 6, 1], დატოვე მხოლოდ კენტი რიცხვები დაა დაალაგე ზრდადობით

nums = [1, 2, 3, 4, 5]

result = list(map(lambda x:x*3,nums))
print(result)


nums1 = [3, -1, 0, -7, 8, -2]

result1 = list(filter(lambda n: n<0,nums1))
print(result1)

nums2 = [1, 2, 3, 4, 5, 6]
result2 = list(map(lambda c:c*2,filter(lambda c:c%2==0,nums2)))
print(result2)

nums3 = [1, 2, 3, 4, 5, 6]
result3 = list(filter(lambda m:m>20,map(lambda m:m**2,nums3)))
print(result3)

nums4 = [9, 2, 7, 4, 5, 6, 1]
result4 = sorted(list(filter(lambda l:l%2!=0,nums4)))
print(result4)




words = ['hello','python','javascript','java']

# res = list(filter(lambda word:len(word)>5,words))
# print(res)

def long_words(word):
    return len(word)>5

def add_sharp(word):
    return '#'+word

res = list(filter(long_words,map(add_sharp,words)))

print(res)

numbers = [2,4,65,77,90,79,11]
def tripled(num):
    return num*3
def odd(num):
    if num%2==0:
        return num

resl = list(map(tripled,filter(odd,numbers)))
print(resl)
