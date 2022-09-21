roman_ones = ["I", "X", "C", "M", "?"]
roman_fives = ["V", "L", "D", "?", "?"]


def main(number):
    str_number = str(number)
    result = []

    for i in range(len(str_number), 0, -1):
        current_digit = int(str_number[i - 1])
        pull_location = len(str_number) - i
        c_ones = roman_ones[pull_location]
        c_fives = roman_fives[pull_location]
        f_ones = roman_ones[pull_location+1]

        if current_digit == 0:
            romanize_digit = ""
            result.append(romanize_digit)

        elif current_digit == 4:
            romanize_digit = f"{c_ones}{c_fives}"
            result.append(romanize_digit)

        elif current_digit == 5:
            romanize_digit = c_fives
            result.append(romanize_digit)

        elif current_digit == 9:
            romanize_digit = f"{c_ones}{f_ones}"
            result.append(romanize_digit)

        elif 1 <= current_digit <= 4:
            romanize_digit = f"{c_ones*(current_digit%5)}"
            result.append(romanize_digit)

        elif 6 <= current_digit <= 8:
            romanize_digit = f"{c_fives}{c_ones*(current_digit%5)}"
            result.append(romanize_digit)

    result.reverse()

    for i in result:
        print(i, end="")
    print()


main(int(input("Input: ")))
