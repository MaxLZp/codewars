<?php

namespace tests\K6_FunWithLists_map;

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
     * @dataProvider \tests\K6_FunWithLists_map\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($this->solve($input[0], $input[1]), $expected);
    }

    public function solve($head, $f) {
        $_head = $head;
        $_mapped = $mapped = $_head ? new Node($f($_head->data)) : null;
        while($_head) {
            $_head = $_head->next;
            $_mapped->next = $_head ? new Node($f($_head->data)) : null;
            $_mapped = $_mapped->next;
        }

        return $mapped;
    }
}
