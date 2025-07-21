<?php

namespace tests\K6_HiddenCubicNumbers;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_HiddenCubicNumbers\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($this->solve($input), $expected);
    }

    public function solve($s): string
    {
        preg_match_all('/\d{1,3}/', $s, $matches);
        $cubic = [];
        foreach($matches[0] as $match) {
            if ((int)$match == array_reduce(str_split($match), function($carry, $num) { return $carry + pow($num, 3); }, 0)) {
                $cubic[] = (int)$match;
            }
        }
        return count($cubic) ? implode(' ', $cubic) . ' ' . array_sum($cubic) . ' Lucky' :  'Unlucky';
    }
}
