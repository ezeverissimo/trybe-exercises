list = [479, 670, 980, 545, 493]


def average(list):
    sumAverage = 0

    for num in list:
        sumAverage += num

    return (sumAverage / len(list))


print(average(list))
