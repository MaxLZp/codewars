<?php

namespace tests\K6_FunWithLists_reduce;

use PHPUnit\Framework\TestCase;


class Solution2Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_FunWithLists_reduce\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($this->solve($input[0], $input[1], $input[2]), $expected);
    }

    public function solve($head, $f, $init) {
        if (!$head) { return $init; }

        return $this->solve($head->next, $f, $f($init, $head->data));
    }
}
