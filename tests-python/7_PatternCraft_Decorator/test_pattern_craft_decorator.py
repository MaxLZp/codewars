class Marine:
    def __init__(self, damage, armor):
        self._damage = damage
        self._armor = armor
        
    @property
    def damage(self):
        return self._damage

    @property
    def armor(self):
        return self._armor

class Marine_weapon_upgrade(Marine):
    def __init__(self, marine: Marine):
        self._marine = Marine(marine.damage + 1, marine.armor)
    
    @property
    def damage(self):
        return self._marine.damage

    @property
    def armor(self):
        return self._marine.armor

class Marine_armor_upgrade(Marine):
    def __init__(self, marine: Marine):
        self._marine = Marine(marine.damage, marine.armor + 1)
    
    @property
    def damage(self):
        return self._marine.damage

    @property
    def armor(self):
        return self._marine.armor


def test_pattern_craft_decorator():
    marine = Marine(10, 1)
    assert Marine_weapon_upgrade(marine).damage == 11
    assert Marine_weapon_upgrade(marine).damage == 11
    
    marine = Marine(15, 1)
    marine = Marine_weapon_upgrade(marine)
    marine = Marine_weapon_upgrade(marine)
    assert marine.damage == 17
    
    marine = Marine(20, 1)
    marine = Marine_weapon_upgrade(marine)
    marine = Marine_weapon_upgrade(marine)
    marine = Marine_weapon_upgrade(marine)
    assert marine.damage == 23
     