import re

def coffee(sentence):
    return re.sub(r"coffee", 'COFFEE', sentence, flags=re.IGNORECASE) 
  
def test_coffee():
    assert coffee("Is that coffee?  Can I have it?  I'll pay you.") == "Is that COFFEE?  Can I have it?  I'll pay you."
    assert coffee("I'm having trouble staying focussed.  Let's get some coffee.") == "I'm having trouble staying focussed.  Let's get some COFFEE."
       
    assert type(coffee("Sweet coffee.")) == str

