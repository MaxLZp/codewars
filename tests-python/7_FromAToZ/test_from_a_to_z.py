def gimme_the_letters(sp):
    return ''.join([chr(c) for c in range(ord(sp[0]), ord(sp[2])+1)])


def test_from_a_to_z():
    assert gimme_the_letters("a-z") == "abcdefghijklmnopqrstuvwxyz"
    assert gimme_the_letters("h-o") == "hijklmno"
    assert gimme_the_letters("Q-Z") == "QRSTUVWXYZ"
    assert gimme_the_letters("J-J") == "J"
    assert gimme_the_letters("a-b") == "ab"
    assert gimme_the_letters("A-A") == "A"
    assert gimme_the_letters("g-i") == "ghi"
    assert gimme_the_letters("H-I") == "HI"
    assert gimme_the_letters("y-z") == "yz"
    assert gimme_the_letters("e-k") == "efghijk"
    assert gimme_the_letters("a-q") == "abcdefghijklmnopq"
                            