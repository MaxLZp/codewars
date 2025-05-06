<?php

namespace tests\K7_SimpleFun_124_Lamps;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_SimpleFun_124_Lamps\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $a): int
    {
        $a1 = array_fill(0, count($a), 0);
        for($i = 1; $i < count($a1); $i += 2) {
          $a1[$i] = 1;
        }
        $a2 = array_fill(0, count($a), 1);
        for($i = 1; $i < count($a2); $i += 2) {
          $a2[$i] = 0;
        }

        return min(count(array_diff_assoc($a, $a1)), count(array_diff_assoc($a, $a2)));
    }
}
