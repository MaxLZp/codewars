def hand_out_gift(name, children = []):
    if name in children: raise 'Naughty'
    children.append(name)


def test_only_one_gift_per_child():
    import pytest
    
    hand_out_gift('Peter')
    hand_out_gift('Alison')
    hand_out_gift('John')
    hand_out_gift('Maria')

    with pytest.raises(Exception) as er:
        hand_out_gift('Peter')