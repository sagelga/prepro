def main():
    value = float(input())
    if (input() == "C"):
        return ((9/5)*value) + 32, "Fahrenheit"
    else:
        return (5/9) * (value-32), "Celsius"


result, unit = main()
print(f"{round(result, 2)} {unit}")
