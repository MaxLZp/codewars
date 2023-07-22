<?php

namespace tests\K8_SimpleMultiplication;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K8_SimpleMultiplication\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($input)
    {
        return $input % 2 ? $input*9 : $input*8;
    }
}
