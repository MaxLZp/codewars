class SiegeState:
    def __init__(self):
        self.can_move = False
        self.damage = 20

class TankState:
    def __init__(self):
        self.can_move = True
        self.damage = 5

class Tank:
    def __init__(self):
        self.state = TankState()

    def can_move(self):
        return self.state.can_move
  
    def damage(self):
        return self.state.damage


def test_pattern_craft_state():

    tank = Tank()
    assert tank.can_move() == True
    assert tank.damage() == 5

    tank = Tank()
    tank.state = SiegeState()
    assert tank.can_move() == False
    assert tank.damage() == 20

    tank = Tank()
    assert tank.can_move() == True
    tank.state = SiegeState()
    assert tank.damage() == 20
