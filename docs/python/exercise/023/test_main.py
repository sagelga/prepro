import unittest
from main import main


class TestCode(unittest.TestCase):
    def test_normal_basic(self):
        self.assertEqual(main(1, 0, 1, 1), "0hour 1min")
        self.assertEqual(main(1, 0, 1, 2), "0hour 2min")
        self.assertEqual(main(1, 0, 1, 3), "0hour 3min")
        self.assertEqual(main(1, 0, 1, 4), "0hour 4min")
        self.assertEqual(main(1, 0, 1, 5), "0hour 5min")
        self.assertEqual(main(1, 0, 1, 10), "0hour 10min")
        self.assertEqual(main(1, 0, 1, 20), "0hour 20min")
        self.assertEqual(main(1, 0, 1, 30), "0hour 30min")
        self.assertEqual(main(1, 0, 1, 45), "0hour 45min")

    def test_complex_basic(self):
        self.assertEqual(main(1, 0, 2, 1), "1hour 1min")
        self.assertEqual(main(1, 0, 3, 1), "2hour 1min")
        self.assertEqual(main(1, 0, 3, 2), "2hour 2min")
        self.assertEqual(main(1, 0, 12, 1), "11hour 1min")
        self.assertEqual(main(1, 0, 23, 59), "22hour 59min")

    def test_complex_invert(self):
        self.assertEqual(main(23, 59, 23, 58), "23hour 59min")

    def test_normal_invert(self):
        self.assertEqual(main(1, 0, 0, 0), "23hour 0min")
        self.assertEqual(main(2, 0, 0, 0), "22hour 0min")
        self.assertEqual(main(3, 0, 0, 0), "21hour 0min")
        self.assertEqual(main(4, 0, 0, 0), "20hour 0min")
        self.assertEqual(main(5, 0, 0, 0), "19hour 0min")
        self.assertEqual(main(6, 0, 0, 0), "18hour 0min")
        self.assertEqual(main(12, 0, 0, 0), "12hour 0min")
        self.assertEqual(main(23, 0, 0, 0), "1hour 0min")

    def test_daylapsed_2(self):
        self.assertEqual(main(23, 59, 0, 59), "1hour 0min")
        self.assertEqual(main(23, 59, 1, 59), "2hour 0min")
        self.assertEqual(main(23, 59, 2, 59), "3hour 0min")
        self.assertEqual(main(23, 59, 6, 59), "7hour 0min")
        self.assertEqual(main(23, 59, 22, 59), "23hour 0min")

    def test_daylapsed_1(self):
        self.assertEqual(main(23, 59, 0, 0), "0hour 1min")
        self.assertEqual(main(23, 59, 0, 1), "0hour 2min")
        self.assertEqual(main(23, 59, 0, 5), "0hour 6min")
        self.assertEqual(main(23, 59, 0, 10), "0hour 11min")
        self.assertEqual(main(23, 59, 0, 30), "0hour 31min")
        self.assertEqual(main(23, 59, 0, 58), "0hour 59min")


if __name__ == "__main__":
    unittest.main()
