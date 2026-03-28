def partlist(arr):
    return [(' '.join(arr[:i+1]), ' '.join(arr[i+1:])) for i, el in enumerate(arr[:-1])]
    # or 
    # return [(' '.join(arr[:i]), ' '.join(arr[i:])) for i in range(1, len(arr))]
    
def test_parts_of_a_list():
     
    assert (partlist(["I", "wish", "I", "hadn't", "come"]) ==
        [("I", "wish I hadn't come"), ("I wish", "I hadn't come"), ("I wish I", "hadn't come"), ("I wish I hadn't", "come")])
    assert (partlist(["cdIw", "tzIy", "xDu", "rThG"]) ==
        [("cdIw", "tzIy xDu rThG"), ("cdIw tzIy", "xDu rThG"), ("cdIw tzIy xDu", "rThG")])
    assert (partlist(["vJQ", "anj", "mQDq", "sOZ"]) ==
        [("vJQ", "anj mQDq sOZ"), ("vJQ anj", "mQDq sOZ"), ("vJQ anj mQDq", "sOZ")])
  