import re

def borrow(s):
    return re.sub(r"[\W]", '', s.lower())
  
def test_borrower_speak():
    assert borrow('WhAt! FiCK! DaMn CAke?') == 'whatfickdamncake'
    assert borrow('THE big PeOpLE Here!!') == 'thebigpeoplehere'
    assert borrow('i AM a TINY BoY!!') == 'iamatinyboy'
