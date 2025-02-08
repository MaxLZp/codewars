<?php

namespace tests\K6_ShortestDistanceToACharacter;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_ShortestDistanceToACharacter\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input[0], $input[1]));
    }

    public function solve(string $str, string $c): array
    {
        $strArr = str_split($str);
        $cIndices = array_keys($strArr, $c);

        return (count($cIndices) == 0 || empty($str)) ? [] : array_map(function($i) use ($cIndices) {
            return min(array_map(function($ci) use ($i) { return abs($ci - $i); }, $cIndices));
        }, array_keys($strArr));


        // if (count($cIndices) == 0 || empty($str)) { return [];}
        // $result = [];
        // foreach($strArr as $i => $chr) {
        //     $tmpCIndices = array_map(function($ci) use ($i) { return abs($ci - $i); }, $cIndices);
        //     $result[] = min($tmpCIndices);
        // }

        // return $result;
    }
}
