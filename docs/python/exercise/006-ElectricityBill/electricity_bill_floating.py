def electricity_bill():
    def get_medium_cost(usage):
        cost = 0

        threshold = 15
        if usage > 0:
            cost += min(usage, threshold) * 2.3488
            usage -= threshold

        threshold = 10
        if usage > 0:
            cost += min(usage, threshold) * 2.9882
            usage -= threshold

        threshold = 10
        if usage > 0:
            cost += min(usage, threshold) * 3.2405
            usage -= threshold

        threshold = 65
        if usage > 0:
            cost += min(usage, threshold) * 3.6237
            usage -= threshold

        if usage > 0:
            cost += usage * 3.7171

        return cost

    def get_large_cost(usage):
        cost = 0

        threshold = 150
        if usage > 0:
            cost += min(usage, threshold) * 3.2484
            usage -= threshold

        threshold = 250
        if usage > 0:
            cost += min(usage, threshold) * 4.2218
            usage -= threshold

        if usage > 0:
            cost += usage * 4.4217

        return cost

    # get input
    usage = float(input())

    # find the function that matches the case
    if usage <= 50:
        cost = 0  # free if the usage is <= 50

    if 50 < usage <= 150:
        cost = get_medium_cost(usage)

    if 150 < usage > 150:
        cost = get_large_cost(usage)

    # print result
    print(f"Total: {cost}")


electricity_bill()
