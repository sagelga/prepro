def main():
    number1 = int(input())
    number2 = int(input())

    # prepare number list
    for j in range(1, number1 + 1, 3):
        for i in range(1, number2 + 1):
            for k in range(3):
                print(f"{j+k} x {i} = {(j+k)*i}", end="\t")
                if j+k == number1:
                    break

            print()
        print()


main()
