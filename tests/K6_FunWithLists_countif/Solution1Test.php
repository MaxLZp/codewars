<?php

namespace tests\K6_FunWithLists_countif;

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
     * @dataProvider \tests\K6_FunWithLists_countif\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($this->solve(...$input), $expected);
    }

    public function solve($head, $p) {
        return $head ? ($p($head->data) ? 1 : 0) + $this->solve($head->next, $p) : 0;
    }
}
