<?php

namespace tests\K7_DigitDigit;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_DigitDigit\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($input): int
    {
        return array_reduce(
            str_split($input),
            function($carry, $char) {
                return $carry .= pow((int)$char, 2);
            },
            ''
        );
    }
}
