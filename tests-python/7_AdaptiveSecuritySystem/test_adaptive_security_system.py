def breach_attempts(hackers, security_level, increase):
    breaches = 0
    for hacker in hackers:
        if hacker > security_level:
            breaches += 1
        else :
            security_level += increase
        
    return breaches

def test_adaptive_security_system():
    cases = [
        ([7, 6, 8, 9], 6, 2, 1),
        ([10, 11, 12], 5, 3, 3),
        ([5, 5, 5], 5, 1, 0),
        ([], 4, 2, 0),
    ]

    for hackers, security_level, increase, answer in cases:
        # original_hackers = hackers[:]

        assert breach_attempts(hackers[:], security_level, increase) == answer