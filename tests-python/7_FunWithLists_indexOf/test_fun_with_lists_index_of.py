
class Node:
    def __init__(self, data, next=None): 
        self.data = data
        self.next = next
        
def index_of(head, value): 
    index = 0
    while head:
        if head.data == value: return index
        head = head.next
        index += 1
    return -1

def test_fun_with_lists_index_of():
        n0 = None
        assert index_of(n0, 17) == -1
        
        n3 = Node(3)
        n2 = Node(2, n3)
        n1 = Node(1, n2)
        assert index_of(n1, 2) == 1
        assert index_of(n1, 4) == -1
        
        n3 = Node('abc')
        n2 = Node('b', n3)
        n1 = Node('aaa', n2)
        assert index_of(n1, 'aaa') == 0
        assert index_of(n1, 'c') == -1

        n3 = Node(1.2)
        n2 = Node('17', n3)
        n1 = Node(17, n2)
        assert index_of(n1, 17) == 0
        assert index_of(n1, '17') == 1
        
        n4 = Node(4)
        n3 = Node(3, n4)
        n2 = Node(2, n3)
        n1 = Node(1, n2)
        assert index_of(n1, 3) == 2
