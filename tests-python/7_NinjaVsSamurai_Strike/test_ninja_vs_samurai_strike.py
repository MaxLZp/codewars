class Warrior:
    def __init__(self,name):
        self.name=name
        self.health=100
        
    def strike(self, enemy,swings):
        #health cannot go below zero
        enemy.health=max([0,enemy.health-(swings*10)])
            
# Original version            
# class Warrior:
#     def __init__(self,name):
#         self.name=name
#         self.health=100
        
#         def strike(enemy,swings):
#             #health cannot go below zero
#             enemy.health=max([-1,enemy.health-(swings*10)])

  
def test_ninja_vs_samurai_strike():
    from random import randint

    name=['Hattori Hanzo','Sasuke Sarutobi','Jubei Kibagami','Kotaro Fuma'][randint(0,3)]
    ninja = Warrior(name)
    assert ninja.name == name

    samurai = Warrior('Samurai')
    samurai.strike(ninja, 3)
    assert ninja.health == 70

