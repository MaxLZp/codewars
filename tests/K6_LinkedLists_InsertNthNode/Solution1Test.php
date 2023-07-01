<?php

namespace tests\K6_LinkedLists_InsertNthNode;

use PHPUnit\Framework\TestCase;


class Node {
    public $data, $next;
    public function __construct($data, $next = NULL) {
        $this->data = $data;
        $this->next = $next;
    }
}

function push($head, $data) {
    return new Node($data, $head);
}

function build_one_two_three() {
    $list = push(null, 3);
    $list = push($list, 2);
    $list = push($list, 1);
    return $list;
}

function insert_nth($head, $index, $data) {
    if (!$head) {
        return push(null, $data);
    }
    if (!$index) {
        return push($head, $data);
    }

    $node = $nodePrev = $head;
    for ($i = 0; $i < $index; $i++) {
        if (!$node) {
            throw new \InvalidArgumentException();
        }
        $nodePrev = $node;
        $node = $node->next;
    }
    $nodePrev->next = push($node, $data);
    return $head;
}


class Solution1Test extends TestCase
{
    protected function displayLinkedList($l) {
        if (is_null($l)) return "NULL";
        if (!is_a($l, 'tests\K6_LinkedLists_InsertNthNode\Node')) throw new \InvalidArgumentException("Expected input to be either NULL or an instance of Node");
        return "$l->data -> " . $this->displayLinkedList($l->next);
    }

    public function testCanHandleEmptyList() {
        $this->assertSame("12 -> NULL", $this->displayLinkedList(insert_nth(NULL, 0, 12)));
        $this->assertSame("23 -> NULL", $this->displayLinkedList(insert_nth(NULL, 0, 23)));
        $this->assertSame("42 -> NULL", $this->displayLinkedList(insert_nth(NULL, 0, 42)));
        $this->assertSame("13 -> NULL", $this->displayLinkedList(insert_nth(NULL, 0, 13)));
        $this->assertSame("666 -> NULL", $this->displayLinkedList(insert_nth(NULL, 0, 666)));
    }

    public function testCanInsertNewNodeAtHeadOfList() {
        $this->assertSame("23 -> 1 -> 2 -> 3 -> NULL", $this->displayLinkedList(insert_nth(build_one_two_three(), 0, 23)));
        $this->assertSame("33 -> 42 -> 13 -> 666 -> NULL", $this->displayLinkedList(insert_nth(new Node(42, new Node(13, new Node(666))), 0, 33)));
        $this->assertSame("54 -> 3 -> 5 -> 8 -> 13 -> 21 -> NULL", $this->displayLinkedList(insert_nth(new Node(3, new Node(5, new Node(8, new Node(13, new Node(21))))), 0, 54)));
        $this->assertSame("375 -> 203 -> 13 -> 8796 -> 5 -> NULL", $this->displayLinkedList(insert_nth(new Node(203, new Node(13, new Node(8796, new Node(5)))), 0, 375)));
    }

    public function testCanInsertNewNodeAnywhereInList() {
        $this->assertSame("1 -> 42 -> 2 -> 3 -> NULL", $this->displayLinkedList(insert_nth(build_one_two_three(), 1, 42)));
        $this->assertSame("1 -> 2 -> 1024 -> 3 -> NULL", $this->displayLinkedList(insert_nth(build_one_two_three(), 2, 1024)));
        $this->assertSame("1 -> 2 -> 3 -> 4 -> NULL", $this->displayLinkedList(insert_nth(build_one_two_three(), 3, 4)));
        $this->assertSame("1 -> 1 -> 2 -> 3 -> 5 -> 961 -> 8 -> 13 -> NULL", $this->displayLinkedList(insert_nth(new Node(1, new Node(1, new Node(2, new Node(3, new Node(5, new Node(8, new Node(13))))))), 5, 961)));
        $this->assertSame("1 -> 4 -> 9 -> 17 -> 16 -> 25 -> 36 -> 49 -> 64 -> 81 -> 100 -> NULL", $this->displayLinkedList(insert_nth(new Node(1, new Node(4, new Node(9, new Node(16, new Node(25, new Node(36, new Node(49, new Node(64, new Node(81, new Node(100)))))))))), 3, 17)));
        $this->assertSame("1 -> 3 -> 6 -> 10 -> 15 -> 21 -> NULL", $this->displayLinkedList(insert_nth(new Node(1, new Node(3, new Node(6, new Node(10, new Node(15))))), 5, 21)));
    }

    public function testInvalidIndex1() {
        $this->expectException('\InvalidArgumentException');
        insert_nth(build_one_two_three(), 4, 23);
    }

     public function testInvalidIndex2() {
        $this->expectException('\InvalidArgumentException');
        insert_nth(new Node(3, new Node(1, new Node(4, new Node(2, new Node(10))))), 6, 7);
    }

    public function testInvalidIndex3() {
        $this->expectException('\InvalidArgumentException');
        insert_nth(new Node(2343, new Node(2894031, new Node(94, new Node(1, new Node(1007))))), 7, 6);
    }
}
