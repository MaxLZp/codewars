<?php

namespace tests\K6_FindTheOddInt;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_FindTheOddInt\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($this->solve($input), $expected);
    }

    /**
     * Solution 1
     *
     * Same as Solution2 one but counts values "manually"
     * Same as Solution1 one but uses array_count_values to count values
     *
     * @param  array   $seq
     * @return integer
     */
    public function solve(array $seq) : int
    {
        $count = [];
        foreach ($seq as $item) {
            if(!\array_key_exists($item, $count)) {
                $count[$item] = 0;
            }
            $count[$item]++;
        }
        foreach ($count as $index => $value) {
            if ($value % 2 == 1) {return $index; }
        }
        return 0;
    }

}
