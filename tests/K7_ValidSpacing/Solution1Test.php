<?php

namespace tests\K7_ValidSpacing;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_ValidSpacing\DataProvider::data
     */
    public function execute($input, $expected)
    {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(string $s): bool
    {
        return !preg_match('/^ |  | $/', $s, $matches);
    }
}
