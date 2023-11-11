<?php

namespace tests\K6_FindTheOddInt;

use PHPUnit\Framework\TestCase;

class Solution2Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_FindTheOddInt\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($this->solve($input), $expected);
    }

    /**
     * Solution 2
     *
     * Same as Solution1 one but uses array_count_values to count values
     * Solution1 counts array values "manually"
     *
     * @param  array   $seq
     * @return integer
     */
    public function solve(array $seq) : int
    {
        $count = \array_count_values($seq);
        foreach ($count as $index => $value) {
            if ($value % 2 == 1) {return $index; }
        }
        return 0;
    }

}
