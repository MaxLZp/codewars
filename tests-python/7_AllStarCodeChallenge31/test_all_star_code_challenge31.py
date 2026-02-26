class Instruction:
    def __init__(self, amount, solution, instrument, note = None):
        self.amount=amount
        self.solution=solution
        self.instrument=instrument
        self.note = note
        
def help_jesse(arr):
    
    return [f'Pour {i.amount} mL of {i.solution} into a {i.instrument}{f" ({i.note})" if hasattr(i, "note") and i.note else ""}' for i in arr]

    # The below one is accepted by codewars(there's an issue with the 'note' attribute)
    # return [f'Pour {i.amount} mL of {i.solution} into a {i.instrument}{f" ({i.note})" if hasattr(i, "note") else ""}' for i in arr]
  
def test_all_star_code_challenge31():
    recipe = [
        Instruction(5,"Sodium Chloride","Graduated Cylinder"),
        Instruction(250,"Hydrochloric Acid","Boiling Flask"),
        Instruction(100,"Water","Erlenmeyer Flask", "Do NOT mess this step up, Jesse!")
    ]
    test_recipe=recipe[:]
    
    assert help_jesse(recipe) == ["Pour 5 mL of Sodium Chloride into a Graduated Cylinder","Pour 250 mL of Hydrochloric Acid into a Boiling Flask","Pour 100 mL of Water into a Erlenmeyer Flask (Do NOT mess this step up, Jesse!)"]
    assert recipe[0] == test_recipe[0]
    assert recipe[1] == test_recipe[1]
    assert recipe[2] == test_recipe[2]
    assert recipe == test_recipe