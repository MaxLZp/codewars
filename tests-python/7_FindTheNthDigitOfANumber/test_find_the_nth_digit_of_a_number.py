def find_digit(num, nth):
    return -1 if nth <= 0 else int(f'{abs(num):0{nth}d}'[-nth])


def test_find_the_nth_digit_of_a_number():

        assert find_digit(5673, 4) == 5
        assert find_digit(129, 2) == 2
        assert find_digit(-2825, 3) == 8
        assert find_digit(0, 20) == 0
        assert find_digit(65, 0) == -1
        assert find_digit(24, -8) == -1

        assert find_digit(-456, 5) == 0
        assert find_digit(-1234, 2) == 3
        assert find_digit(-5540, 1) == 0
        
        assert find_digit(678998, 0) == -1
        assert find_digit(-67854, -57) == -1
        assert find_digit(0, -3) == -1
