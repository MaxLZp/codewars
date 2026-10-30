def gordon(a):
    import re
    words = a.upper().split()
    return ' '.join(re.sub(r'[AUOIE]', '*', word.replace('A', '@'))+'!!!!' for word in words)


def test_hells_kitchen():
    assert gordon('What feck damn cake') == 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!'
    assert gordon('are you stu pid') == '@R*!!!! Y**!!!! ST*!!!! P*D!!!!'
    assert gordon('i am a chef') == '*!!!! @M!!!! @!!!! CH*F!!!!'
    assert gordon('dont you talk tome') == 'D*NT!!!! Y**!!!! T@LK!!!! T*M*!!!!'
    assert gordon('how dare you feck') == 'H*W!!!! D@R*!!!! Y**!!!! F*CK!!!!'
