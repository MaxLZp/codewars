<?php

namespace tests\K7_GoingToTheCinema;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_GoingToTheCinema\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve(...$input));
    }

    public function solve($card, $ticket, $perc) {
        $i = 1;
        $cp = $card + $ticket * pow($perc, $i);
        while (ceil($cp) >= $ticket * $i) {
           $cp += $ticket * pow($perc, ++$i);
        }

        return $i;
    }
}
