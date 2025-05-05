<?php

namespace tests\K7_TTT32_CountWithYourFingers;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_TTT32_CountWithYourFingers\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(int $num)
    {
        $fingers = [1 => 'Thumb', 'Index finger', 'Middle finger', 'Ring finger', 'Little finger'];
        $finger = 0;
        $mul = 1;
        for ($i = 0; $i < $num ; $i++) {
            if ($finger == 5 && $mul == 1) {
                $mul = -1;
            }
            if ($finger == 1 && $mul == -1) {
                $mul = 1;
            }
            $finger += 1 * $mul;
        }

        return $fingers[$finger];
    }
}
