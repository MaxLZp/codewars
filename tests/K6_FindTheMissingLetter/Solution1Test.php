<?php

namespace tests\K6_FindTheMissingLetter;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_FindTheMissingLetter\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($this->solve($input), $expected);
    }

    public function solve(array $array): string 
    {
        $codes = array_map(fn($ch) => ord($ch), $array);
        $sum = array_sum($codes);
        $aSum = (count($codes) + 1) * ($codes[0] + $codes[count($codes) - 1]) / 2;

        return chr($aSum - $sum);
    }
}
