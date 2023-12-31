<?php

namespace tests\K6_PermuteAPalindrome;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_PermuteAPalindrome\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve($str): bool
    {
        if (!$str) { return true; }

        $letters = []; // might be replaced with array_count_values
        for ($i=0; $i < strlen($str); $i++) {
            if (!array_key_exists($str[$i], $letters)) {
                $letters[$str[$i]] = 0;
            }
            $letters[$str[$i]]++;
        }

        $oddsCount = array_reduce($letters, function($accumulator, $count){
            if ($count % 2 == 1) {
                return ++$accumulator;
            }
            return $accumulator;
        }, 0);

        if (
            $oddsCount > 1
            ||
            ((strlen($str) % 2 == 0) && (($oddsCount == 1)))
            ||
            ((strlen($str) % 2 == 1) && ($oddsCount == 0))
        ) {
            return false;
        }

        return true;
    }

}
