<?php

namespace tests\K6_SortStringsByMostContiguousVowels;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_SortStringsByMostContiguousVowels\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $strings): array
    {
        usort($strings, function($l, $r) {
            return $this->getMaxLength($r) - $this->getMaxLength($l);
        });

        return $strings;
    }

    private function getMaxLength(string $str): ?int
    {
        preg_match_all('/[aeiou]+/i', $str, $matches);
        $matches = $matches[0];
        $matches = array_map(function($match) {
            return strlen($match);
        }, $matches);

        return max($matches);
    }
}
