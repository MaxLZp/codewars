def find_warrior_rank(skill):
    mahas, atis = skill // 10, 0
    a = skill % 10
    if a > 7:
        mahas += 1
    elif a > 2:
        atis += 1
    return '-'.join(['ati'] * atis + ['maha'] * mahas + ['rathi'])

    # # Other 
    # rounded = round(skill / 5) * 5
    # maha_count, remainder = divmod(rounded, 10)
    # ati_count = remainder // 5
    # return "-".join(["ati"] * ati_count + ["maha"] * maha_count + ["rathi"])

def test_find_the_warriors_rank():
    assert find_warrior_rank(16) == 'ati-maha-rathi'
    assert find_warrior_rank(32) == 'maha-maha-maha-rathi'
    assert find_warrior_rank(98) == 'maha-maha-maha-maha-maha-maha-maha-maha-maha-maha-rathi'
    assert find_warrior_rank(5) == 'ati-rathi'
    assert find_warrior_rank(3) == 'ati-rathi'
    assert find_warrior_rank(2) == 'rathi'
    assert find_warrior_rank(22) == 'maha-maha-rathi'
    assert find_warrior_rank(10) == 'maha-rathi'
    assert find_warrior_rank(76) == 'ati-maha-maha-maha-maha-maha-maha-maha-rathi'
    assert find_warrior_rank(0) == 'rathi'
    assert find_warrior_rank(44) == 'ati-maha-maha-maha-maha-rathi'
    assert find_warrior_rank(323) == 'ati-maha-maha-maha-maha-maha-maha-maha-maha-maha-maha-maha-maha-maha-maha-maha-maha-maha-maha-maha-maha-maha-maha-maha-maha-maha-maha-maha-maha-maha-maha-maha-maha-rathi'