class Journey:
    single_crew_weight = 80
    baloon_power = 4.8

    def __init__(self, object, crew, baloons) -> None:
        self.object = object
        self.crew = crew
        self.baloons = baloons
    
    def isPossible(self) -> bool:
        return self._journey_weight() <= self._up_power()
    
    def _journey_weight(self):
        return (self.object.get('weight') + self.crew * Journey.single_crew_weight) * 1000
    
    def _up_power(self):
        return self.baloons * Journey.baloon_power


def test_can_this_object_fly_baloons_in_up_and_in_real_life():
    letter = {'weight': 0.004536}
    house = {'weight': 45000}
    pushCart = {'weight': 95}
    lawnChair = {'weight': 5}
    
    flyingCart = Journey(pushCart, 0, 50)
    loveOfMyLife = Journey(letter, 0, 1)
    gravityFalls = Journey(house, 2, 20622)
    assert flyingCart.isPossible() == False
    assert loveOfMyLife.isPossible() == True
    assert gravityFalls.isPossible() == False
    
    gravityFallsTake2 = Journey(house, 2, 9600000)
    flyingCartTake2 = Journey(pushCart, 0, 20622)
    assert flyingCartTake2.isPossible() == True
    assert gravityFallsTake2.isPossible() == True
        
        
    lawnChairLarry = Journey(lawnChair, 1, 45)
    stormAccident = Journey(lawnChair, 1, 1000)
    lawnChairFlight = Journey(lawnChair, 1, 18000)
    assert lawnChairLarry.isPossible() == False
    assert stormAccident.isPossible() == False
    assert lawnChairFlight.isPossible() == True