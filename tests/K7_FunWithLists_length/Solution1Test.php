<?php

namespace tests\K7_FunWithLists_length;

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
        $this->assertSame(0, $this->solve(NULL)); // NULL
        $this->assertSame(4, $this->solve(new Node(1, new Node(2, new Node(3, new Node(4)))))); // 1 -> 2 -> 3 -> 4
     }

    public function solve($head) {
        return $head ? 1 + $this->solve($head->next) : 0;
    }

    public function solve2($head) {
        if (!$head) {
            return 0;
        }
        $length = 1;
        $cur = $head;
        while($cur->next) {
            $length++;
            $cur = $cur->next;
        }

        return $length;
    }
}
