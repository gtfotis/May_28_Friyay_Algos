
def reverseString(string):
    string = "Hello World"
    index = len(string)
    reversedString = []
    while index > 0:
        reversedString += string[index -1]
        index = index - 1
    return reversedString

print(reverseString())