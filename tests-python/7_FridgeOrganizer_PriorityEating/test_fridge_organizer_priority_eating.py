class FoodItem():
    def __init__(self, name, expiry_days, is_almost_empty):
        self.name = name
        self.expiry_days = expiry_days
        self.is_almost_empty = is_almost_empty
       
    def __repr__(self):
        return f'{self.name} : {self.expiry_days} => {self.is_almost_empty}'

def fridge_organizer(items):
    return [item.name for item in sorted(
        [item for item in items if item.expiry_days >= 0]
        , key=lambda item: (-item.is_almost_empty, item.expiry_days, item.name)
    )]


def test_fridge_organizer_priority_eating():
    test_data = [
        FoodItem("Milk", 3, False),
        FoodItem("Jam", 3, True),
        FoodItem("Yogurt", 1, False),
        FoodItem("Old Meat", -1, True),
        FoodItem("Today's Tofu", 0, False)
    ]
    expected = ["Jam", "Today's Tofu", "Yogurt", "Milk"]
    assert fridge_organizer(test_data) == expected

    tie_data = [
        FoodItem("Zucchini", 5, False),
        FoodItem("Apples", 5, False)
    ]
    expected = ["Apples", "Zucchini"]
    assert fridge_organizer(tie_data) == expected
                            