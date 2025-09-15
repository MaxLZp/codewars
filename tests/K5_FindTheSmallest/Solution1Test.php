<?php

namespace tests\K5_FindTheSmallest;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K5_FindTheSmallest\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($n): array 
    {
        $fromKey = 0;
        $toKey = 0;
        $minVal = $n;
        $n = "$n";
        for($key = 0; $key < strlen($n); $key++) {
            $c = $n[$key];
            $nc = substr($n, 0, $key).substr($n, $key+1);
            for($i = 0; $i <= strlen($nc); $i++) {
                $tc = substr($nc, 0, $i).$c.substr($nc, $i);
                if (1*$tc < $minVal) {
                    $minVal = 1*$tc;
                    $fromKey = $key;
                    $toKey = $i;
                }
            }
        }

        return [$minVal, $fromKey, $toKey];
    }

}







