def vowel_start(st): 
    import re
    joined = re.sub(r'[^a-z\d]', '', st.lower())
    return re.sub(r'([aeiou])', r" \1", joined).strip()


def test_start_with_vowel():
    assert vowel_start('It is beautiful weather today!') == 'it isb e a ut if ulw e ath ert od ay'
    assert vowel_start('Coding is great') == 'c od ing isgr e at'
    assert vowel_start('my number is 0208-533-2325') == 'myn umb er is02085332325' 
    assert vowel_start('oranges, apples, melon, pineapple') == 'or ang es appl esm el onp in e appl e'
    assert vowel_start('under_score') == 'und ersc or e'