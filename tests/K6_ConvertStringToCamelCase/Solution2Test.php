<?php

namespace tests\K6_ConvertStringToCamelCase;

use PHPUnit\Framework\TestCase;

class Solution2Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_ConvertStringToCamelCase\DataProvider::data
     */
    public function execute($expected, $value) {
        $this->assertEquals($expected, $this->toCamelCase($value));
    }

    public function toCamelCase($str): string
    {
        $delimiterRegex = "/[-_]/";
        $words = \preg_split($delimiterRegex, $str);
        return \array_shift($words) .
            \implode(
                \array_map(function ($word){
                    return \ucfirst($word);
                }, $words)
            );
    }
}
