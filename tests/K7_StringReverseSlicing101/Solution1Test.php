<?php

namespace tests\K7_StringReverseSlicing101;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_StringReverseSlicing101\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(string $s): array
    {
        $result = [];
        $rev = str_split(strrev($s));
        while (count($rev)) {
            $result[] = implode($rev);
            array_shift($rev);
        }
        return $result;
    }
}
