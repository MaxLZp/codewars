<?php

namespace tests\K6_DoorsInTheSchool;

use PHPUnit\Framework\TestCase;

class Solution2Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_DoorsInTheSchool\DataProvider::data
     */
    public function execute($input, $expected) {
        // $this->print($input);
        $this->assertSame($expected, $this->solve($input));
    }


    public function solve($n): int
    {
        $str = '';
        for($i = 1; strlen($str) <= $n; $i++) {
            $str .= '_'.str_repeat('x', 2*$i);
        }
        return substr_count(substr($str, 0, $n), '_');
    }

    public function print($n): void
    {
        $doors = array();
        $doors[0] = array_fill(1, $n, false);
        for ($i=1; $i <= $n; $i++) {
            $doors[$i] = array_filter($doors[$i-1], function($el) { return true; });
            for ($j=$i; $j <= $n; $j += $i) {
                $doors[$i][$j] = !$doors[$i-1][$j];
            }
        }

        echo PHP_EOL;
        for ($i=0; $i < $n+1; $i++) {
            echo PHP_EOL;
            for ($j=1; $j <= $n; $j++) {
                echo $doors[$i][$j] ? '_' : 'x';
            }
        }
        echo PHP_EOL;
    }
}
