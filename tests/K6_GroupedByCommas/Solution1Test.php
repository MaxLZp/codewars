<?php

namespace tests\K6_GroupedByCommas;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_GroupedByCommas\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($this->solve($input), $expected);
    }

    public function solve($n) {
        $n = "{$n}";
        $len = strlen($n);
        $n = $len % 3 == 0 ? $n : str_repeat(' ', 3 - $len % 3).$n;
        $s = str_split($n, 3);

        return (trim(implode(',', $s)));
    }
}
