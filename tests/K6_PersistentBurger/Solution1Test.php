<?php

namespace tests\K6_PersistentBurger;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_PersistentBurger\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($num): int
    {
        $result = 0;
        if (strlen($num) == 1) {return $result;}

        while (strlen($num) != 1) {
            $result++;
            $numArr = str_split($num);
            $num = 1;
            foreach ($numArr as $value) {
                $num *= $value;
            }
        }

        return $result;
    }
}
