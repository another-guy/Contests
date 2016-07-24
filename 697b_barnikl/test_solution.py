from solution import *

class TestProblem:
    def test_e2e_1(self):
        assert solve("8.549e2") == "854.9"
    def test_e2e_2(self):
        assert solve("0.33e0") == "0.33"
    def test_e2e_3(self):
        assert solve("8.549e3") == "8549"

    def test_e2e_4(self):
        assert solve("12.e0") == "12"
    def test_e2e_5(self):
        assert solve("12.e2") == "1200"

        
    def test_e2e_6(self):
        assert solve("0.0e0") == "0"