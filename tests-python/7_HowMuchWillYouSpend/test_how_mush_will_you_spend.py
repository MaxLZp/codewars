def get_total(costs, items, tax):
    return round((1+tax) * sum([costs.get(item, 0) for item in items]), 2)

def test_how_mush_will_you_spend():
    costs = {'socks':5, 'shoes':60, 'sweater':30}
    assert get_total(costs, ['socks', 'shoes'], 0.09) == 70.85
    assert get_total(costs, ['shoes', 'shirt'], 0.09) == 65.40