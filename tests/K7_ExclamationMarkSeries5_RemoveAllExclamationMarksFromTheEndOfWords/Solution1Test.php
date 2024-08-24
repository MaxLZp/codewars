<?php

namespace tests\K7_ExclamationMarkSeries5_RemoveAllExclamationMarksFromTheEndOfWords;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_ExclamationMarkSeries5_RemoveAllExclamationMarksFromTheEndOfWords\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(string $s): string
    {
        $arr = explode(" ", $s);
        $arr = array_map(function($word) {
            return preg_replace("/!+$/","", $word);
        }, $arr);
        return implode(" ", $arr);
    }
}
