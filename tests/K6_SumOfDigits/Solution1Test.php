<?php

namespace tests\K6_SumOfDigits;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_SumOfDigits\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(int $number): int
    {
        if ($number < 10) {
            return $number;
        }

        $newNumber = 0;
        foreach (str_split("{$number}") as $char) {
            $newNumber += $char;
        }

        return $this->solve($newNumber);
    }
}
