import math


def geo_mean(nums, arith_mean):
    _missing = arith_mean * (len(nums) + 1) - sum(nums)
    
    return pow(math.prod(nums + [_missing]), 1 / (len(nums) + 1))


def test_mean_means():
    import pytest
    
    assert geo_mean([2], 10) == 6
    assert geo_mean([1, 2], 3) == 2.2894284851066637
    assert geo_mean([4, 6, 7, 2], 5) == 4.580344097847165

    r1 = geo_mean([-4,45,9], 6)
    r2 = geo_mean([1,23,-2,8,6,35,-34,52], 10)
    r3 = geo_mean([1,-3,3,6,5,52,130,-2,4,-5], 10)
    
    assert r1 == pytest.approx(14.325905783504401)
    assert r2 == pytest.approx(8.015856437398835)
    assert r3 == pytest.approx(7.7330442855597)
