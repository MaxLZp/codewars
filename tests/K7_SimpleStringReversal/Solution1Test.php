<?php

namespace tests\K7_SimpleStringReversal;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_SimpleStringReversal\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(string $s): string
    {
        $reverse = strrev(preg_replace('/\s/', '', $s));
        foreach (array_keys(str_split($s), ' ') as $space) {
            $reverse = substr($reverse, 0, $space) . ' ' . substr($reverse, $space);
        }

        return $reverse;
    }
}
