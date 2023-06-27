<?php

namespace tests\K7_LinkedLists_Push_BuildOneTwoThree;

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


class Solution1Test extends TestCase
{
    /** @test */
    public function push() {
        $this->assertSame(1, push(NULL, 1)->data, "Should be able to create a new linked list with push().");
        $this->assertSame(NULL, push(NULL, 1)->next, "Should be able to create a new linked list with push().");
        $this->assertSame(2, push(new Node(1), 2)->data, "Should be able to prepend a node to an existing node.");
        $this->assertSame(1, push(new Node(1), 2)->next->data, "Should be able to prepend a node to an existing node.");
      }

      /** @test */
      public function buildOneTwoThree() {
        $this->assertSame(1, build_one_two_three()->data, "Value at index 0 should be 1.");
        $this->assertSame(2, build_one_two_three()->next->data, "Value at index 1 should be 2.");
        $this->assertSame(3, build_one_two_three()->next->next->data, "Value at index 2 should be 3.");
        $this->assertSame(NULL, build_one_two_three()->next->next->next, "Value at index 3 should be null.");
      }
}
