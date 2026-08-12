def pak(s):
    # return ' pak '.join(s.split(' '))
    
    # or
    # import re
    # return re.sub(r'\s', ' pak ', s)

    # or
    return s.replace(' ', ' pak ')


def test_holidayVII_local_talk():
    assert pak("Man I need a taxi up to Ubud") == "Man pak I pak need pak a pak taxi pak up pak to pak Ubud"
    assert pak("What time are we climbing up the volcano?") == "What pak time pak are pak we pak climbing pak up pak the pak volcano?"
    assert pak("Take me to Semynak!") == "Take pak me pak to pak Semynak!"
    assert pak("Massage Yes Massage Yes Massage!") == "Massage pak Yes pak Massage pak Yes pak Massage!"
    assert pak("I'll take 12 bintang and a dance please") == "I'll pak take pak 12 pak bintang pak and pak a pak dance pak please"

        
