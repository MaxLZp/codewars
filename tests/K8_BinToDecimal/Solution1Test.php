<?php

namespace tests\K8_BinToDecimal;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K8_BinToDecimal\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($bin)
    {
        return bindec($bin);
    }
}
