def color_2_grey(image):
    return list(
        map(lambda row: list(
            map(lambda r: [round(sum(r) / 3)] * 3
            , row))
        , image))


def test_convert_color_image_to_greyscale():
    def run_test(input_, expected):
        from copy import deepcopy
        actual = color_2_grey(deepcopy(input_))
        # test.expect(isinstance(actual, list), f'Output should be a 3D list: expected {actual} to be a list', allow_raise=True)
        assert len(actual) == len(expected)
        for r in range(len(input_)):
            # test.expect(isinstance(actual[r], list), f'Output should be a 3D list: expected {actual[r]} to be a list', allow_raise=True)
            assert len(actual) == len(expected)
            for c in range(len(input_[r])):
                # test.expect(isinstance(actual[r][c], list), f'Output should be a 3D list: expected {actual[r][c]} to be a list', allow_raise=True)
                assert actual[r][c] == expected[r][c]

    tests = [
    (
        [[[123,231,12],[56,43,124]],[[78,152,76],[64,132,200]]],
        [[[122,122,122],[74,74,74]],[[102,102,102],[132,132,132]]],
    ),
    (
        [[[88,110,23]],[[93,53,35]],[[59,65,5]],[[184,194,2]]],
        [[[74,74,74]],[[60,60,60]],[[43,43,43]],[[127,127,127]]],
    ),
    ]

    for input_, expected in tests:
        run_test(input_, expected)
    