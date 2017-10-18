#!/usr/bin/python3
import sys

def main():
    # Read input
    l1 = sys.stdin.readline().strip()
    l2 = sys.stdin.readline().strip()
    lines = [ l1, l2 ]

    # Do work
    result = solve(lines)
    
    # Write result to output  
    sys.stdout.write(result + '\n')

def solve(lines):
    return ""

if __name__ == '__main__':
    main()