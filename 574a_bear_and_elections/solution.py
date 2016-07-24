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
    votes = [int(v) for v in lines[1].split()]
    
    if (len(votes) == 1): return 0

    base_vote = votes[0]
    votes = votes[1:]
    votes = [v for v in votes if v >= base_vote]

    votes_stolen = 0
    while any(base_vote <= x for x in votes):
        i = max_vote_index(votes)
        votes[i] -= 1
        base_vote += 1
        
        votes_stolen += 1

    return votes_stolen

def max_vote_index(votes):
    index_of_max = 0
    if (len(votes) == 1):
        return 0
    for i in range(1, len(votes)):
        if votes[i] > votes[index_of_max]:
            index_of_max = i
    return index_of_max

if __name__ == '__main__':
    main()