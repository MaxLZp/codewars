<?php

namespace tests\K5_ProductOfConsecutiveFibNumbers;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K5_ProductOfConsecutiveFibNumbers\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($prod): array
    {
        $result = [0, 1, false];
        while($prod > $result[0] * $result[1]) {
            $t = $result[0] + $result[1];
            $result[0] = $result[1];
            $result[1] = $t;
        }

        $result[2] = $prod == $result[0] * $result[1];

        return $result;
    }

}







