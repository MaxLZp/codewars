<?php

namespace tests\K6_MultipliesOf3or5;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_MultipliesOf3or5\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($number): int
    {
        $sum = 0;
        for ($i = 3; $i < $number; $i += 3) {
            if ($i % 5 != 0) {
                $sum += $i;
            }
        }
        for ($i = 5; $i < $number; $i += 5) {
            $sum += $i;
        }

        return $sum;
    }
}
