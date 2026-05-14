import re

def jeringonza(s):
    def _sub(c):
        return f'{c}p{c}' if c.lower() == c else f'{c}P{c}'
    
    return re.sub(
        r'[aoiue]', 
        lambda c: f'{_sub(c.group())}',
        s,
        flags = re.IGNORECASE)
    
    # Other
    # stg = stg.replace(c, f"{c}{'p' if c.islower() else 'P'}{c}")

def test_simple_jeringonza():
    assert jeringonza('jeringonza') == 'jeperipingoponzapa'
    assert jeringonza('jEringonzA') == 'jEPEripingoponzAPA'
    assert jeringonza('Played in Spain and across Latin America') == 'Plapayeped ipin Spapaipin apand apacroposs Lapatipin APAmeperipicapa'
    assert jeringonza('The quick brown fox jumped over the lazy dog') == 'Thepe qupuipick bropown fopox jupumpeped opoveper thepe lapazy dopog'
    assert jeringonza('Please give this kata some love if you enjoyed it') == 'Plepeapasepe gipivepe thipis kapatapa sopomepe lopovepe ipif yopoupu epenjopoyeped ipit'

