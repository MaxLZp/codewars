<?php

namespace tests\K6_CalculateTheFunctionForASimpleLinearSequebce_medium;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_CalculateTheFunctionForASimpleLinearSequebce_medium\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve($sequence, $input)
    {
        return $this->getFunction($sequence)($input);
    }

    /**
     * @test
     * @dataProvider \tests\K6_CalculateTheFunctionForASimpleLinearSequebce_medium\DataProvider::dataNonLinear
     */
    public function executeNonLinear($input, $expected) {
        $this->assertSame($expected, $this->getFunction($input[0]));
    }

    public function getFunction($sequence)
    {
        $m = $sequence[0];
        $k = $sequence[1] - $sequence[0];

        for ($i=1; $i < count($sequence); $i++) {
            if ($sequence[$i] - $sequence[$i-1] != $k) {
                return 'Non-linear sequence';
            }
        }

        return function($input) use ($m, $k) {
            return $m + $input*$k;
        };
    }
}
