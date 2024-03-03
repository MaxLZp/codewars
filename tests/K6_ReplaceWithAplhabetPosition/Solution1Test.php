<?php

namespace tests\K6_ReplaceWithAplhabetPosition;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_ReplaceWithAplhabetPosition\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve(string $s): string
    {
        $sArr = preg_replace('/[^a-z]/i', '', strtolower($s));
        if (empty($sArr)) { return ''; }
        $sArr = array_map(function($item) {
            return ord($item) - ord('a') + 1;
        }, str_split($sArr));
        return implode(' ', $sArr);
    }

}
