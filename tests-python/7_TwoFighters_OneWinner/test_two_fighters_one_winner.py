import math


class Fighter(object):
    def __init__(self, name, health, damage_per_attack):
        self.name = name
        self.health = health
        self.damage_per_attack = damage_per_attack
        
    def __str__(self): return "Fighter({}, {}, {})".format(self.name, self.health, self.damage_per_attack)
    __repr__=__str__


def declare_winner(fighter1, fighter2, first_attacker):
    if first_attacker == fighter2.name:
        fighter1, fighter2 = fighter2, fighter1
    fighter1_hits = math.ceil(fighter2.health / fighter1.damage_per_attack)
    fighter2_hits = math.ceil(fighter1.health / fighter2.damage_per_attack)
    
    return fighter1.name if fighter1_hits <= fighter2_hits else fighter2.name


def test_two_fighters_one_winner():
    assert declare_winner(Fighter("Lew", 10, 2),Fighter("Harry", 5, 4), "Lew") == "Lew"
    assert declare_winner(Fighter("Lew", 10, 2),Fighter("Harry", 5, 4), "Harry") == "Harry"
    assert declare_winner(Fighter("Harald", 20, 5), Fighter("Harry", 5, 4), "Harry") == "Harald"
    assert declare_winner(Fighter("Harald", 20, 5), Fighter("Harry", 5, 4), "Harald") == "Harald"
    assert declare_winner(Fighter("Jerry", 30, 3), Fighter("Harald", 20, 5), "Jerry") == "Harald"
    assert declare_winner(Fighter("Jerry", 30, 3), Fighter("Harald", 20, 5), "Harald") == "Harald"
