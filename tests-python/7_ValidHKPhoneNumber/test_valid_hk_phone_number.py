def is_valid_HK_phone_number(number):
    import re
    return re.match(r'^\d{4} \d{4}$', number) is not None


def has_valid_HK_phone_number(number):
    import re
    return re.search(r'\d{4} \d{4}', number) is not None


def test_is_valid_hk_phone_number():
    assert is_valid_HK_phone_number("1234 5678") == True
    assert is_valid_HK_phone_number("2359 1478") == True
    assert is_valid_HK_phone_number("85748475") == False
    assert is_valid_HK_phone_number("3857  4756") == False
    assert is_valid_HK_phone_number("sklfjsdklfjsf") == False
    assert is_valid_HK_phone_number("     1234 5678   ") == False
    assert is_valid_HK_phone_number("abcd efgh") == False
    assert is_valid_HK_phone_number("9684 2396") == True
    assert is_valid_HK_phone_number("836g 2986") == False
    assert is_valid_HK_phone_number("0000 0000") == True
    assert is_valid_HK_phone_number("123456789") == False
    assert is_valid_HK_phone_number(" 987 634 ") == False
    assert is_valid_HK_phone_number("    6    ") == False
    assert is_valid_HK_phone_number("8A65 2986") == False
    assert is_valid_HK_phone_number("8368 2aE6") == False
    assert is_valid_HK_phone_number("8c65 2i86") == False
   
        
def test_has_valid_hk_phone_number():
    assert has_valid_HK_phone_number("Hello, my phone number is 1234 5678") == True
    assert has_valid_HK_phone_number("I wonder if 2359 1478 is a valid phone number?") == True
    assert has_valid_HK_phone_number("85748475 is definitely invalid") == False
    assert has_valid_HK_phone_number("'3857  4756' is so close to a valid phone number!") == False
    assert has_valid_HK_phone_number("sklfjsdklfjsf") == False
    assert has_valid_HK_phone_number("     1234 5678   ") == True
    assert has_valid_HK_phone_number("What about abcd efgh?") == False
    assert has_valid_HK_phone_number("What about 9684 2396?") == True
    assert has_valid_HK_phone_number("And 836g 2986?") == False
    assert has_valid_HK_phone_number("skldfjsdklfjs0000 0000skldfjslkdfjs") == True
    assert has_valid_HK_phone_number("123456789 is invalid") == False
    assert has_valid_HK_phone_number("sdfssdfsdfdf 987 634 sdfsddsds") == False
    assert has_valid_HK_phone_number("\n\n    6    \n\n") == False
    assert has_valid_HK_phone_number("sdfsdsdfdf8A65 2986sdfsddfs") == False
    assert has_valid_HK_phone_number("iwoeurwoeuwo8368 2aE6") == False
    assert has_valid_HK_phone_number("8c65 2i86wioeruwioeruweoi") == False