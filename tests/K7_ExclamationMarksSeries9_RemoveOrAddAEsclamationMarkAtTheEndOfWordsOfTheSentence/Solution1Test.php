<?php

namespace tests\K7_ExclamationMarksSeries9_RemoveOrAddAEsclamationMarkAtTheEndOfWordsOfTheSentence;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_ExclamationMarksSeries9_RemoveOrAddAEsclamationMarkAtTheEndOfWordsOfTheSentence\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(string $s): string
    {
        $words = explode(" ", $s);
        $words = array_map(function ($word) {
            $word = preg_replace('/([^!])!{1}$/', '$1', $word, -1, $count);
            if(!$count && !preg_match('/!$/', $word, $matches)) {
                $word .= '!';
            }
            return $word;
        }, $words);

        return implode(" ", $words);
    }

}
