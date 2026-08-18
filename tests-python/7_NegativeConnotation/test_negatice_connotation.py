def connotation(strng):
    pos = neg = 0
    for w in strng.lower().split():
        if w[0] in 'abcdefghijklm':
            pos += 1
        else:
            neg += 1

    return pos >= neg

  
def test_negatice_connotation():
    assert connotation("A big brown fox caught a bad bunny") == True
    assert connotation("Xylophones can obtain Xenon.") == False
    assert connotation("CHOCOLATE MAKES A GREAT SNACK") == True
    assert connotation("All FOoD tAsTEs NIcE for someONe") == True
    assert connotation("Is  this the  best  Kata?") == True
