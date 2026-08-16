<?php

namespace tests\K6_PairOfGloves;

use LDAP\Result;
use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_PairOfGloves\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve($gloves): int
    {
        $count = array_count_values($gloves);

        return array_reduce($count, function($varry, $glovesCount) {
            return $varry += intdiv($glovesCount, 2);
        }, 0);
    }

    public function solveMy($gloves): int
    {
        $result = [];
        foreach($gloves as $glove) {
            if (! isset($result[$glove])) {
                $result[$glove] = 0;
            }
            $result[$glove] += 1;
        }

        return array_reduce($result, function($varry, $glovesCount) {
            return $varry += intdiv($glovesCount, 2);
        }, 0);
    }

}
