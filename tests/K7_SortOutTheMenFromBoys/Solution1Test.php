<?php

namespace tests\K7_SortOutTheMenFromBoys;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_SortOutTheMenFromBoys\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $arr): array
    {
        $arrU = array_unique($arr);
        rsort($arrU);
        $result = [];
        foreach ($arrU as $value) {
            if ($value % 2 == 0) {
                array_unshift($result, $value);
            } else {
                $result[] = $value;
            }
        }

        return $result;
    }
}
