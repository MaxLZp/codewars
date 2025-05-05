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
        switch ($num % 8) {
            case 0:
            case 2:
              return "Index finger";
            case 1:
              return "Thumb";
            case 3:
            case 7:
              return "Middle finger";
            case 5:
              return "Little finger";
          }
          return "Ring finger";
    }
}
