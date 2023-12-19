<?php

namespace tests\K7_CalculateMealTotal;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_CalculateMealTotal\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1], $input[2] ));
    }

    public function solve(float $subtotal, float $tax, float $tip): float
    {
        return round($subtotal + $subtotal*$tax/100 + $subtotal*$tip/100, 2);
    }
}
