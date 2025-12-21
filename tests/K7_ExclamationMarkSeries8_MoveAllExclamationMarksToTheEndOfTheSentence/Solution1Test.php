<?php

namespace tests\K7_ExclamationMarkSeries8_MoveAllExclamationMarksToTheEndOfTheSentence;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_ExclamationMarkSeries8_MoveAllExclamationMarksToTheEndOfTheSentence\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(string $s): string
    {
        preg_match_all('/\!/', $s, $matches);
        $s = preg_replace('/\!/', '', $s);
        return $s.str_repeat('!', count($matches[0]));


        // return str_replace("!", "", $s, $c) . str_repeat('!', $c);
    }
}
