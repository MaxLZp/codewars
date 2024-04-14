<?php

namespace tests\K6_PHPFunctions_ReturnTypeDeclarations;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_PHPFunctions_ReturnTypeDeclarations\DataProvider::dataHCF
     */
    public function executeHCF($input, $expected) {
        $this->assertEquals($expected, $this->solveHCF($input[0], $input[1]));
    }

    /**
     * Highest common factor
     *
     * @link https://thirdspacelearning.com/blog/what-is-the-highest-common-factor-explained/
     * @link https://en.wikipedia.org/wiki/Euclidean_algorithm
     *
     * @param  integer $a
     * @param  integer $b
     * @return integer
     */
    public function solveHCF(int $a, int $b): int
    {
        if (min($a, $b) === 0) { return max($a, $b); }
        if ($a === $b) { return $a; }
        return $this->solveHCF(min($a, $b), abs($a - $b));
    }

    /**
     * @test
     * @dataProvider \tests\K6_PHPFunctions_ReturnTypeDeclarations\DataProvider::dataLCM
     */
    public function executeLCM($input, $expected) {
        $this->assertEquals($expected, $this->solveLCM($input[0], $input[1]));
    }

    /**
     * Least Common Multiple
     *
     * LCM Fromula:
     * @link https://www.cuemath.com/numbers/lcm-least-common-multiple/
     *
     * @param  integer $a
     * @param  integer $b
     * @return string
     */
    public function solveLCM(int $a, int $b): string
    {
        return strval($a * $b / $this->solveHCF($a, $b));
    }

}
