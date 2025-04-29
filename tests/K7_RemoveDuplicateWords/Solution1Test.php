<?php

namespace tests\K7_RemoveDuplicateWords;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_RemoveDuplicateWords\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($s): string
    {
        return implode(' ', array_unique(explode(' ', $s)));
    }
}
