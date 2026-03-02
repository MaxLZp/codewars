def zombie_shootout(zombies, distance, ammo):
    if ammo < zombies and ammo < distance * 2:
        return f'You shot {ammo} zombies before being eaten: ran out of ammo.'
    
    if distance * 2 < zombies: 
        return f'You shot {distance * 2} zombies before being eaten: overwhelmed.'
    
    return f'You shot all {zombies} zombies.'


def test_will_you_survive_the_zombie_onslaught():
    assert zombie_shootout(3, 10, 10) == "You shot all 3 zombies."
    assert zombie_shootout(100, 8, 200) == "You shot 16 zombies before being eaten: overwhelmed."
    assert zombie_shootout(50, 10, 8) == "You shot 8 zombies before being eaten: ran out of ammo."
    
    assert zombie_shootout(9, 10, 8) == "You shot 8 zombies before being eaten: ran out of ammo."
    assert zombie_shootout(68, 75, 68) == "You shot all 68 zombies."
    assert zombie_shootout(100, 10, 20) == "You shot 20 zombies before being eaten: overwhelmed."