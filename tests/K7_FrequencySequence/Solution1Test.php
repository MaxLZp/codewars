<?php

namespace tests\K7_FrequencySequence;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_FrequencySequence\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve(string $s, string $sep): string
    {
        $sarr = str_split($s);
        $scount = array_count_values($sarr);
        $sarr = array_map(function($e) use ($scount) {
            return $scount[$e];
        }, $sarr);

        return implode($sep, $sarr);
    }
}
