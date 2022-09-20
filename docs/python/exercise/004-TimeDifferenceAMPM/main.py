def main():
    # get input
    hour1 = int(input())
    minute1 = int(input())
    ampm1 = input()

    hour2 = int(input())
    minute2 = int(input())
    ampm2 = input()

    # convert am/pm to hour
    if ampm1 == "PM" and hour1 != 12:
        hour1 = hour1 + 12
    if ampm2 == "PM" and hour2 != 12:
        hour2 = hour2 + 12

    if ampm1 == "AM" and hour1 == 12:
        hour1 = 0
    if ampm2 == "AM" and hour2 == 12:
        hour2 = 0

    # convert hour to minute
    minute2 = (hour2 * 60) + minute2
    minute1 = (hour1 * 60) + minute1

    # calculate time differece
    result = abs(minute2 - minute1)

    # convert back to hour-minute format
    result_hour = result // 60
    result_minute = result % 60

    # print out result
    print(f"{result_hour}h {result_minute}m")


main()
