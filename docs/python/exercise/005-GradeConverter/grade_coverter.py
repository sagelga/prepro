def main():
    score = int(input())

    if 0 < score > 100:
        print("Invalid")
    elif 80 <= score <= 100:
        print("A")
    elif 75 <= score <= 79:
        print("B+")
    elif 70 <= score <= 75:
        print("B")
    elif 65 <= score <= 69:
        print("C+")
    elif 60 <= score <= 64:
        print("C")
    elif 0 <= score <= 60:
        print("F")


main()
