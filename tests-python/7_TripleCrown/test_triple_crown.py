def triple_crown(receivers):
    for key in receivers.keys():
        is_max = True
        for i_key in receivers.keys():
            if (key == i_key): continue
            if (
                receivers[key]['Receiving yards'] <= receivers[i_key]['Receiving yards']
                or
                receivers[key]['Receiving touchdowns'] <= receivers[i_key]['Receiving touchdowns']
                or
                receivers[key]['Receptions'] <= receivers[i_key]['Receptions']
            ):
                is_max = False
        if is_max: return key
        
    return 'None of them'


def test_triple_crown():
        assert triple_crown({'Cooper Kupp': {'Receiving yards': 1800, 'Receiving touchdowns': 18, 'Receptions': 117},
                                         'Justin Jefferson': {'Receiving yards': 1700, 'Receiving touchdowns': 17, 'Receptions': 116},
                                        'Davante Adams':{'Receiving yards': 1750, 'Receiving touchdowns': 16, 'Receptions': 113}}) == 'Cooper Kupp'
        assert triple_crown({'Cooper Kupp': {'Receiving yards': 1700, 'Receiving touchdowns': 18, 'Receptions': 117},
                                         'Justin Jefferson': {'Receiving yards':1650, 'Receiving touchdowns': 17, 'Receptions': 115},
                                        'Davante Adams':{'Receiving yards': 1750, 'Receiving touchdowns': 16, 'Receptions': 113}}) == 'None of them'
        assert triple_crown({'Cooper Kupp': {'Receiving yards': 1800, 'Receiving touchdowns': 16, 'Receptions': 110},
                                         'Justin Jefferson': {'Receiving yards': 1725, 'Receiving touchdowns': 15, 'Receptions': 112},
                                        'Davante Adams':{'Receiving yards': 1800, 'Receiving touchdowns': 16, 'Receptions': 113}}) == 'None of them'

        assert triple_crown({'Cooper Kupp': {'Receiving yards': 1849, 'Receiving touchdowns': 17, 'Receptions': 110}, 
                                        'Justin Jefferson': {'Receiving yards': 1933, 'Receiving touchdowns': 11, 'Receptions': 98}, 
                                        'Davante Adams': {'Receiving yards': 1570, 'Receiving touchdowns': 11, 'Receptions': 107}}) == 'None of them'

        assert triple_crown({'Cooper Kupp': {'Receiving yards': 1741, 'Receiving touchdowns': 14, 'Receptions': 116}, 
                                        'Justin Jefferson': {'Receiving yards': 1999, 'Receiving touchdowns': 15, 'Receptions': 120}, 
                                        'Davante Adams': {'Receiving yards': 1545, 'Receiving touchdowns': 20, 'Receptions': 98}}) == 'None of them'

        assert triple_crown({'Cooper Kupp': {'Receiving yards': 1810, 'Receiving touchdowns': 14, 'Receptions': 96}, 
                                        'Justin Jefferson': {'Receiving yards': 1811, 'Receiving touchdowns': 20, 'Receptions': 116}, 
                                        'Davante Adams': {'Receiving yards': 1796, 'Receiving touchdowns': 20, 'Receptions': 95}}) == 'None of them'
