from solution import *

class TestProblem:
    def test_e2e_1(self):
        input = [
            "8 5",
            "10 9 8 7 7 7 5 5"
        ];
        assert solve(input) == "6"

    def test_e2e_2(self):
        input = [
            "4 2",
            "0 0 0 0"
        ];
        assert solve(input) == "0"

    def test_e2e_3(self):
        input = [
            "8 3",
            "4 4 3 3 2 2 1 1"
        ];
        assert solve(input) == "4"

    def test_e2e_4(self):
        input = [
            "5 3",
            "4 3 2 2 1"
        ];
        assert solve(input) == "4"

    def test_e2e_5(self):
        input = [
            "5 3",
            "4 3 2 1 0"
        ];
        assert solve(input) == "3"

    def test_e2e_5(self):
        input = [
            "5 3",
            "4 3 0 0 0"
        ];
        assert solve(input) == "2"