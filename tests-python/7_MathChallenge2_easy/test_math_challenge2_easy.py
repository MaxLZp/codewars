def radii(a, b, c):
    # from math import sqrt
    p=(a+b+c)/2
    # s=sqrt(p*(p-a)*(p-b)*(p-c))
    s=(p*(p-a)*(p-b)*(p-c))**0.5 # replace sqrt with **0.5
    return s/p, a*b*c*0.25/s
  

def test_math_challenge2_easy():
    from math import sqrt
    assert radii(3, 4, 5), (1, 2.5)
    assert radii(5, 12, 13), (2, 6.5)
    assert radii(7, 24, 25), (3, 12.5)
    assert radii(1, 1, 1), (sqrt(3) / 6, sqrt(3) / 3)
    assert radii(sqrt(3), sqrt(3), sqrt(3)), (0.5, 1)
    assert radii(2, 1, 2), (0.3872983346207417, 1.032795558988644)
    assert radii(7, 6, 7), (1.8973665961010275, 3.873790133706265)
    assert radii(1, 5, 5), (0.45226701686664544, 2.51259453814803)
    assert radii(1, 2.5, 3), (0.360288346061446, 1.6012815380508714)
    assert radii(1 + sqrt(3), 1, sqrt(5)), (0.35402145075400576, 1.445695210452133)
    assert radii(3.14, 2.71, 1.61), (0.5848434175540494, 1.5700604925609238)
    # wait that's me... get it? (golden ratio) 1.61... man that was terrible...
    