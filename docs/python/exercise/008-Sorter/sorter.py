def sort(number1, number2, number3):
    if number3 >= number2 and number3 >= number1:
        print(number3)

        if number2 >= number1:
            print(number2)
            print(number1)
        else:
            print(number1)
            print(number2)

    elif number2 >= number3 and number2 >= number1:
        print(number2)

        if number3 >= number1:
            print(number3)
            print(number1)
        else:
            print(number1)
            print(number3)

    elif number1 >= number3 and number1 >= number2:
        print(number1)

        if number3 >= number2:
            print(number3)
            print(number2)
        else:
            print(number2)
            print(number3)


sort(int(input()), int(input()), int(input()))
