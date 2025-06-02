<?php

namespace tests\K6_DrawACircle;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_DrawACircle\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(int $radius): string
    {
        if ($radius < 0) {
            return '';
        }
        if ($radius == 0) {
            return "\n";
        }

        $result = '';

        for ($i = 0; $i < $radius - 1; $i++) {
            $str = '';
            for ($j = 0; $j < 2 * $radius - 1; $j++) {
                $r = sqrt(pow($radius - 1 - $i, 2) + pow($radius - 1 - $j, 2));
                $str .= $r < $radius ? "\u2588" : ' ';
            }
            $result .= $str."\n";
        }
        $result .= str_repeat("\u2588", 2 * $radius - 1)."\n";
        for ($i = $radius; $i < 2 * $radius - 1; $i++) {
            $str = '';
            for ($j = 0; $j < 2 * $radius - 1; $j++) {
                $r = sqrt((pow($radius - 1 - $i, 2) + pow($radius - 1 - $j, 2)));
                $str .= $r < $radius ? "\u2588" : ' ';
            }
            $result .= $str."\n";
        }

        return $result;
    }
}
