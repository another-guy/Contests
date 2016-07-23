import sys

def stdin_get_ints_from_line():
    return int(sys.stdin.read())

def answer(w):
    for a in range(1, w):
        b = w - a
        if b <= 0:
            continue
        if a % 2 == 0 and b % 2 == 0:
            return True
    return False

n = stdin_get_ints_from_line()
sys.stdout.write(('YES' if answer(n) else 'NO') + "\n")