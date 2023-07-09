<?php

namespace tests\K6_ConvertStringToCamelCase;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
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

        \array_walk($words, function (&$word, $index){
            if ($index === 0) return;
            $word = ucfirst($word);
        });

        return \implode($words);
    }
}
