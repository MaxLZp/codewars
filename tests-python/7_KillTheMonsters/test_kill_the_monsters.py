def kill_monsters(health, monsters, damage):
    hits = (monsters - 1) // 3
        # hits = monsters // 3
        # if monsters % 3 == 0:
        #     hits -= 1
    _damage = hits * damage
    _health = health - _damage
            
    return "hero died" if _health <= 0 else f'hits: {hits}, damage: {_damage}, health: {_health}'

# def kill_monsters(health, monsters, damage):
#     hits = 0
    
#     while monsters > 0:
#         monsters -= 3
#         if monsters > 0:
#             hits += 1
#             health -= damage
            
#     return "hero died" if health <= 0 else f'hits: {hits}, damage: {damage * hits}, health: {health}'


def test_kill_the_monsters():
    assert kill_monsters(50, 7, 10) == "hits: 2, damage: 20, health: 30"
    assert kill_monsters(20, 1, 10) == "hits: 0, damage: 0, health: 20"
    assert kill_monsters(30, 4, 50) == "hero died"
    assert kill_monsters(42, 30, 2) == "hits: 9, damage: 18, health: 24"
    assert kill_monsters(10, 7, 5) == "hero died"
    
    assert kill_monsters(769, 34, 59) == 'hits: 11, damage: 649, health: 120'
