import copy

def get_depth(arr):
   if len(arr) == 0:
      return 0
   
   depth = 1
   cur = arr[0]
   while len(cur):
      depth += 1
      cur = cur[0]
   return depth

def sort_by_depth(arr):     
   return sorted(arr, key=get_depth)

   # or simply (other)
   # return sorted(arr)



def test_sorting_singluarly_nested_lists_by_depth():
   test_cases = [
      ([ [[[[[]]]]], [[]], [], [[[]]], []], [ [], [], [[]], [[[]]], [[[[[]]]]] ]),
      ([ [[]], [], [], [] , [[[[[[[]]]]]]], [], [[]] , [[[]]], [] ] , [[], [], [], [], [], [[]], [[]], [[[]]], [[[[[[[]]]]]]]]),
      ([ [[]], [] ] , [[], [[]]]),
      ([ [[[]]],[],[[]] ],[ [],[[]], [[[]]] ]),
      ([ [],[[]],[],[],[],[[]],[],[] ], [ [],[],[],[],[],[],[[]],[[]]  ]),
      ([ [[[[[[]]]]]],[],[],[],[] ],[ [],[],[],[],[[[[[[]]]]]] ]),
      ([ [] ],[ [] ]),
      ([ [], [], [], [] ], [ [],[],[],[] ]),
      ([ [],[[]],[] ], [ [],[],[[]] ]),
      ([],[]),
      

   ]
   
   for arr, expected in test_cases:
      assert sort_by_depth(copy.deepcopy(arr)) == copy.deepcopy(expected)
