<?php

namespace tests\K6_FunWithLists_reduce;

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
     * @dataProvider \tests\K6_FunWithLists_reduce\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($this->solve($input[0], $input[1], $input[2]), $expected);
    }

    public function solve($head, $f, $init) {
        $_head = $head;
        $result = $init;
        while($_head) {
            $result = $f($result, $_head->data);
            $_head = $_head->next;
        }

        return $result;
    }
}
