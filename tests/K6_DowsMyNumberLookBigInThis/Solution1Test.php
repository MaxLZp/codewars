<?php

namespace tests\K6_DowsMyNumberLookBigInThis;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_DowsMyNumberLookBigInThis\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($input): bool
    {
        $stringLength = strlen($input);
        $sum = array_reduce(str_split($input), function($carry, $el) use ($stringLength) {
            return $carry + pow((int)$el, $stringLength);
        }, 0);
        return $sum === $input;
    }
}
