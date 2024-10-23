<?php

namespace tests\K7_CelebrityBabyNames;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_CelebrityBabyNames\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $array): string
    {
        $count = count($array);
        if ($count == 0) { return "You must test at least one name.";}
        if ($count == 1) { return "Congratulations, you can choose any name you like!";}

        for ($i=1; $i < $count; $i++) {
            if (strtolower($array[$i][0]) != strtolower($array[$i-1][strlen($array[$i-1]) - 1])) {
                return "Back to the drawing board, your baby names are not compatible.";
            }
        }

        return "Congratulations, your baby names are compatible!";
    }
}
