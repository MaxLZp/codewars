<?php

namespace tests\K6_DoorsInTheSchool;

use PHPUnit\Framework\TestCase;

/**
 * The solution works too sloe and codewars doesn't accept it
 */
class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_DoorsInTheSchool\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($n): int
    {
        $doors = array_fill(1, $n, false);
        for ($i=1; $i <= $n; $i++) {
            for ($j=$i; $j <= $n; $j += $i) {
                $doors[$j] = !$doors[$j];
            }
        }
        return count(array_filter($doors, function($door) {
            return $door == true;
        }));
    }
}
