<?php

namespace tests\K6_ArrayDeepCount;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_ArrayDeepCount\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $a): int 
    {
        $res = 0;

        foreach($a as $item) {
            $res += is_array($item) ?1 + $this->solve($item) : 1;
        }

        return $res;
    }
}
