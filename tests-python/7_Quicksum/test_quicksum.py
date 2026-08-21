def quicksum(packet):
    import re
    result = 0
    if re.search(r'[^A-Z ]', packet): return result

    for i, c in enumerate(packet):
        result += 0 if c == ' ' else (ord(c) - ord('A') + 1) * (i+1)

    return result

def test_quicksum():
    assert quicksum("ACM") == 46
    assert quicksum("MID CENTRAL") == 650
    assert quicksum("BBC") == 15
    assert quicksum("???") == 0
    assert quicksum("axg ") == 0
    assert quicksum("234 234 WEF ASDF AAA 554211 ???? ") == 0
    assert quicksum("A C M") == 75
    assert quicksum("ABCDEFGHIJKLMNOPQRSTUVWXYZ") == 6201
    assert quicksum("A B C D E F G H I J K L M N O P Q R S T U V W X Y Z") == 12051
    assert quicksum("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ") == 848640
    assert quicksum("Z     A") == 33
    assert quicksum("12312 123 123 asd asd 123 $$$$/()=") == 0
    assert quicksum("As ") == 0
    assert quicksum("         ") == 0
