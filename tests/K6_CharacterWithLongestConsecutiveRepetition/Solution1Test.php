<?php

namespace tests\K6_CharacterWithLongestConsecutiveRepetition;

use phpDocumentor\Reflection\Types\Boolean;
use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_CharacterWithLongestConsecutiveRepetition\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    public function solve($s)
    {
        if (empty($s)) {
            return ["",0];
        }

        $chars = str_split($s);
        $char = $chars[0];
        $count = 1;
        $maxChar = $char;
        $maxCount = $count;

        for($i = 1; $i < count($chars); $i++) {
            if ($chars[$i] === $char) {
                $count++;
                continue;
            }
            if ($count > $maxCount) {
                $maxChar = $char;
                $maxCount = $count;
            }
            $char = $chars[$i];
            $count = 1;
        }
        if ($count > $maxCount) {
            $maxChar = $char;
            $maxCount = $count;
        }


        return [$maxChar, $maxCount];
    }
}
