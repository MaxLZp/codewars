<?php

namespace tests\K6_SimpleFun185_Revamp;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_SimpleFun185_Revamp\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(string $s): string
    {
        $words = explode(' ', $s);
        $words = array_map(function($word) {
            $letters = str_split($word);
            sort($letters);
            $weight = array_reduce($letters, function($carry, $char) {
                return $carry + ord($char);
            });
            return [implode('', $letters), $weight, strlen($word)];
        }, $words);
        usort($words, function($left, $right) {
            $diff = $left[1] - $right[1];
            if ($diff != 0) { return $diff; }

            $diff = $left[2] - $right[2];
            if ($diff != 0) { return $diff; }

            return strcmp($left[0], $right[0]);
        });
        $words = array_map(function($word) { return $word[0]; }, $words);
        return implode(' ', $words);
    }
}
