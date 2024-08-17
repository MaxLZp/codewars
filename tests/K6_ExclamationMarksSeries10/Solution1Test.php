<?php

namespace tests\K6_ExclamationMarksSeries10;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_ExclamationMarksSeries10\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(string $s): string
    {
        $words = explode(" ", $s);
        $words = array_map(function ($word) {
            preg_match("/^(!*)(\w+)(!*)$/", $word, $matches);
            if (strlen($matches[1]) > strlen($matches[3])) {
                $matches[1] = $matches[3];
            } else {
                $matches[3] = $matches[1];
            }

            return implode("", [$matches[1], $matches[2], $matches[3]]);
        }, $words);

        return implode(" ", $words);
    }

}
