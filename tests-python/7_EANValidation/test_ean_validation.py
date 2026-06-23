def validate_ean(code):
    checksum = 0
    for i in range(0, 12):
        checksum += int(code[i]) * (3 if i % 2 else 1)  
    
    return code[-1] == ('0' if checksum % 10 == 0 else str(10 - (checksum % 10)))

  
def test_ean_validation():
    assert validate_ean("9783815820865") == True
    assert validate_ean("9783815820864") == False
    assert validate_ean("9783827317100") == True
    