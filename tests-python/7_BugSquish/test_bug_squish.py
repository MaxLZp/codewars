def debug(s):
    import re
    return re.sub(r'bug(?!s)', '', s, flags=re.IGNORECASE)

  
def test_bug_squish():
    sample_test_cases = [
        ('obugobugobuoobugsoo', 'ooobuoobugsoo'),
        ('obbugugo', 'obugo'),
        ('bugs bunny', 'bugs bunny'),
        ('bugs buggy', 'bugs gy'),
    ]

    for s, expected in sample_test_cases:
        assert debug(s) == expected