def some_but_not_all(seq, pred): 
   filtered = [i for i in seq if pred(i)]
   # return len(filtered) > 0 and len(filtered) != len(seq)
   
   # Other: Comparison
   return 0 < len(filtered) < len(seq)


def test_some_but_not_all():
   assert some_but_not_all('abcdefg&%$', str.isalpha) == True
   assert some_but_not_all('&%$=', str.isalpha) == False
   assert some_but_not_all('abcdefg', str.isalpha) == False
   assert some_but_not_all([4, 1], lambda x: x>3) == True
   assert some_but_not_all([1, 1], lambda x: x>3) == False
   assert some_but_not_all([4, 4], lambda x: x>3) == False
