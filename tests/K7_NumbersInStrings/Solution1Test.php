<?php

namespace tests\K7_NumbersInStrings;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_NumbersInStrings\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($s): int
    {
        preg_match_all('/\d+/', $s, $matches);

        return max($matches[0]);
    }
}
