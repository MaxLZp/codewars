from typing import Callable, Any

class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next
        
def lst_to_link(list):
    link = current = Node(list[0])
    for el in list[1:]:
        current.next = Node(el)
        current = current.next
    return link
    

def any_match(head: Node, pred: Callable[[Any], bool]) -> bool:
    cur = head
    while cur:
        if pred(cur.data): return True
        cur = cur.next
        
    return False

def all_match(head: Node, pred: Callable[[Any], bool]) -> bool:
    cur = head
    while cur:
        if not pred(cur.data): return False
        cur = cur.next
        
    return True

def test_fun_with_lists_any_match_all_match():
    assert any_match(None, lambda x: False) == False
    assert any_match(None, lambda x: True) == False
    assert all_match(None, lambda x: False) == True
    assert all_match(None, lambda x: True) == True
    assert any_match(lst_to_link([1, 2, 3]), lambda x: x > 1) == True
    assert all_match(lst_to_link([1, 2, 3]), lambda x: x > 1) == False
