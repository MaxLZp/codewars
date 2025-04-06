<?php

namespace tests\K7_AddgingWords_PartI;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{
    private $map = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty',
    ];
    private string $initial;

    /**
     * @test
     * @dataProvider \tests\K7_AddgingWords_PartI\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->initial = $input[0];
        $this->assertSame($expected, $this->solve($input[1]));
    }

    public function solve(string $value): string
    {
        return $this->map[array_search($this->initial, $this->map) + array_search($value, $this->map)];
    }
}
