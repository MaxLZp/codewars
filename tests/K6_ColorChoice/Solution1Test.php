<?php

namespace tests\K6_ColorChoice;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_ColorChoice\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    /**
     *
     * Формула числа сочетаний
     * @link https://www.matburo.ru/tvart_sub.php?p=calc_C
     *
     * @param  int  $m
     * @param  int  $n
     * @return integer
     */
    public function solve($m, $n): int
    {
        for ($i=1; true; $i++) {
            if ($i >= $n) {break;}

            $v = round($this->mult($n, $i) / $this->factorial($i));
            if ($m == $v) { return $i;}
        }
        return -1;
    }

    private function factorial($num): int
    {
        if ($num < 2) return 1;
        return (int)($num * $this->factorial($num-1));
    }

    private function mult($n, $i)
    {
        if ($i == 1) return $n;
        return $n * $this->mult($n-1, $i-1);
    }
}
