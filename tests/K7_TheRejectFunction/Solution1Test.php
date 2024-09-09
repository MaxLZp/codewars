<?php

namespace tests\K7_TheRejectFunction;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_TheRejectFunction\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve(array $array, callable $predicate)
    {
        return array_values(array_filter($array, function($n) use($predicate) {
            return ! $predicate($n);
        }));
        // return array_values(array_diff($array, array_filter($array, $predicate)));
    }
}
