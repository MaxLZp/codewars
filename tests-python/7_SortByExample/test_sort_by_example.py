def example_sort(arr, example_arr):
   result = []
   for example in example_arr:
      result += [el for el in arr if el == example]
   
   return result

   ## other
   # return sorted(arr, key=example_arr.index)


def test_sort_by_example():
   assert example_sort([1,2,3,4,5],[2,3,4,1,5]) == [2,3,4,1,5]
   assert example_sort([1,2,3,3,3,4,5],[2,3,4,1,5]) == [2,3,3,3,4,1,5]
   assert example_sort([1,2,3,3,3,5],[2,3,4,1,5]) == [2,3,3,3,1,5]
   assert example_sort([1,2,3,3,3,5],
      [3,4,5,6,9,11,12,13,1,7,8,2,10]) == [3,3,3,5,1,2]
   assert example_sort(["a","a","b","f","d","a"],
      ["c","a","d","b","e","f"]) == ["a","a","a","d","b","f"]
   assert example_sort(["Alice","Bryan","Chad","Darrell",
      "Ellie","Fiona"],["Alice","Bryan","Chad","Darrell","Ellie","Fiona"]) == [
      "Alice","Bryan","Chad","Darrell","Ellie","Fiona"]

