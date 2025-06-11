import unittest

class TestSoftwareEngineer(unittest.TestCase):
    def test_software_engineer(self):
            # Test case 1: Typical case
            software_engineer = SoftwareEngineer(), SoftwareEngineer())
            self.assertIsInstance(software_engineer, SoftwareEngineer)

            # Test case 2: Edge case - invalid input
            with self.assertRaises(ValueError):
                SoftwareEngineer(None)