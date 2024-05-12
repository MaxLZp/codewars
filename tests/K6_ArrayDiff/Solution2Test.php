<?php

namespace tests\K6_ArrayDiff;

use PHPUnit\Framework\TestCase;

class Solution2Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_ArrayDiff\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
        $this->assertSame($expected, $this->solve2($input[0], $input[1]));
    }

    public function solve($a, $b): array
    {
        return array_values(array_filter($a, function($value) use ($b) {
            return ! in_array($value, $b);
        }));
    }

    public function solve2($a, $b): array
    {
        $result = [];
        foreach ($a as $value) {
            if (! in_array($value, $b)) {
                $result[] = $value;
            }
        }
        return $result;
    }
}
