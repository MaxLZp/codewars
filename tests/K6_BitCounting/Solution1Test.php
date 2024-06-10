<?php

namespace tests\K6_BitCounting;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_BitCounting\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($n): int
    {
        $ns = decbin($n);
        for ($i = 0, $r = 0; $i < strlen($ns); $i++) {
            if ($ns[$i] == '1') {
                $r++;
            }
        }
        return $r;
    }
}
