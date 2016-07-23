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
    a = lines[0].split()
    (n, k) = (int(a[0]), int(a[1]))
    scores = [int(s) for s in lines[1].split()]

    player_index = 0
    while player_index < len(scores):
        score = scores[player_index]

        if player_index == 0:
            if score == 0:
                return "0"
            else:
                prev_score = score
        else:
            if score != prev_score:
                prev_score = score
                if score <= 0:
                    return str(player_index)
                else:
                    if (player_index + 1) > k:
                        return str(player_index)

        player_index += 1

    return str(len(scores))

if __name__ == '__main__':
    main()