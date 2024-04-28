<?php

namespace tests\K6_SameArray;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_SameArray\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input[0], $input[1]));
    }

    private function solve(array $aArr, array $bArr): bool
    {
        foreach ($aArr as $aArrItem) {
            $bArrFiltered = array_filter($bArr, function($bArrItem) use ($aArrItem) {
                return count(array_diff($bArrItem, $aArrItem)) == 0;
            });
            if (count($bArrFiltered) == 0) {
                return false;
            }
        }
        return true;
    }
}
