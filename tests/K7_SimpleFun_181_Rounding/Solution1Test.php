<?php

namespace tests\K7_SimpleFun_181_Rounding;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_SimpleFun_181_Rounding\DataProvider::data
     */
    public function execute($n, $m, $expected) {
        $this->assertSame($expected, $this->solve($n, $m));
    }

    public function solve(int $n, int $m): int
    {
        $d = $n/$m;
        return fmod($d, 0.5) == 0 ? $n : (int)(round($n/$m)) * $m;
    }
}
