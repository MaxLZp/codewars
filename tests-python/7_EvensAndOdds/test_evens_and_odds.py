def evens_and_odds(n):
    return bin(n)[2:] if n % 2 == 0 else hex(n)[2:]
    
def test_evens_and_odds():
    assert evens_and_odds(2) == '10'
    assert evens_and_odds(0) == '0'
    assert evens_and_odds(13) == 'd'
    assert evens_and_odds(47) == '2f'
    assert evens_and_odds(12800) == '11001000000000'
    assert evens_and_odds(8172381723) == '1e71ca61b'
