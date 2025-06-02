# Minimum Percentage of Visitors that Ate All Foods
## 7 kyu

### Task

You are the manager of an amusement park! Today you are doing research on the revenue from various food items sold throughout your venue. All the vendors working for you can report the percentage of visitors that eat that particular food that they sell. Based on this data, your current goal is to create a method to figure out the minimum percentage of all visitors that must have purchased an item from all of the available vendors in your park.
Examples

1. Imagine the park only had one food (Popcorn). If 76% of the visitors get popcorn, then the answer is obvious: a minimum of 76% definitely ate every item because there is only one existing item to purchase.
1. If the park had two items (Hot Dogs and Cotton Candy) and 50% of the visitors ate a hot dog and 50% of the visitors had some cotton candy, it would be easy to say that the maximum percentage of visitors that ate both items would be 50%. But you are trying to find the minimum percentage, and it turns out that would actually be 0% of visitors that ate both items, which is maybe not so obvious.
1. In another example with a larger menu of now four food items available:
    - Donuts 65%
    - Pretzel 80%
    - Pizza 80%
    - Ice Cream 90%
the result would be that 15% of all visitors ate every one of the foods.

### Input

An (array, list, tuple, or vector) of numbers (with length from 1 to 10 inclusive).
Each number represents the percentage (from 0 to 100 inclusive) of visitors that ate a particular food item.

### Output

The minimum percentage of visitors that must have eaten all foods.


###
The idea for this kata came from a video by Presh Talwalkar
  (he credits viewer James W. thanks for the suggestion!)
     from his awesome MindYourDecisions youtube series:
        https://www.youtube.com/watch?v=WMM0b2Sa0T4