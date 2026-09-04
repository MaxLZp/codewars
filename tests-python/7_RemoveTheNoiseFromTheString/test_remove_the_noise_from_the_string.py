def remove_noise(st):
    import re
    return re.sub(r'[%$&/#·@|º\\ª]', '', st)


def test_remove_the_noise_from_the_string():

    test_input = "%$&/#·@|º\\ª"
    assert remove_noise(test_input) == ""


    test1 = "h%e&·%$·llo w&%or&$l·$%d"
    assert remove_noise(test1) == "hello world"
    

    test2 = "he%$·ll@o c$&%odi%&ng for ev|#·ery&$$#$on%$·e"
    assert remove_noise(test2) == "hello coding for everyone"
    

    test3 = "c|o@$%de%w@a·$r%s &rºocªks"
    assert remove_noise(test3) == "codewars rocks"

