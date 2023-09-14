<?php

namespace tests\K7_HerosRoot;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_HerosRoot\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve($n, $guess) {
        $step = 0;
        $pguess = $guess;
        do {
          $step++;
          $pguess = $guess;
          $guess = floor(( $guess + $n/$guess ) / 2);
        } while ( abs($pguess - $guess) >= 1 );
        return $step;
    }
}
