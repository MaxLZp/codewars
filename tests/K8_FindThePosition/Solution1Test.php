<?php

namespace tests\K8_FindThePosition;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K8_FindThePosition\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve(string $alphabet): string
    {
      return "Position of alphabet: ".(ord(strtolower($alphabet)) - ord('a') + 1);
    }
}
