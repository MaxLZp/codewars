<?php

namespace tests\K6_LetMeIn;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_LetMeIn\DataProvider::data
     */
    public function execute($input, $expected) {
        $msg = 'Input queue (unsorted): ' . json_encode($input);
        $actual = $this->solve($input);
        $this->assertSame($expected, $actual, $msg);
    }

    public function solve($arr): int
    {

        // Fails for PHP 8.0
        // usort($arr, function($l, $r) {
        //     if ($r === 1 || $r === 2) {
        //         if ($l === 0) { return 1; }
        //         return $l < $r ? -1 : 1;
        //     }
        //     return 0;
        // });

        usort($arr, function($l, $r) {
            if ($r === 1 || $r === 2 || $l === 1 || $l === 2) {
                if ($l === 0) {
                    return 1;
                }
                if ($r === 0) {
                    return -1;
                }
                return $l - $r;
            }
            return 0;
        });

        $ones = count(array_filter($arr, function($item) { return $item === 1; }));

        if ($ones) {

            for($j = 0; $j < $ones; $j++) {
                $slice = array_slice($arr, $j+1);
                for ($i = 0; $i < round(count($slice) / 2); $i++) {
                    if ($slice[$i] === 1) {continue;}

                    $li = count($slice) - 1 - $i;
                    if ($slice[$i] === 3 || $slice[$li] === 3) {continue;}

                    $t = $arr[$j+$i+1];
                    $arr[$j+1+$i] = $arr[$j+1+$li];
                    $arr[$j+1+$li] = $t;
                }
            }

        }


        return array_search(0, $arr, true) + 1;
    }
}
