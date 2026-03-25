def two_by_two(animals):
    #Other
    return {animal:2 for animal in set(animals) if animals.count(animal) > 1} if animals else False


# def two_by_two(animals):
#     if (len(animals) == 0): return False
    
#     result = {}
#     for animal in animals:
#         if not animal in result.keys():
#             result[animal] = 0
#         result[animal] += 1 if result[animal] < 2 else 0
    
#     result = {key:value for key, value in result.items() if value >= 2}
    
#     return result
    
def test_the_animals_went_in_two_by_two():
    BASIC_TESTS = (
        ([], False),
        (['goat'], {}),
        (["dog", "cat", "dog", "cat", "beaver", "cat"], {'cat': 2, 'dog': 2}),
        (["goat", "goat", "rabbit", "rabbit", "rabbit", "duck",
          "horse", "horse", "swan"], {'goat': 2, 'horse': 2, 'rabbit': 2})
    )
    for animals_list, result in BASIC_TESTS:
        assert two_by_two(animals_list) == result