<?php

namespace tests\K5_ClosestAndSmallest;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K5_ClosestAndSmallest\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(string $strng): array 
    {
        if (strlen($strng) == 0) { return []; }

        $nums = explode(' ', $strng);
        $weights = array_map(function($num) {
            return array_sum(str_split($num));
        }, $nums);
        $diffs = array_fill(0, count($nums), PHP_INT_MAX);
        foreach($weights as $i => $weight) {
            foreach($weights as $j => $oWeight) {
                if ($i == $j) {
                    continue;
                }
                $diff = abs($weight - $oWeight);
                if ($diff <= $diffs[$i]) {
                    $diffs[$i] = $diff;
                }
            }
        }
        $minDiff = min($diffs);

        $n = [];
        foreach($diffs as $i => $diff) {
            if ($diff == $minDiff) {
                $n[] = $weights[$i];
            }
        }
        sort($n, SORT_NUMERIC);
        $minIdx1 = array_search($n[0], $weights);
        $minIdx2 = array_search($n[1], $weights);
        if ($minIdx1 == $minIdx2) {
            $slice = array_slice($weights, $minIdx1 + 1);
            $minIdx2 = $minIdx1 + 1 + array_search($n[1], $slice);
        }

        $res = [
            [$weights[$minIdx1], $minIdx1, 1*$nums[$minIdx1]], 
            [$weights[$minIdx2], $minIdx2, 1*$nums[$minIdx2]]
        ];

        usort($res, function($l, $r) {
            if ($l[0] != $r[0]) {
                return $l[0] - $r[0];
            }
            return $l[1] - $r[1];
        });

        return $res;
    }

}







