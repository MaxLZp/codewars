def print_nums(*args):
    if len(args) == 0: return ''
    width = len(f'{max(args)}')
    return '\n'.join([f'{n}'.rjust(width, '0') for n in args])

def test_format_to_the_2nd():
    assert print_nums() == ''
    assert print_nums(2) == '2'
    assert print_nums(1, 12, 34) == '01\n12\n34'
    assert print_nums(1009, 2) == '1009\n0002'
    assert print_nums(1, 1, 13) == '01\n01\n13'
    assert print_nums(*range(2, 10, 3)) == '2\n5\n8'
    assert print_nums(*(i ** 3 for i in range(1, 4))) == '01\n08\n27'