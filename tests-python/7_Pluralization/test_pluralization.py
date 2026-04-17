import re

def pluralize(word):
    if re.search('(s|x|z|ch|sh)$', word): return f'{word}es'
    if re.search('[qwrtpsdfghjklzxcvbnmy]y$', word): return f'{word[:-1]}ies'
    return f'{word}s'
    
      
def test_pluralization():
    sample_test_cases = [
        ('table', 'tables'),
        ('window', 'windows'),
        ('church', 'churches'),
        ('watch', 'watches'),
        ('bus', 'buses'),
        ('box', 'boxes'),
        ('buzz', 'buzzes'),
        ('fly', 'flies'),
        ('day', 'days'),
        ('cloth', 'cloths'),
    ]
    
    for word, expected in sample_test_cases:
        assert pluralize(word) == expected