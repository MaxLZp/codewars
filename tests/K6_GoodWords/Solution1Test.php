<?php

namespace tests\K6_GoodWords;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_GoodWords\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    private function solve(string $word): bool 
    {
        $keypad = [
            [['1'], ['2', 'a', 'b', 'c'], ['3', 'd', 'e', 'f']],
            [['4', 'g', 'h', 'i'], ['5', 'j', 'k', 'l'], ['6', 'm', 'n', 'o']],
            [['7', 'p', 'q', 'r', 's'], ['8', 't', 'u', 'v'], ['9', 'w', 'x', 'y', 'z']],
            [['*'], ['0', ' '], ['#']],
        ];

        $chars = str_split(strtolower($word));
        for ($c = 0; $c < count($chars) - 1; $c++) {
            $line = -1;
            $col = -1;
            for ($i = 0; $i < count($keypad); $i++) {
                for($j = 0; $j < count($keypad[$i]); $j++) {
                    if (in_array($chars[$c], $keypad[$i][$j])) {
                        $line = $i;
                        $col = $j;
                        break 2;
                    }
                }
            }

            $resultLine = false;
            for ($i = 0; $i < count($keypad[$line]); $i++) {
                if (in_array($chars[$c+1], $keypad[$line][$i])) {
                    $resultLine = true;
                    break;
                }
            }

            $resultCol = false;
            for ($i = 0; $i < count($keypad); $i++) {
                if (in_array($chars[$c+1], $keypad[$i][$col])) {
                    $resultCol = true;
                    break;
                }
            }

            if (!$resultLine && !$resultCol) {
                return false;
            }
        }


        return true;
    }
}
