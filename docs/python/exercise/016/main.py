def main():
    number = input()

    if not len(number) == 12:
        return None

    odd_total = 0
    even_total = 0

    for i in range(0, 11, 2):
        odd_position = number[i]
        even_position = number[i+1] if i < 10 else 0

        odd_total += int(odd_position)
        even_total += int(even_position)

    total = 10 - ((odd_total + even_total) % 10)

    return True if total == int(number[11]) else False


print(main())
