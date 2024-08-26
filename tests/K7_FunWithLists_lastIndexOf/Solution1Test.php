<?php

namespace tests\K7_FunWithLists_lastIndexOf;

use PHPUnit\Framework\TestCase;

class Node {
    public $data, $next;
    public function __construct($data, $next = NULL) {
      $this->data = $data;
      $this->next = $next;
    }
  }

class Solution1Test extends TestCase
{
    /**
     * @test
     */
    public function execute() {
        $this->assertSame(-1, $this->solve(NULL, 17)); // NULL
        $this->assertSame(1, $this->solve(new Node(1, new Node(2, new Node(3))), 2)); // 1 -> 2 -> 3
        $this->assertSame(0, $this->solve(new Node('aaa', new Node('b', new Node('abc'))), 'aaa')); // 'aaa' -> 'b' -> 'abc'
        $this->assertSame(0, $this->solve(new Node(17, new Node('17', new Node(1.2))), 17)); // 17 -> '17' -> 1.2
        $this->assertSame(1, $this->solve(new Node(17, new Node('17', new Node(1.2))), '17')); // 17 -> '17' -> 1.2
        $this->assertSame(3, $this->solve(new Node(1, new Node(2, new Node(3, new Node(3)))), 3)); // 1 -> 2 -> 3 -> 3
        $this->assertNotEquals(2, $this->solve(new Node(1, new Node(2, new Node(3, new Node(3)))), 3), "Last occurrence of the integer \"3\" is at index 3, not index 2!"); // 1 -> 2 -> 3 -> 3
    }

    public function solve($head, $value)
    {
        $result = -1;
        $index = 0;
        while ($head) {
            if ($head->data === $value) {
                $result = $index;
            }
            $index++;
            $head = $head->next;
        }

        return $result;
    }
}
