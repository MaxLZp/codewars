def arithmetic(a, b, operator):
    func = {
        "add" : lambda a,b: a + b,
        "subtract" : lambda a,b: a - b,
        "multiply" : lambda a,b: a * b,
        "divide" : lambda a,b: a / b,
    }
    
    return func.get(operator)(a, b)

def test_make_a_function_that_does_arithmetic():
    assert arithmetic(1, 2, "add") == 3
    assert arithmetic(8, 2, "subtract") == 6
    assert arithmetic(5, 2, "multiply") == 10
    assert arithmetic(8, 2, "divide") == 4

