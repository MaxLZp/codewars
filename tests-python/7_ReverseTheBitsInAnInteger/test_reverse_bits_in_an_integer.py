def reverse_bits(n):
    return int(bin(n)[2::][::-1], 2)
  
def test_reverse_bits_in_an_integer():
    assert reverse_bits(417) == 267
    assert reverse_bits(267) == 417
    assert reverse_bits(0) == 0
    assert reverse_bits(2017) == 1087
    assert reverse_bits(1023) == 1023
    assert reverse_bits(1024) == 1