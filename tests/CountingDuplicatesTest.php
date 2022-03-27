<?php
/**
 * 6 kyu Counting Duplicates
 *
 * Count the number of Duplicates
 *
 * Write a function that will return the count of distinct case-insensitive
 * alphabetic characters and numeric digits that occur more than once in the input
 * string. The input string can be assumed to contain only alphabets
 * (both uppercase and lowercase) and numeric digits.
 *
 * Example:
 *
 * "abcde" -> 0 # no characters repeats more than once
 * "aabbcde" -> 2 # 'a' and 'b'
 * "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
 * "indivisibility" -> 1 # 'i' occurs six times
 * "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
 * "aA11" -> 2 # 'a' and '1'
 * "ABBA" -> 2 # 'A' and 'B' each occur twice
 *
 */

namespace tests;

use PHPUnit\Framework\TestCase;

class CountingDuplicatesTest extends TestCase
{
    /** @test */
    public function testFixedTestsV1() {
        $this->assertEquals(0, $this->duplicateCountV1(""));
        $this->assertEquals(0, $this->duplicateCountV1("abcde"));
        $this->assertEquals(2, $this->duplicateCountV1("aabbcde"));
        $this->assertEquals(2, $this->duplicateCountV1("aabBcde"), "should ignore case");
        $this->assertEquals(1, $this->duplicateCountV1("Indivisibility"));
        $this->assertEquals(2, $this->duplicateCountV1("Indivisibilities"), "characters may not be adjacent");
    }

    /** @test */
    public function testFixedTestsV2() {
        $this->assertEquals(0, $this->duplicateCountV2(""));
        $this->assertEquals(0, $this->duplicateCountV2("abcde"));
        $this->assertEquals(2, $this->duplicateCountV2("aabbcde"));
        $this->assertEquals(2, $this->duplicateCountV2("aabBcde"), "should ignore case");
        $this->assertEquals(1, $this->duplicateCountV2("Indivisibility"));
        $this->assertEquals(2, $this->duplicateCountV2("Indivisibilities"), "characters may not be adjacent");
    }

    private function duplicateCountV1(string $string): int
    {
        return $this->countDuplicates(
            $this->makeCharsDictionaryV1(
                $this->makeLowercase($string)
            )
        );
    }
    private function duplicateCountV2(string $string): int
    {
        return $this->countDuplicates(
            $this->makeCharsDictionaryV2(
                $this->makeLowercase($string)
            )
        );
    }

    private function makeLowercase(string $string): string
    {
        return \strtolower($string);
    }

    private function makeCharsDictionaryV1(string $string): array
    {
        return \array_count_values(\str_split($string));
    }

    private function makeCharsDictionaryV2(string $string): array
    {
        $dictionary = [];
        $stringArray = \str_split($string);
        \array_walk($stringArray, function ($item, $key) use (&$dictionary) {
            if (!\array_key_exists($item, $dictionary)) {
                $dictionary[$item] = 0;
            }
            $dictionary[$item]++;
        });
        return $dictionary;
    }

    private function countDuplicates(array $dictionary): int
    {
        return \array_reduce($dictionary, function($total, $item) {
            $total += ($item > 1) ? 1 : 0;
            return $total;
        }, 0);
    }
}
