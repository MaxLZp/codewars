<?php

namespace tests\K6_HighestScoringWord;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_HighestScoringWord\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($this->solve($input), $expected);
    }

    public function solve($x): string
    {
        $result = '';
        $score = 0;

        foreach (explode(' ', $x) as $word) {
            $weight = array_reduce(str_split($word), function($carry, $char) {
                return $carry + ord($char) - 96;
            }, 0);
            if ($weight > $score) {
                $score = $weight;
                $result = $word;
            }
        }
        return $result;
    }
}
