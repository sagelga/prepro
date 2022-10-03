def main(hour1, minute1, hour2, minute2):

    # convert hour to minute
    minute1 += (hour1 * 60)
    minute2 += (hour2 * 60)

    # if the hour lapsed through midnight, add 24 hour
    minute2 += 1440 if minute2 < minute1 else 0

    minute_result = minute2 - minute1

    hour_result = minute_result // 60
    minute_result = minute_result % 60

    return f"{hour_result}hour {minute_result}min"
