<?php

namespace tests\K6_SNAP;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_SNAP\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input[0], $input[1]));
    }

    public function solve($flashPile, $turtlePile, $snap = 0)
    {
        if (count($turtlePile) == 0) {
            return $snap;
        }

        $middle = [];
        while(count($turtlePile)) {
            $middle[] = array_shift($flashPile);
            if ($middle[count($middle) - 1] == (isset($middle[count($middle) - 2]) ? $middle[count($middle) - 2]: null)) {
                return $this->solve(array_merge($flashPile, $middle), $turtlePile, ++$snap);
            }

            $middle[] = array_shift($turtlePile);
            if ($middle[count($middle) - 1] == ($middle[count($middle) - 2] ?: null)) {
                return $this->solve(array_merge($flashPile, $middle), $turtlePile, ++$snap);
            }
        }

        return $snap;
    }
}
