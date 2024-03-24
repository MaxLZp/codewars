<?php

namespace tests\K6_SumOfParts;

use PHPUnit\Framework\TestCase;

class Solution2Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_SumOfParts\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $ls)
    {
        $result[] = array_sum($ls);
        foreach ($ls as $key => $value) {
            $result[] = $result[$key] - $value;
        }
        return $result;
    }
}
