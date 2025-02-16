<?php

namespace tests\K6_VowelShifting;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_VowelShifting\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve(...$input));
    }

    public function solve($text, $n)
    {
        if (!$text) { return $text; }

        $splitText = str_split($text);
        $split = array_filter($splitText, function($c) {
            return preg_match('/[aeiou]/i', $c);
        });

        // shift chars
        $splitValues = array_values($split);
        $splitValuesCount = count($split);
        $shifted = [];
        foreach ($splitValues as $key => $value) {
            $idx = ($key + $n) % $splitValuesCount;
            $idx = $idx < 0 ? $splitValuesCount + $idx : $idx;
            $shifted[$idx] = $value;
        }

        // put shifted into place
        foreach (array_keys($split) as $key => $value) {
            $splitText[$value] = $shifted[$key];
        }

        return implode('', $splitText);
    }
}
