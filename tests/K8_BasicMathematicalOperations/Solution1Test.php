<?php

namespace tests\K8_BasicMathematicalOperations;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K8_BasicMathematicalOperations\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve($input): float
    {
        switch ($input[0]) {
            case '+':
                return $input[1]+$input[2];
            case '-':
                return $input[1]-$input[2];
            case '*':
                return $input[1]*$input[2];
            case '/':
                return $input[1]/$input[2];
        }
    }
}
