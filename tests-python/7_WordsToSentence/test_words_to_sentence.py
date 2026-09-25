def words_to_sentence(words):
    return ' '.join(words)


def test_words_to_sentence():
    assert words_to_sentence(['bacon', 'is', 'delicious']) == 'bacon is delicious'
