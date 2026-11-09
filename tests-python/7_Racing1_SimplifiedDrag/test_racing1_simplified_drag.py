class Car:
    def __init__(self, speed, reaction_time):
        self.speed = speed
        self.reaction_time = reaction_time

def drag_race(length, anna, bob):
    anna_time = anna.reaction_time + length / anna.speed
    bob_time = bob.reaction_time + length / bob.speed
    
    if anna_time == bob_time: 
        return "It's a draw"
    
    return "Anna is the winner" if anna_time < bob_time else "Bob is the winner"


def test_racing1_simplified_drag():
    anna = Car(20, 1)
    bob = Car(30, 3)

    assert drag_race(100, anna, bob) == "Anna is the winner"
        
    assert drag_race(150, anna, bob) == "Bob is the winner"
        
    assert drag_race(120, anna, bob) == "It's a draw"