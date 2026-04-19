def london_city_hacker(journey): 
    total = 0
    prev = None
    for item in journey:
        if type(item) == str:
            total += 2.4
            prev = item
        elif type(prev) == int:
            total += 0
            prev = None
        else:
            total += 1.5
            prev = item

    return f'£{total:.2f}'

def test_london_city_hacker():
    assert london_city_hacker([12, 'Central', 'Circle', 21]) == "£7.80"
    assert london_city_hacker(['Piccadilly', 56]) == "£3.90"
    assert london_city_hacker(['Northern', 'Central', 'Circle']) == "£7.20"
    assert london_city_hacker(['Piccadilly', 56, 93, 243]) == "£5.40"
    assert london_city_hacker([386, 56, 1, 876]) == "£3.00"  
    assert london_city_hacker([]) == "£0.00"