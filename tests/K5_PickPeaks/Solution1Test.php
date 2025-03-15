<?php

namespace tests\K5_PickPeaks;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K5_PickPeaks\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $arr): array
    {
        $result = ['pos' => [], 'peaks' => []];
        $peakPos = null;
        for ($i = 1; $i < count($arr); $i++) {
            if ($arr[$i] > $arr[$i-1]) {
                $peakPos = $i;
            }
            if ($arr[$i] < $arr[$i-1] && $peakPos > 0 && $peakPos) {
                $result['pos'][] = $peakPos;
                $result['peaks'][] = $arr[$peakPos];
                $peakPos = null;
            }
        }

        return $result;
    }

}







