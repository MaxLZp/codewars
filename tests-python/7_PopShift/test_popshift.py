def pop_shift(s):
    result = ["", "", ""]
    lst = list(s)
    while len(lst) > 1 :
        result[0] += lst[-1]
        result[1] += lst[0]
        lst = lst[1:-1]
    result[2] = ''.join(lst)
    
    return result


def test_popshift():
    assert pop_shift("reusetestcasesbitcointakeovertheworldmaybewhoknowsperhaps") == ["spahrepswonkohwebyamdlroweht","reusetestcasesbitcointakeove", "r"]
    assert pop_shift("turnsoutrandomtestcasesareeasierthanwritingoutbasicones") == ["senocisabtuognitirwnahtreis","turnsoutrandomtestcasesaree", "a"]
    assert pop_shift("exampletesthere") == ["erehtse","example","t"]
    assert pop_shift("letstalkaboutjavascriptthebestlanguage") == ["egaugnaltsebehttpir","letstalkaboutjavasc",""]
    assert pop_shift("iwanttotraveltheworldwritingcodeoneday") == ["yadenoedocgnitirwdl","iwanttotravelthewor",""]
    assert pop_shift("letsallgoonholidaysomewhereverycold") == ["dlocyreverehwemos","letsallgoonholida","y"]
    assert pop_shift("22") == ['2', '2', '']
    assert pop_shift("1") == ['', '', '1']
    assert pop_shift("") == ['', '', '']