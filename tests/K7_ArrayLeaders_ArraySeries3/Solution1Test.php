<?php

namespace tests\K7_ArrayLeaders_ArraySeries3;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_ArrayLeaders_ArraySeries3\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve($numbers): array
    {
        $result = [];
        $sum = 0;
        for ($i = count($numbers) - 1; $i >= 0; $i--) {
            if ($numbers[$i] > $sum) {
                $result[] = $numbers[$i];
            }
            $sum += $numbers[$i];
        }
        return array_reverse($result);
    }
}
