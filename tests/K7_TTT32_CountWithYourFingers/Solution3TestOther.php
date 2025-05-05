<?php

namespace tests\K7_TTT32_CountWithYourFingers;

use PHPUnit\Framework\TestCase;

class Solution2TestOther extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_TTT32_CountWithYourFingers\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(int $num)
    {
      return ['Thumb', 'Index finger', 'Middle finger', 'Ring finger', 'Little finger',
        'Ring finger', 'Middle finger', 'Index finger'][($num-1) % 8];
    }
}
