<?php

namespace tests\K6_AlphabetWar_Airstrike_LettersMassacre;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_AlphabetWar_Airstrike_LettersMassacre\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }


    public function solve(string $fight): string {
        $leftSide  = ['w' => 4, 'p' => 3, 'b' => 2, 's' => 1];
        $rightSide = ['m' => 4, 'q' => 3, 'd' => 2, 'z' => 1];

        while(strpos($fight, '*') !== false) {
            // $fight = preg_replace('/[\w\*]?\*[\w\*+]?/', '_', $fight);
            $fight = preg_replace('/.?\*.?/', '', $fight);
        }

        $result = array_reduce(str_split($fight), function($carry, $current) use ($leftSide, $rightSide) {
            if (array_key_exists($current, $leftSide)) { return $carry - $leftSide[$current]; }
            else if (array_key_exists($current, $rightSide)) { return $carry + $rightSide[$current]; }
            return $carry;
        }, 0);

        if ($result < 0) { return "Left side wins!"; }
        if ($result > 0) { return "Right side wins!"; }
        return "Let's fight again!";
    }

}
