<?php

namespace tests\K7_AllUnique;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_AllUnique\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($string): bool
    {
        return strlen($string) == count(array_unique(str_split($string)));
    }
}
