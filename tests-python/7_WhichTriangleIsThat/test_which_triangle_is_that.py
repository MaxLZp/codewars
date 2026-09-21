def type_of_triangle(a, b, c): 
    if (
        (not isinstance(a, int) or not isinstance(b, int) or not isinstance(c, int))
        or 
        (
            a + b <= c or a + c <= b or b + c <= a
        )
    ): 
        return "Not a valid triangle"
        
    if a == b and a == c: return "Equilateral"
    if (a == b and a != c) or (b == c and b != a) or (a == c and a != b): return "Isosceles"
    
    return "Scalene"
    


def test_which_triangle_is_that():
    assert type_of_triangle(1,1,1) == "Equilateral"
    assert type_of_triangle(3,2,4) == "Scalene"
    assert type_of_triangle(2,2,1) == "Isosceles"
    assert type_of_triangle('.',5,82) == "Not a valid triangle"
