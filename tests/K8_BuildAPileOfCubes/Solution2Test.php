<?php

namespace tests\K8_BuildAPileOfCubes;

use PHPUnit\Framework\TestCase;
use tests\K8_BuildAPileOfCubes\Helper;

class Solution2Test extends TestCase
{

    /**
     * @test
     * @dataProvider tests\K8_BuildAPileOfCubes\DataProvider::data
     */
    public function execute($expected, $value) {
        $this->assertEquals($expected, $this->findNb($value));
    }

    public function findNb($m): int
    {
        $n = 1;
        $step = $n;

        while (true) {
            $difference = $m - Helper::sumOfCubes($n);

            if ($difference === 0) {
                return $n;
            };

            // if the difference is positive then $n is to small
            // Increase it by $step value
            // ($step value is doubled each time)
            $step *= 2;
            if ($difference < 0) {
                //reset step to half of current step value
                // if it is too big
                $step = $step / 2; //get prior $step
                $n -= $step; //get prior $n value
                $step = $step / 2; //make current $step value as half of prior $step
                if ($step < 1) return -1;
            }
            $n += $step;
        }

        return -1;
    }
}
