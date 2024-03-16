<?php

namespace tests\K6_ReverseEveryOtherWordInTheString;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_ReverseEveryOtherWordInTheString\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve($str)
    {
        $words = preg_split('/\s+/', trim($str));
        foreach ($words as $key => $word) {
            if ($key % 2 != 0) {
                $words[$key] = strrev($word);
            }
        }
        return implode(' ', $words);
    }

}
