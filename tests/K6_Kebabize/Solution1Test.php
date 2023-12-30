<?php

namespace tests\K6_Kebabize;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_Kebabize\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($this->solve($input), $expected);
    }

    public function solve(string $string): string
    {
        $string = preg_replace('/\d/', '', $string);
        $strings = preg_split('/([A-Z][a-z]*)/', $string, -1, PREG_SPLIT_NO_EMPTY|PREG_SPLIT_DELIM_CAPTURE);
        $strings = array_map(function($string) { return strtolower($string); }, $strings);
        return implode('-', $strings);
    }
}
