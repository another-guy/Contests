from solution import *

class TestProblem:

    def test_e2e_1(self):
        assert solve(3, 4, 10) == False
    def test_e2e_2(self):
        assert solve(3, 10, 3) == True
    def test_e2e_3(self):
        assert solve(3, 8, 51) == True
    def test_e2e_4(self):
        assert solve(3, 8, 52) == True


    def test_e2e_10(self):
        assert solve(2, 5, 2) == True
    def test_e2e_11(self):
        assert solve(2, 5, 3) == False