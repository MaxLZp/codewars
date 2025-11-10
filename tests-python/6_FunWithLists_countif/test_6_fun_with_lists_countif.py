class Node:
    def __init__(self, data, next=None): 
        self.data = data
        self.next = next

def count_if(head, func):
    return 0 if not head else func(head.data) + count_if(head.next, func)

def test_6_fun_with_lists_countif():
    assert count_if(None, lambda x: False) == 0
    assert count_if(None, lambda x: True) == 0
    assert count_if(Node(1, Node(2, Node(3))), lambda x: x <= 2) == 2
  