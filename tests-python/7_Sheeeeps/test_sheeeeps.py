def reload_sheeps(arr):
    """Other"""
    return ['sheep' for el in arr if sorted(el) == sorted('sheep')]


# def reload_sheeps(arr):
#     """ My """
#     def is_sheep(el):
#         if len(el) != len('sheep'): return False
#         d = {'s': 1,'h': 1,'e': 2,'p': 1}
#         for k in d.keys():
#             if el.count(k) != d.get(k): return False

#         return True

#     return ['sheep' for el in arr if is_sheep(el)]
        

def test_sheeeps():
    test_cases = (
        (['sheep', 'sheep', 'sheep', ], ['sheep', 'sheep', 'sheep']),
        ([], []),
        (['shpee', 'pehes', 'pseeh', 'epshe'], ['sheep', 'sheep', 'sheep', 'sheep']),
        (['sespe', 'eeSpH', 'shep', 'phe'], []),
        (['pe', 'hehe', 'heeps', 'eee', 'ti', 'peehs'], ['sheep', 'sheep'])
    )


    for inp, out in test_cases:
        assert reload_sheeps(inp) == out
