#!/usr/bin/python3
import sys

def main():
    # Read input
    t, s, x = sys.stdin.readline().strip().split(" ")
    t = int(t)
    s = int(s)
    x = int(x)
    # Do work
    result = "YES" if solve(t, s, x) else "NO"
    # Write result to output  
    sys.stdout.write(result + '\n')

def solve(t, s, x):
    if t == x:
        return True
    
    if x < t + s:
        return False

    if (x - t) % s == 0:
        return True

    if (x - t - 1) % s == 0:
        return True

    return False

if __name__ == '__main__':
    main()