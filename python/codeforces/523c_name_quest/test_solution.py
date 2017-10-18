from solution import *

class TestProblem:

    def test_e2e_1(self):
        assert solve(["aba", "baobababbah"]) == 2
    def test_e2e_2(self):
        assert solve(["mars", "sunvenusearthmarsjupitersaturnuranusneptune"]) == 0
    def test_e2e_3(self):
        assert solve(["a", "aaaaaaaaaaaaaa"]) == 13
    def test_e2e_4(self):
        assert solve(["abcaba", "abcabaabcabaabcabaabcaba"]) == 13

    def test_location_1(self):
        assert location("ma", "zmcadfemxvsafd", 0) == [1, 3]
    def test_location_2(self):
        assert location("ma", "zmcadfemxvsafd", 3) == [7, 11]
    def test_location_3(self):
        assert location("ma", "zmcadfemxvsafd", 10) == None
    def test_location_4(self):
        assert location("a", "aaa", 0) == [0, 0]
    def test_location_5(self):
        assert location("a", "aaa", 1) == [1, 1]
    def test_location_6(self):
        assert location("a", "aaa", 2) == [2, 2]
    def test_location_7(self):
        assert location("a", "aaa", 3) == None