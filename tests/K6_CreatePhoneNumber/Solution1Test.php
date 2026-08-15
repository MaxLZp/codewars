<?php

namespace tests\K6_CreatePhoneNumber;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_CreatePhoneNumber\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    /**
     * @param  array  $numbersArray
     * @return string
     */
    public function solve($numbersArray): string
    {
        return sprintf('(%d%d%d) %d%d%d-%d%d%d%d', ...$numbersArray);
    }
}
