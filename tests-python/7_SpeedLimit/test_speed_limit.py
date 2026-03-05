def speed_limit(speed, signals):
    fee = 0
    for signal in signals:
        exceed = speed - signal
        if exceed >= 10 and exceed < 20: fee += 100
        if exceed >= 20 and exceed < 30: fee += 250
        if exceed >= 30: fee += 500
        
    return fee

# Other
# def fine(speed, limit):
#     if speed >= limit + 30:
#         return 500
#     if speed >= limit + 20:
#         return 250
#     if speed >= limit + 10:
#         return 100
#     return 0
# 
# def speed_limit(speed, limits):
#     return sum(fine(speed, limit) for limit in limits)

def test_speed_limit():
    tests = [
        (60, [80, 70, 60], 0),
        (100, [110, 100, 80], 250),
        (130, [140, 130, 100], 500),
        (110, [120, 110, 100], 100),
        (220, [120, 110, 100], 1500),
        (100, [70, 80, 90, 100], 850),
        (0, [15, 25, 35, 46], 0),
        (60, [], 0)
    ]
    
    for speed, signals, expected in tests:
        assert speed_limit(speed, signals[:]) == expected
