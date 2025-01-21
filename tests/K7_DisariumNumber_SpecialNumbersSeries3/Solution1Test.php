<?php

namespace tests\K7_DisariumNumber_SpecialNumbersSeries3;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_DisariumNumber_SpecialNumbersSeries3\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($n): string
    {
        $cn = 0;
        foreach (str_split($n) as $key => $value) {
            $cn += pow($value, $key + 1);
        }

        return $n == $cn ? "Disarium !!" : "Not !!";
    }
}
