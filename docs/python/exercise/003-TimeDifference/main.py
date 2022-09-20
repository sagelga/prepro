def time_difference():
    # get input
    hour1 = int(input())
    minute1 = int(input())

    hour2 = int(input())
    minute2 = int(input())

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


time_difference()
