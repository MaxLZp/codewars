def is_defended(attackers, defenders):
    max_len = max(len(attackers), len(defenders))
    attackers += [0]*(max_len - len(attackers))
    defenders += [0]*(max_len - len(defenders))

    defenders_survived = 0
    for i in range(0, max_len):
        if defenders[i] > attackers[i]: defenders_survived += 1
        
    attackers_survived = max_len - defenders_survived
        
    if defenders_survived > attackers_survived:
        return True
    if defenders_survived == attackers_survived:
        return sum(defenders) >= sum(attackers)
    else:
        return False
    

def test_survive_the_attack():
    assert is_defended([ 2, 9, 9, 7 ], [ 1, 1, 3, 8]) == False
    assert is_defended([1,3,5,7], [2,4,6,8]) == True
    assert is_defended([10, 10, 1, 1], [4, 4, 7, 7]) == True
    assert is_defended([], [1,2,3]) == True
    assert is_defended([1,2,3], []) == False
    