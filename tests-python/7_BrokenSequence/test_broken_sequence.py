def find_missing_number(sequence):
    """Other"""
    try:
        nums = sorted([int(num) for num in sequence.split(' ') if num != ''])
    except ValueError:
        return 1

    for i in range(1, len(nums)+1):
        if i not in nums:
            return i
    
    return 0

# def find_missing_number(sequence):
#     """My"""
#     import re
#     if len(re.findall(r'\D', sequence.replace(' ', ''))) > 0:
#         return 1
    
#     nums = sorted([int(num) for num in sequence.split(' ') if num != ''])

#     for i in range(len(nums) ):
#         if int(nums[i]) != i + 1:
#             return i + 1
    
#     return 0

  
def test_broken_sequence():
    assert find_missing_number("1 2 3 5") == 4
    assert find_missing_number("1 5") == 2
    assert find_missing_number("") == 0
    assert find_missing_number("1 2 3 4 5") == 0
    assert find_missing_number("2 3 4 5") == 1
    assert find_missing_number("2 6 4 5 3") == 1
    assert find_missing_number("_______") == 1
    assert find_missing_number("2 1 4 3 a") == 1
    assert find_missing_number("1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 91 92 93 94 95 96 97 98 99 100 101 102") == 90
