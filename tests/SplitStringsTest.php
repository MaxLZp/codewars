<?php
/**
 * 6 kyu Split Strings
 *
 * Complete the solution so that it splits the string into pairs of two characters.
 * If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
 * Examples:
 * 'abc' =>  ['ab', 'c_']
 * 'abcdef' => ['ab', 'cd', 'ef']
 */
namespace tests;

use PHPUnit\Framework\TestCase;

class SplitStringsTest extends TestCase
{

    /** @test */
    public function testSplitStrings()
    {
        $this->assertEquals(["ab", "cd", "ef"], $this->solution("abcdef"));
        $this->assertEquals(["ab", "cd", "ef", "g_"], $this->solution("abcdefg"));
        $this->assertEquals([], $this->solution(""));
    }

    private function solution($str): array
    {
        if (\strlen($str) === 0) return [];
        return \str_split(
            (\strlen($str) % 2 === 0) ? $str : $str . '_',
            2
        );
    }
}
