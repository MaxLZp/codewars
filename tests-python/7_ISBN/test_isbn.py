def fix_code(isbn):
    sum = 0
    missing_idx = 0
    for i, c in enumerate(isbn):
        idx = 10 - i
        if c == '?':
            missing_idx = idx
            continue
        sum += 10 * idx if c == 'X' else int(c) * idx
    
    for i in range(0, 10):
        if (sum + (i * missing_idx)) % 11 == 0:
            return f'{i}'

    return 'X'


def test_isbn():
    isbn_codes = ["15688?111X", "020161586?"]
    missing_values = ["1", "X"]

    for isbn_code, missing_value in zip(isbn_codes, missing_values):       
        assert fix_code(isbn_code) == missing_value
    
    
    isbn_codes = ["?131103628", "1?68811306"]
    missing_values = ["0", "5"]

    for isbn_code, missing_value in zip(isbn_codes, missing_values):       
        assert fix_code(isbn_code) == missing_value
