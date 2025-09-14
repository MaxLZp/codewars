<?php

namespace tests\K6_LengthOfMissingArray;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_LengthOfMissingArray\DataProvider::data
     */
    public function execute($input, $expected) {
        $msg = 'Input queue (unsorted): ' . json_encode($input);
        $actual = $this->solve($input);
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($arrayOfArrays) 
    {
        if (!$arrayOfArrays || count($arrayOfArrays) == 0) { return 0; }
        $sum = 0;
        $max = $min = count($arrayOfArrays[0] ?: []);
        foreach($arrayOfArrays as $subArray) {
            $cnt = $subArray ? count($subArray) : 0;
            if (!$cnt) { return 0; }
            $sum += $cnt;
            $max = $max > $cnt ? $max : $cnt;
            $min = $min < $cnt ? $min : $cnt;
        }
        $progSum = (1+count($arrayOfArrays)) * ($min + $max) / 2;

        return $progSum - $sum;
    }
}
