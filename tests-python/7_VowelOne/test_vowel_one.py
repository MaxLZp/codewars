def vowel_one(s):
    import re
    return ''.join( '1' if re.match(r'[aeiou]', c, flags=re.IGNORECASE) else '0' for c in s )


def test_vowel_one():
    tests = [
        # [input, expected],
        ["vowelOne", "01010101"],
        ["123, arou", "000001011"],
        ["Codewars", "01010100"],
        ["Python", "000010"]
    ]

    for inp, exp in tests:
        assert vowel_one(inp) == exp
