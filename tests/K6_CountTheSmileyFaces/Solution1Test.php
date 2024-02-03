<?php

namespace tests\K6_CountTheSmileyFaces;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_CountTheSmileyFaces\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($arr): int {
        return count(array_filter($arr, function($item){
            return strlen(preg_replace('/^[:;][-~]?[)D]$/', '', $item)) == 0;
        }));
      }
}
