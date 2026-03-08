import re

def numbers_need_friends_too(n):
    nums = [num.group(0) if len(num.group(0)) > 1 else num.group(0) * 3 for num in re.finditer(r'(\d)\1*', f'{n}')]
    
    return int(''.join(nums))

def test_lonely_numbers():
    assert numbers_need_friends_too(123) == 111222333
    assert numbers_need_friends_too(56657) == 55566555777
    assert numbers_need_friends_too(33) == 33
    assert numbers_need_friends_too(22733) == 2277733
    assert numbers_need_friends_too(11223333) == 11223333
