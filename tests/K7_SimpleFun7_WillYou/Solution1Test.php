<?php

namespace tests\K7_SimpleFun7_WillYou;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_SimpleFun7_WillYou\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve(...$input));
    }

    public function solve(bool $young, bool $beautiful, bool $loved): bool 
    {
        return in_array($young * 4 + $beautiful * 2 + $loved, [6, 5, 3, 1]);
    }
}
