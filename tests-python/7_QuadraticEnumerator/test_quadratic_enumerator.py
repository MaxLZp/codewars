def quadratic_gen(a, b, c, start = 0, step=1):
    x = start
    while True:
        yield [x, a*x**2 + b*x + c]
        x += step
    
    # or
    '''
        Generator expression (produces values on demand):
        my_generator = (x * x for x in range(10))
    '''
    # return ([start + x * step, a * ((start+x*step)** 2) + b * (start + x*step) + c] for x in range(1000))

def test_quadratic_enumerator():
        a = quadratic_gen(1, 0, 0)
        assert [next(a) for _ in range(7)] == [[0, 0], [1, 1], [2, 4], [3, 9], [4, 16], [5, 25], [6, 36]]
        
        b = quadratic_gen(1, 0, 0, start=2)
        assert [next(b) for _ in range(7)] == [[2, 4], [3, 9], [4, 16], [5, 25], [6, 36], [7, 49], [8, 64]]
        
        gen = quadratic_gen(3, 7, 4, start=0)
        assert next(gen) == [0, 4]
        assert next(gen) == [1, 14]
        
        y = quadratic_gen(3,7,4,start=-1,step=0.5)
        assert [next(y) for _ in range(4)] == [[-1, 0], [-0.5, 1.25], [0.0, 4.0], [0.5, 8.25]]

        z = quadratic_gen(1,0,0,start=-1,step=0.5)
        assert [next(z) for _ in range(3)] == [[-1, 1], [-0.5, 0.25], [0.0, 0.0]]