class Target:
    def __init__(self, health):
        self.health = health

class Marine:
    @staticmethod
    def attack(target):
        target.health -= 6
    
class Zealot:
    @staticmethod
    def attack(target):
        target.health -= 8

class Zergling:
    @staticmethod
    def attack(target):
        target.health -= 5
    
class Mario:
    @staticmethod
    def jump_attack():
        print('Mamamia!')
        return 3

class MarioAdapter:
    def __init__(self, mario: Mario):
        self._mario = mario

    def attack(self, target: Target):
        target.health -= self._mario.jump_attack()


def test_pattern_crafr_adapter():
    mario = Mario()
    assert hasattr(mario, 'attack') == False

    mario = Mario()
    mario_adapter = MarioAdapter(mario)
    assert hasattr(mario_adapter, 'attack') == True

    mario = Mario()
    mario_adapter = MarioAdapter(mario)
    
    target = Target(33)
    mario_adapter.attack(target)
    assert target.health == 30
    
    try:
        mario_adapter = MarioAdapter()
    except TypeError as e:
        assert str(e) == "MarioAdapter.__init__() missing 1 required positional argument: 'mario'"
     