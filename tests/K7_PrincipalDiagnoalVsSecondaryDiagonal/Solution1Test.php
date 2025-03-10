<?php

namespace tests\K7_PrincipalDiagnoalVsSecondaryDiagonal;

use PHPUnit\Framework\TestCase;
use tests\K7_OOP4_PeoplePeoplePeople_Practice\Person;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_PrincipalDiagnoalVsSecondaryDiagonal\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($matrix): string
    {
        $sum = 0;
        for ($i = 0, $max = count($matrix); $i < $max; $i++) {
            $sum += $matrix[$i][$i];
            $sum -= $matrix[$i][$max - 1 - $i];
        }

        if ($sum > 0) {
            return 'Principal Diagonal win!';
        } elseif ($sum < 0) {
            return 'Secondary Diagonal win!';
        }
        return 'Draw!';
    }
}
