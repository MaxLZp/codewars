<?php

namespace tests\K6_WeirdStringCase;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_WeirdStringCase\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }


    public function solve($string): string
    {
        return implode(' ', array_map(function($word) {
            $newWord = '';
            for ($i=0; $i < strlen($word); $i++) {
                $newWord .= $i % 2 == 0 ? strtoupper($word[$i]) : strtolower($word[$i]);
            }
            return $newWord;
        }, preg_split('/\s+/', $string)));
    }
}
