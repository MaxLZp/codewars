class PokeScan:
    def __init__(self, name, level, pkmntype):
        self._name = name
        self._level = level
        self._pkmntype = pkmntype
        self.__types = {'water': 'wet', 'fire': 'fiery', 'grass': 'grassy'}

    def info(self):
        return f'{self._name}, a {self.type} and {self.strength} Pokemon.'
    
    @property
    def type(self):
        return self.__types.get(self._pkmntype, 'undefined')
    
    @property
    def strength(self):
        result = 'strong'
        if self._level <= 20: result = 'weak'
        elif self._level <= 50: result = 'fair'
        
        return result
        

def test_professor_oaks_trouble_new_pokedex_prototype():
    assert PokeScan('Squirtle', 0, 'water').info() == 'Squirtle, a wet and weak Pokemon.'
    assert PokeScan('Charmander', 0, 'fire').info() == 'Charmander, a fiery and weak Pokemon.'
    assert PokeScan('Bulbasaur', 0, 'grass').info() == 'Bulbasaur, a grassy and weak Pokemon.'

    assert PokeScan('Squirtle', 20, 'water').info() == 'Squirtle, a wet and weak Pokemon.'
    assert PokeScan('Charmander', 20, 'fire').info() == 'Charmander, a fiery and weak Pokemon.'
    assert PokeScan('Bulbasaur', 20, 'grass').info() == 'Bulbasaur, a grassy and weak Pokemon.'

    assert PokeScan('Squirtle', 21, 'water').info() == 'Squirtle, a wet and fair Pokemon.'
    assert PokeScan('Charmander', 21, 'fire').info() == 'Charmander, a fiery and fair Pokemon.'
    assert PokeScan('Bulbasaur', 21, 'grass').info() == 'Bulbasaur, a grassy and fair Pokemon.'

    assert PokeScan('Squirtle', 50, 'water').info() == 'Squirtle, a wet and fair Pokemon.'
    assert PokeScan('Charmander', 50, 'fire').info() == 'Charmander, a fiery and fair Pokemon.'
    assert PokeScan('Bulbasaur', 50, 'grass').info() == 'Bulbasaur, a grassy and fair Pokemon.'

    assert PokeScan('Squirtle', 51, 'water').info() == 'Squirtle, a wet and strong Pokemon.'
    assert PokeScan('Charmander', 51, 'fire').info() == 'Charmander, a fiery and strong Pokemon.'
    assert PokeScan('Bulbasaur', 51, 'grass').info() == 'Bulbasaur, a grassy and strong Pokemon.'

    assert PokeScan('Squirtle', 100, 'water').info() == 'Squirtle, a wet and strong Pokemon.'
    assert PokeScan('Charmander', 100, 'fire').info() == 'Charmander, a fiery and strong Pokemon.'
    assert PokeScan('Bulbasaur', 100, 'grass').info() == 'Bulbasaur, a grassy and strong Pokemon.'

    