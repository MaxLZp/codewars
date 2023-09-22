<?php

namespace tests\K7_ExesAndOhs;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_ExesAndOhs\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($s): bool
    {
        return preg_match_all('/x/i', $s) === preg_match_all('/o/i', $s);
    }
}
