def electricity_bill():
    def get_medium_cost(usage, divider):
        cost = 0

        threshold = 15 * divider
        if usage > 0:
            cost += min(usage, threshold) * 23488
            usage -= threshold

        threshold = 10 * divider
        if usage > 0:
            cost += min(usage, threshold) * 29882
            usage -= threshold

        threshold = 10 * divider
        if usage > 0:
            cost += min(usage, threshold) * 32405
            usage -= threshold

        threshold = 65 * divider
        if usage > 0:
            cost += min(usage, threshold) * 36237
            usage -= threshold

        if usage > 0:
            cost += usage * 37171

        return cost

    def get_large_cost(usage, divider):
        cost = 0

        threshold = 150 * divider
        if usage > 0:
            cost += min(usage, threshold) * 32484
            usage -= threshold

        threshold = 250 * divider
        if usage > 0:
            cost += min(usage, threshold) * 42218
            usage -= threshold

        if usage > 0:
            cost += usage * 44217

        return cost

    # get input
    usage = float(input())

    # deal with floating point by converting it to Integer
    usage = int(usage * 100)
    divider = 10**2  # making sure all formula matched the Integer conversion

    # find the function that matches the case
    if usage <= 50 * divider:
        cost = 0  # free if the usage is <= 50

    if (50 * divider) < usage <= (150 * divider):
        cost = get_medium_cost(usage, divider)

    if (150 * divider) < usage > (150 * divider):
        cost = get_large_cost(usage, divider)

    # set decimal point now to 10**6 as we add **4 that applies from energy price floating point
    divider = 10**6

    # print result
    print(f"Total: {cost / divider}")


electricity_bill()
