<?php

namespace tests\K7_DisemvowelTrolls;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_DisemvowelTrolls\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($string): string
    {
        return preg_replace('/[aeiou]/i', '', $string);
    }
}
