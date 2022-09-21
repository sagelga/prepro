def main():
    """
    Converts the time (in 00:00 format) to speaking language
    ie. 6:15 = Quarter past 6
    6:45 = Quarter to 7
    """
    time = input().split(":")
    hour, minute = int(time[0]), int(time[1])

    # Return immediately if the minute is 0
    if minute == 0:
        return f"It's {hour} o'clock."

    # Convert number to word.
    if minute == 0:
        print(f"It's {hour} o'clock.")
    elif minute == 15:
        print(f"It's quarter past {hour}.")
    elif minute > 0 and minute < 30:
        print(f"It's {minute} past {hour}.")
    elif minute == 30:
        print(f"It's half past {hour}.")
    elif minute == 45:
        print(f"It's quarter to {hour + 1}")
    elif minute > 30:
        print(f"It's {60 - minute} to {hour + 1}")


main()
