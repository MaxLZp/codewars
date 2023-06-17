<?php

namespace tests\K8_BuildAPileOfCubes;

use PHPUnit\Framework\TestCase;
use tests\K8_BuildAPileOfCubes\Helper;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K8_BuildAPileOfCubes\DataProvider::data
     */
    public function execute($expected, $value) {
        $this->assertEquals($expected, $this->findNb($value));
    }

    public function findNb($m): int
    {
        for ($n = 1; ; $n++) {
            $sum = Helper::sumOfCubes($n);
            if ($m === $sum) {return $n;}
            if ($m < $sum) {return -1;}
        }
    }
}
