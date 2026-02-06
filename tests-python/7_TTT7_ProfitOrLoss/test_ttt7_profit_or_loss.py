def profit_loss(records):
    # return round(sum(record[0] - 100*record[0] / (100 + record[1]) for record in records), 2)
    # or
    # return round(sum(price - 100*price / (100 + profit) for price, profit in records), 2)
    # or
    result = 0
    for price,profit in records:
        result += price - 100*price / (100 + profit)
    return round(result, 2)

    
def test_ttt7_profit_or_loss():
    assert profit_loss([[60,20],[60,-20]]) == -5
    assert profit_loss([[100,20],[80,-20]]) == -3.33
    assert profit_loss([[60,100],[60,-50]]) == -30
    assert profit_loss([[60,0],[60,0]]) == 0