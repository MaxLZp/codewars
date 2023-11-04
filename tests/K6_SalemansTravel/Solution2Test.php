<?php

namespace tests\K6_SalemansTravel;

use PHPUnit\Framework\TestCase;

class Solution2Test extends TestCase
{
    /**
     * @test
     * @dataProvider tests\K6_SalemansTravel\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve($r, $zipcode): string
    {
        preg_match_all('/(\d+) ([^,]+) '.$zipcode.',/', $r, $matches);
        return $zipcode.':'.implode(',', $matches[2]).'/'.implode(',', $matches[1]);
    }
}
