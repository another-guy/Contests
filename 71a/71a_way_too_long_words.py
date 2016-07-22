#!/usr/bin/python3
import sys

def main():
    word_count = int(sys.stdin.readline().strip())
    for word_index in range(0, word_count):
        word = sys.stdin.readline().strip()
        
        if len(word) > 10:
            middle = str(len(word) - 2)
            word = word[0] + middle + word[-1:]
        
        sys.stdout.write(word + '\n')

if __name__ == '__main__':
    main()