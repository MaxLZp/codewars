<?php

namespace tests\K7_LooseChange;

use PHPUnit\Framework\TestCase;

define('CHANGE', [
    "penny" => 0.01,
    "nickel" => 0.05,
    "dime" => 0.1,
    "quarter" => 0.25,
    "dollar" => 1,
]);

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_LooseChange\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($change): string
    {
        return sprintf("$%.2f", array_reduce(explode(' ', $change), fn($c, $i) => $c + CHANGE[$i], 0));
    }
}
