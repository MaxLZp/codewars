import re 

def count_lonely_letters(text):
    result = 0
    text = re.sub(r"[^a-z]", '', text.lower(), flags=re.IGNORECASE)
    for c in text:
        is_lonely = (text.count(c) > 1
                    or
                    (text.count(chr(ord(c)-1)) 
                    or 
                    text.count(chr(ord(c)+1)))
                    )
        result += 0 if is_lonely else 1
    
    return result

def test_how_many_lonely_letters():

        assert count_lonely_letters("ad") == 2
        assert count_lonely_letters("abc") == 0
        assert count_lonely_letters("Hello, World!") == 3
        assert count_lonely_letters("A-dA") == 1
        assert count_lonely_letters("zz") == 0

        assert count_lonely_letters("") == 0
        assert count_lonely_letters("123 !!!") == 0
        assert count_lonely_letters("bdfhj") == 5
        assert count_lonely_letters("a") == 1
        assert count_lonely_letters("z") == 1
        assert count_lonely_letters("iiiaii`ii") == 1
        assert count_lonely_letters("iiiziii{iii") == 1
        assert count_lonely_letters("iiiAiii@ii") == 1
        assert count_lonely_letters("iiiZiii[iii") == 1

        assert count_lonely_letters("Aa") == 0
        assert count_lonely_letters("B!d") == 2
        assert count_lonely_letters("C-c?e") == 1