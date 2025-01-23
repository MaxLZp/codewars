<?php

namespace tests\K7_NumbersWithThisDigitInside;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_NumbersWithThisDigitInside\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve(...$input));
    }

    public function solve(int $x, int $d): array
    {
        $numbers = array_filter(range(1, $x), function($el) use ($d) {
            return false !== strpos($el, $d);
        });

        return [
            count($numbers),
            array_sum($numbers),
            $numbers ? array_product($numbers) : 0,
        ];
    }
}
