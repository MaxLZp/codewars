<?php

namespace tests\K7_SumOfAllArguments;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_SumOfAllArguments\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve(...$input));
    }

    public function solve()
    {
        return array_sum(func_get_args());
    }
    // public function solve(...$arr)
    // {
    //     return array_sum($arr);
    // }
}
