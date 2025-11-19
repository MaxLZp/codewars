import re

def err_bob(st):
    return re.sub(
        r"([bcdfghjklmnpqrstvwxyz])(\W|$)", 
        r"\1err\2", 
        re.sub(
            r"([BCDFGHJKLMNPQRSTVWXYZ])(\W|$)", 
            r"\1ERR\2", 
            st)
        )
  
def test_please_help_bob():
    assert err_bob("r r r r r r r r") == "rerr rerr rerr rerr rerr rerr rerr rerr"
    assert err_bob("THIS, is crazy!") == "THISERR, iserr crazyerr!"
    assert err_bob("hI, hi. hI hi skY! sky? skY sky") == "hI, hi. hI hi skYERR! skyerr? skYERR skyerr"
    assert err_bob("Hello, I am Mr Bob.") == "Hello, I amerr Mrerr Boberr."
    assert err_bob("This, is. another! test? case to check your beautiful code.") == "Thiserr, iserr. anothererr! testerr? case to checkerr yourerr beautifulerr code."
    assert err_bob("Hello from the other siiiiideeee") == "Hello fromerr the othererr siiiiideeee"
    assert err_bob("Punctuation? is, important!  double space also") == "Punctuationerr? iserr, importanterr!  double space also"
