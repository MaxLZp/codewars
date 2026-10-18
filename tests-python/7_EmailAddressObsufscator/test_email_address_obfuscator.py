def obfuscate(email):
    return email.replace('@', ' [at] ').replace('.', ' [dot] ')

  
def test_email_address_obfuscator():
    assert obfuscate('test@123.com') == 'test [at] 123 [dot] com'
    assert obfuscate('Code_warrior@foo.ac.uk') == 'Code_warrior [at] foo [dot] ac [dot] uk'
    assert obfuscate('user_name@example.com') == 'user_name [at] example [dot] com'
    assert obfuscate('af5134@borchmore.edu') == 'af5134 [at] borchmore [dot] edu'
    assert obfuscate('jim.kuback@ennerman-hatano.com') == 'jim [dot] kuback [at] ennerman-hatano [dot] com'
    assert obfuscate('sir_k3v1n_wulf@blingblong.net') == 'sir_k3v1n_wulf [at] blingblong [dot] net'
    assert obfuscate('Hmm, this would be better with input validation...!') == 'Hmm, this would be better with input validation [dot]  [dot]  [dot] !'
