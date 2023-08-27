<?php

namespace tests\K8_EvenOrOdd;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K8_EvenOrOdd\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve(int $n): string
    {
        return $n % 2 ? 'Odd' : 'Even' ;
    }
}
