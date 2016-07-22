from sys import stdin, stdout
n, m, a = map(int, stdin.readline().rstrip().split())

n_stones = (n / a) + (1 if n % a > 0 else 0)
m_stones = (m / a) + (1 if m % a > 0 else 0)
result = n_stones * m_stones

stdout.write(str(result) + "\n")