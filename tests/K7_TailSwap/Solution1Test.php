<?php

namespace tests\K7_TailSwap;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_TailSwap\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $a)
    {
        $a = array_map(function($el) { return explode(':', $el); }, $a);
        return [
            implode(':', [$a[0][0], $a[1][1]]),
            implode(':', [$a[1][0], $a[0][1]]),
        ];
    }
}
