<?php

namespace tests\K6_ArrayDiff;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_ArrayDiff\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve($a, $b): array
    {
        return array_values(array_diff($a, $b));
    }
}
