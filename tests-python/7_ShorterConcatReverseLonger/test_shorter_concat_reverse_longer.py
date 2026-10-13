def shorter_reverse_longer(a,b):
   _a, _b = a, b
   if len(a) >= len(b):
      _b, _a = a, b  
   return f'{_a}{_b[::-1]}{_a}'


def test_shorter_concat_reverse_longer():
   assert shorter_reverse_longer("first", "abcde") == "abcdetsrifabcde"
   assert shorter_reverse_longer("hello", "bau") == "bauollehbau"
   assert shorter_reverse_longer("abcde", "fghi") == "fghiedcbafghi"
