<?php

namespace tests\K7_SimpleFun_215_ProperlyClosedBracketWord;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_SimpleFun_215_ProperlyClosedBracketWord\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(string $word): bool 
    {
        $chars = array_flip(str_split('abcdefghijklmnopqrstuvwxyz'));
        for($i = 0, $j = strlen($word) - 1; $i <= $j; $i++, $j--) {
            if (
                $chars[$word[$i]] != 25 - $chars[$word[$j]]
                &&
                25 - $chars[$word[$i]] != $chars[$word[$j]]
            ) {
                return false;
            }
        }
        return true;
    }
}
