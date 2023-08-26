<?php

namespace tests\K7_JadenCasingStrings;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_JadenCasingStrings\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($string): string
    {
      return ucwords($string);
    }
}
