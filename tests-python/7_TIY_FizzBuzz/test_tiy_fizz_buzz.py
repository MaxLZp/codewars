def tiy_fizz_buzz(string):
    result = ''
    for c in string:
        if c in 'AEIOU': result += 'Iron Yard'
        elif c in 'aeiou': result += 'Yard'
        elif c in 'QWRTPSDFYGHJKLZXCVBNM' : result += 'Iron'
        elif c in 'qwrtpsdfyghjklzxcvbnm' or not c.isalpha(): result += c
        
    return result


def test_tiy_fizz_buzz():

    assert tiy_fizz_buzz(" ") == " "
    assert tiy_fizz_buzz("H") == "Iron"
    assert tiy_fizz_buzz("b") == "b"
    assert tiy_fizz_buzz("A") == "Iron Yard"
    assert tiy_fizz_buzz("a") == "Yard"
    assert tiy_fizz_buzz("Hello WORLD!") == "IronYardllYard IronIron YardIronIronIron!"
    assert tiy_fizz_buzz("H6H4Na ./?U") == "Iron6Iron4IronYard ./?Iron Yard"

    assert tiy_fizz_buzz("ZfTg1oi31N8cFCyUU8HP06UP") == "IronfIrong1YardYard31Iron8cIronIronyIron YardIron Yard8IronIron06Iron YardIron"
