<?php

namespace tests\K6_PositionsAverage;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_PositionsAverage\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertFuzzy($input, $expected);
    }

    public function solve($input): float
    {
        $strings = explode(', ', $input);
        $countStrings = count($strings);
        $common = 0;
        for ($i=0; $i < $countStrings; $i++) {
            for ($j=$i+1; $j < $countStrings; $j++) {
                // compare strings
                for ($z=0; $z < strlen($strings[$i]); $z++) {
                    if ($strings[$i][$z] == $strings[$j][$z]) {
                        $common++;
                    }
                }
            }
        }

        $combinations = ($countStrings * ($countStrings - 1)) * strlen($strings[0]) / 2;
        return $common * 100 / $combinations;
    }

    private function assertFuzzy($s, $expect) {
        // max error
        $merr = 1e-9;
        // printf("s: %s\r\n", $s);
        $actual = $this->solve($s);
        // printf("Actual: %.9f\r\n", $actual);
        // printf("Expect: %.9f\r\n", $expect);
        $inrange = abs($actual - $expect) <= $merr;
        // if ($inrange === false) {
        //     echo "Expected value near: $expect, got: $actual\r\n";
        // }
        $this->assertSame(true, $inrange);
        // echo "-----\r\n";
    }
}
