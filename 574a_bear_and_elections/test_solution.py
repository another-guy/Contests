from solution import *

class TestProblem:
    def test_e2e_1(self):
        assert solve(["5", "5 1 11 2 8"]) == 4
    def test_e2e_2(self):
        assert solve(["4", "1 8 8 8"]) == 6
    def test_e2e_3(self):
        assert solve(["2", "7 6"]) == 0

    def test_e2e_4(self):
        assert solve(["1", "1"]) == 0
    def test_e2e_5(self):
        assert solve(["5", "2 0 1 2 3"]) == 1