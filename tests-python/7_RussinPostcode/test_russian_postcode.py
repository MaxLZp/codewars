import re

def zipvalidate(postcode):
    return re.fullmatch(r'[12346]\d{5}', postcode) != None

    # The following doesn't work because $ matches end of string
    # but before end of the newline(\n)
    #245980\n
    #      ↑ `$` matches here (before newline)
    # return re.search(r'^[12346]\d{5}$', postcode) != None
    
def test_russian_postcode():
    assert zipvalidate('198328') == True
    assert zipvalidate('310003') == True
    assert zipvalidate('424000') == True
    assert zipvalidate('12A483') == False
    assert zipvalidate('1@63') == False
    assert zipvalidate('111') == False
    assert zipvalidate('056879') == False
    assert zipvalidate('1111111') == False
    assert zipvalidate('245980a') == False
