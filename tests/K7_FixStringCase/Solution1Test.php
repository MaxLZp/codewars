<?php

namespace tests\K7_FixStringCase;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_FixStringCase\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(string $s): string
    {
        preg_match_all('/[A-Z]/', $s, $matches);
        return count($matches[0]) > strlen($s) / 2
            ? strtoupper($s)
            : strtolower($s);
    }
}
