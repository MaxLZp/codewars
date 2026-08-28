class Node(object):
    def __init__(self, data):
        self.data = data
        self.next = None


def append(listA, listB):
    if not listA and not listB: return None
    if not listA: return listB
    if not listB: return listA
    
    tail = listA
    while tail.next:
        tail = tail.next
        
    cur = listB
    while cur:
        tail.next = Node(cur.data)
        tail = tail.next
        cur = cur.next

    return listA
    

def push(head, data):
    newNode = Node(data)
    newNode.next = head
    return newNode

def build_one_two_three():
    head = None
    head = push(head, 3)
    head = push(head, 2)
    head = push(head, 1)
    return head

def build_four_five_six():
    head = None
    head = push(head, 6)
    head = push(head, 5)
    head = push(head, 4)
    return head

def build_one_two_three_four_five_six():
    head = None
    head = push(head, 6)
    head = push(head, 5)
    head = push(head, 4)
    head = push(head, 3)
    head = push(head, 2)
    head = push(head, 1)
    return head

def build_four_five_six_one_two_three():
    head = None
    head = push(head, 3)
    head = push(head, 2)
    head = push(head, 1)
    head = push(head, 6)
    head = push(head, 5)
    head = push(head, 4)
    return head

def build_one_two():
    head = None
    head = push(head, 2)
    head = push(head, 1)
    return head

def build_two_one():
    head = None
    head = push(head, 1)
    head = push(head, 2)
    return head

def assert_linked_list_equals(listA, listB):
    while listA is not None and listB is not None:
        assert listA.data == listB.data
        listA = listA.next
        listB = listB.next
    assert listA == None
    assert listB == None


def test_linked_lists_append():

    assert append(None, None) == None
    
    assert_linked_list_equals(append(None, build_one_two_three()), build_one_two_three())
    assert_linked_list_equals(append(build_one_two_three(), None), build_one_two_three())
    
    assert_linked_list_equals(append(Node(1), Node(2)), build_one_two())
    assert_linked_list_equals(append(Node(2), Node(1)), build_two_one())
    assert_linked_list_equals(append(Node(2), Node(1)).next.next, None)
    
    assert_linked_list_equals(append(build_one_two_three(), build_four_five_six()), build_one_two_three_four_five_six())
    assert_linked_list_equals(append(build_four_five_six(), build_one_two_three()), build_four_five_six_one_two_three())
    assert_linked_list_equals(append(build_four_five_six(), build_one_two_three()).next.next.next.next.next.next, None)