#!/usr/bin/python3
import sys

def main():
    # Read input
    l1 = sys.stdin.readline().strip()
    l2 = sys.stdin.readline().strip()
    lines = [ l1, l2 ]
    # Do work
    result = str(solve(lines))
    # Write result to output  
    sys.stdout.write(result + '\n')

def solve(lines):
    word = lines[0]
    string = lines[1]

    # find all word locations
    locations = []
    start_index = 0
    while True:
        loc = location(word, string, start_index)
        if loc != None:
            start_index = loc[1] + 1
            locations.append(loc)
        else:
            break

    # calculate breaking points total count
    total = 0
    for i in range(0, len(locations) - 1):
        total += locations[i+1][0] - locations[i][1]

    return total

# returns (startindex, endindex) of word occurence
# or Null otherwise
def location(word, string, start_index):
    word_index = 0
    string_index = start_index
    l = None
    r = None
    string_len = len(string)
    word_len = len(word)
    while string_index < string_len:
        if word[word_index] == string[string_index]:
            if word_index == 0:
                l = string_index
            if word_index == word_len - 1:
                r = string_index
                return [l, r]
            word_index += 1
        string_index += 1
    return None

if __name__ == '__main__':
    main()