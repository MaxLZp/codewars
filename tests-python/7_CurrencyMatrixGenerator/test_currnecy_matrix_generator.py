def generate_currency_matrix(currency):
    strengths = ["EUR", "GBP", "AUD", "NZD", "USD", "CAD", "CHF", "JPY"]
    result = []
    pos = 0
    for strength in strengths:
        if currency == strength: 
            pos = 1
            continue
        result.append(f'{strength}{currency}' if pos == 0 else f'{currency}{strength}')
    return result
        


def test_currnecy_matrix_generator():
    tests = (
        ('EUR', ['EURGBP', 'EURAUD', 'EURNZD', 'EURUSD', 'EURCAD', 'EURCHF', 'EURJPY']),
        ('GBP', ['EURGBP', 'GBPAUD', 'GBPNZD', 'GBPUSD', 'GBPCAD', 'GBPCHF', 'GBPJPY']),
        ('AUD', ['EURAUD', 'GBPAUD', 'AUDNZD', 'AUDUSD', 'AUDCAD', 'AUDCHF', 'AUDJPY']),
    )

    for inp, exp in tests:
            assert generate_currency_matrix(inp) == exp
