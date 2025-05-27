<?php

namespace tests\K5_NowThatsACrib;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K5_NowThatsACrib\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($n): string
    {
        $lineBreak = '\n';
        // $lineBreak = "\n";
        $width = 2 * $n + 1 + 4 * $n;

        $result = '';
        // roof
        $result .= str_repeat(' ', ($width - (2 * $n + 1)) / 2);
        $result .= str_repeat('_', 2 * $n + 1);
        $result .= str_repeat(' ', ($width - (2 * $n + 1)) / 2);
        $result .= $lineBreak;
        for ($i=0; $i < 2 * $n; $i++) {
            $result .= str_repeat(' ', ($width - (2 * $n + 1 + 2 * $i) - 2) / 2);
            $result .= '/';
            $result .= str_repeat('_', 2 * $n + 1 + 2 * $i);
            $result .= '\\';
            $result .= str_repeat(' ', ($width - (2 * $n + 1 + 2 * $i) - 2) / 2);
            $result .= $lineBreak;
        }
        //space
        for ($i=0; $i < $n - 1; $i++) {
            $result .= '|';
            $result .= str_repeat(' ', $width-2);
            $result .= '|';
            $result .= $lineBreak;
        }
        //door top
        $result .= '|';
        $result .= str_repeat(' ', 2 * $n);
        $result .= str_repeat('_', 2 * $n - 1);
        $result .= str_repeat(' ', 2 * $n);
        $result .= '|';
        $result .= $lineBreak;
        //door
        for ($i=0; $i < $n - 1; $i++) {
            $result .= '|';
            $result .= str_repeat(' ', 2 * $n - 1);
            $result .= '|';
            $result .= str_repeat(' ', 2 * $n - 1);
            $result .= '|';
            $result .= str_repeat(' ', 2 * $n - 1);
            $result .= '|';
            $result .= $lineBreak;
        }
        //Floor
        $result .= '|';
        $result .= str_repeat('_', 2 * $n - 1);
        $result .= '|';
        $result .= str_repeat('_', 2 * $n - 1);
        $result .= '|';
        $result .= str_repeat('_', 2 * $n - 1);
        $result .= '|';

        return $result;
    }
}
