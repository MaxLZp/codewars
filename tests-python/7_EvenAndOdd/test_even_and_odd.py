import re

def even_and_odd(n): 
    return (
        int('0'+''.join(re.findall(r"[02468]", f"{n}") or ())),
        int('0'+''.join(re.findall(r"[13579]", f"{n}") or ()))
    )
  
def test_even_and_odd():
    assert even_and_odd(126453) == (264, 153)
    assert even_and_odd(3012) == (2, 31)
    assert even_and_odd(4628) == (4628, 0)