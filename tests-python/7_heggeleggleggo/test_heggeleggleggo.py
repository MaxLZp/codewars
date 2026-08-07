def heggeleggleggo(word):
    import re
    return re.sub(r'([qwrtypsdfghjklzxcvbnm])', r'\1egg', word, flags=re.IGNORECASE)


def test_heggeleggleggo():
    assert heggeleggleggo("hello") == "heggeleggleggo"
    assert heggeleggleggo("code here") == "ceggodegge heggeregge"
    assert heggeleggleggo("FUN KATA") == "FeggUNegg KeggATeggA"
    assert heggeleggleggo("egg") == "egegggegg"
    assert heggeleggleggo("Hello world") == "Heggeleggleggo weggoreggleggdegg"
    assert heggeleggleggo("scrambled eggs") == "seggceggreggameggbeggleggedegg egegggeggsegg"
    assert heggeleggleggo("eggy bread") == "egegggeggyegg beggreggeadegg"

