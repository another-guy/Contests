#!/usr/bin/python3
import sys

def main():
    # Read input
    line = sys.stdin.readline().strip()

    # Do work
    result = solve(line)
    
    # Write result to output  
    sys.stdout.write(result + '\n')

def solve(line):
    mantissa, exponent = line.split('e')
    exponent = int(exponent)
    mant_ceil, mant_fraction = mantissa.split('.')

    if (exponent == 0):
        f = ""
        if len(mant_fraction) != 0 and mant_fraction != "0":
            f = "." + str(mant_fraction)
        return str(mant_ceil) + f

    result = mant_ceil
    i = 0
    while exponent > 0:
        result += mant_fraction[i] if i < len(mant_fraction) else "0"
        exponent -= 1
        i += 1
    if i < len(mant_fraction):
        result += "."
    while i < len(mant_fraction):
        result += mant_fraction[i]
        i += 1

    return result

if __name__ == '__main__':
    main()