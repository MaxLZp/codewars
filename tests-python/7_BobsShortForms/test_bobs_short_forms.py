def short_form(s):
    import re
    return f'{s[0]}{re.sub("[aeiou]", "", s[1:-1], flags=re.IGNORECASE)}{s[-1]}'

  
def test_bobs_short_forms():
    assert short_form("typhoid") == "typhd"
    assert short_form("fire") == "fre"
    assert short_form("destroy") == "dstry"
    assert short_form("kata") == "kta"
    assert short_form("codewars") == "cdwrs"
    
    assert short_form("assert") =="assrt"
    assert short_form("insane") =="insne"
    assert short_form("nice") =="nce"
    assert short_form("amazing") =="amzng"
    assert short_form("incorrigible") =="incrrgble"
    
    assert short_form("HeEllO") == "HllO"
    assert short_form("inCRediBLE") == "inCRdBLE"
    assert short_form("IMpOsSiblE") == "IMpsSblE"
    assert short_form("UnInTENtiONAl") == "UnnTNtNl"
    assert short_form("AWESOme") == "AWSme"
    
    assert short_form("rhythm") == "rhythm"
    assert short_form("hymn") == "hymn"
    assert short_form("lynx") == "lynx"
    assert short_form("nymph") == "nymph"
    assert short_form("pygmy") == "pygmy"
