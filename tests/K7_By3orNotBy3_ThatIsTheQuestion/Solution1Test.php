<?php

namespace tests\K7_By3orNotBy3_ThatIsTheQuestion;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_By3orNotBy3_ThatIsTheQuestion\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($str): bool
    {
        $sum = array_sum(str_split($str));

        return intval($sum / 3) * 3 == $sum;
    }
}
