<?php

namespace tests\K6_FunWithLists_map;

use PHPUnit\Framework\TestCase;


class Solution2Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_FunWithLists_map\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($this->solve($input[0], $input[1]), $expected);
    }

    public function solve($head, $f) {
        if (!$head) { return null; }

        return new Node($f($head->data), $this->solve($head->next, $f));
    }
}
