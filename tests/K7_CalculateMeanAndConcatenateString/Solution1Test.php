<?php

namespace tests\K7_CalculateMeanAndConcatenateString;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_CalculateMeanAndConcatenateString\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($input): array
    {
        $result = [0, ''];
        foreach ($input as $value) {
            if (is_numeric($value)) {
                $result[0] += $value;
            } else {
                $result[1] .= $value;
            }
        }
        $result[0] = 1.0*$result[0] / 10;
        return $result;
    }
}
