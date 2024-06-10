<?php

namespace tests\K6_BitCounting;

use PHPUnit\Framework\TestCase;

class Solution3Test extends TestCase
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
        return substr_count($this->getBin($n), '1');
    }

    private function getBin(int $n): string
    {
        if ($n === 0) { return '0'; }

        $remainder = $this->getBin(intval($n / 2)).($n % 2);

        return $remainder;
    }
}
