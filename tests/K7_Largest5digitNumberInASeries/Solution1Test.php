<?php

namespace tests\K7_Largest5digitNumberInASeries;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_Largest5digitNumberInASeries\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
        $this->assertSame($expected, $this->solveRecursive($input));
    }

    public function solve($s): int
    {
        $max = intval(substr($s, 0, 5));
        for ($i = 1; $i < strlen($s) - 4; $i++) {
            $val = intval(substr($s, $i, 5));
            if ($val > $max) {
                $max = $val;
            }
        }

        return $max;
    }

    public function solveRecursive($s): int
    {
        if (strlen($s) < 5) {
            return intval($s);
        }
        $max = intval(substr($s, 0, 5));

        return max($max, $this->solveRecursive(substr($s, 1)));
    }
}
