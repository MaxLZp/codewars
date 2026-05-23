# def insert_dash(num):
#     snum = f'{num}'
#     result = snum[0]
#     for i in range(1, len(snum)):
#         result += f'-{snum[i]}' if int(snum[i]) % 2 != 0 and int(snum[i - 1]) % 2 != 0 else snum[i]
    
#     return result


def insert_dash(num):
    """Other"""
    import re
    return re.sub(r'([13579])(?=[13579])', r'\1-', str(num))


def test_insert_dashes():
    assert insert_dash(454793) == '4547-9-3'
    assert insert_dash(123456) == '123456'
    assert insert_dash(1003567) == '1003-567'
    assert insert_dash(24680) == '24680'
    assert insert_dash(13579) == '1-3-5-7-9'
