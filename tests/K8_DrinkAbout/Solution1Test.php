<?php

namespace tests\K8_DrinkAbout;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K8_DrinkAbout\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->people_with_age_drink($input));

    }

    public function people_with_age_drink(int $old)
    {
        if ($old < 14) {return "drink toddy";}
        if ($old <= 17) {return "drink coke";}
        if ($old <= 20) {return "drink beer";}
        return "drink whisky";
    }
}
