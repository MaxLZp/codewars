def quadratic_formula(a, b, c):
    root1 = (-b + pow((b*b - 4 * a * c), 0.5)) / (2 * a)
    root2 = (-b - pow((b*b - 4 * a * c), 0.5)) / (2 * a)
    return [root1, root2]


def test_thinkful_number_drills_quadratic_formula():
        def test_roots(actual, expected):
            
            def almost_equals(num1, num2):
                return abs(num1 - num2) <= max(1e-09 * max(abs(num1), abs(num2)), 0.0)            
            
            a, b = sorted(actual), sorted(expected)
            assert almost_equals(a[0], b[0]) and almost_equals(a[1], b[1])
        
        test_roots(quadratic_formula(2, 16, 1), [-7.937003937005906, -0.06299606299409444])
        test_roots(quadratic_formula(4, 21, 3), [-5.103028450199876, -0.14697154980012384])
        test_roots(quadratic_formula(6, 81, 3), [-13.462860791048776, -0.037139208951224134])
