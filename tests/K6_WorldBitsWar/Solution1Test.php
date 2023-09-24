<?php

namespace tests\K6_WorldBitsWar;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_WorldBitsWar\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    /**
     * The solution.
     *
     * For js-version replace:
     * - decbin with number.toString(2)
     * - substr_count with String.matchAll(/1/).length
     *
     * @param  array $numbers
     * @return string
     */
    public function solve($numbers): string
    {
        $ones = 0;
        foreach ($numbers as $number) {
            // Decrease in $ones if a $number is even and increase otherwise.
            $onesInNumber = ($number % 2 == 0)
                ? substr_count(decbin(abs($number)), '1')
                : -1 * substr_count(decbin(abs($number)), '1');
            // toggle sign if $number is negative
            $ones += $number >= 0
                ? $onesInNumber
                : -1 * $onesInNumber;
        }
        switch ($ones <=> 0) {
            case -1: return 'odds win';
            case 1: return 'evens win';
            default: return 'tie';
        }
    }
}
