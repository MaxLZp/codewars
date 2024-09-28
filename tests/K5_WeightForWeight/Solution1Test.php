<?php

namespace tests\K5_WeightForWeight;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K5_WeightForWeight\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($str): string
    {
        $nums = preg_split('/\s+/', $str);
        usort($nums, function ($l, $r) {
            $lWeight = array_sum(str_split($l));
            $rWeight = array_sum(str_split($r));

            return $lWeight == $rWeight ? strcmp($l, $r) : $lWeight - $rWeight;
        });

        return implode(' ', $nums);
    }

}







