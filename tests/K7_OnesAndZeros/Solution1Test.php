<?php

namespace tests\K7_OnesAndZeros;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_OnesAndZeros\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($input): int
    {
        return bindec(implode('', $input));
    }
}
