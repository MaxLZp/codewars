<?php

namespace tests\K7_Isograms;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_Isograms\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($string): bool
    {
        $strArray = str_split(strtolower($string));
        return count(array_unique($strArray)) === count($strArray);
    }
}
