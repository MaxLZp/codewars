def odd_ball(arr: list):
    try:
        idx = arr.index( arr.index('odd') )
        return True
    except ValueError:
        return False


def test_odds_index():
    assert odd_ball(["even",4,"even",7,"even",55,"even",6,"even",10,"odd",3,"even"]) == True
    assert odd_ball(["even",4,"even",7,"even",55,"even",6,"even",9,"odd",3,"even"]) == False
    assert odd_ball(["even",10,"odd",2,"even"]) == True
    