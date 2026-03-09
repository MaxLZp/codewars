import re 

def num_key_strokes(text):
    single = re.findall(r"[0-9a-z`\-=\[\]\\;',./\s]", text)
    return 2 * (len(text) - len(single)) + len(single)

def test_kill_the_monsters():
    assert num_key_strokes("Hello, world!") == 15
    assert num_key_strokes("0297350298-02-30856-174346") == 26
    assert num_key_strokes("This is a long SEnteNce.1") == 29