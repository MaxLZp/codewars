<?php
/**
 * 6 kyu
 *
 * Class ConvertStringToCamelCase
 *
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing.
 * The first word within the output should be capitalized only if the original word was capitalized
 * (known as Upper Camel Case, also often referred to as Pascal case).
 *
 *  Examples:
 * toCamelCase("the-stealth-warrior"); // returns "theStealthWarrior"
 * toCamelCase("The_Stealth_Warrior"); // returns "TheStealthWarrior"
 *
 */

namespace tests;

use PHPUnit\Framework\TestCase;

class ConvertStringToCamelCaseTest extends TestCase
{

    /** @test */
    public function SampleCases() {
        $this->assertEquals("theStealthWarrior", $this->toCamelCase("the_stealth_warrior"), "toCamelCase('the_stealth_warrior') did not return correct value");
        $this->assertEquals("theStealthWarrior", $this->toCamelCase("the-Stealth-Warrior"), "toCamelCase('the-Stealth-Warrior') did not return correct value");
    }

    /** @test */
    public function SampleCases2() {
        $this->assertEquals("theStealthWarrior", $this->toCamelCase2("the_stealth_warrior"), "toCamelCase('the_stealth_warrior') did not return correct value");
        $this->assertEquals("theStealthWarrior", $this->toCamelCase2("the-Stealth-Warrior"), "toCamelCase('the-Stealth-Warrior') did not return correct value");
    }


    private function toCamelCase($str)
    {
        $delimiterRegex = "/[-_]/";

        $words = \preg_split($delimiterRegex, $str);

        \array_walk($words, function (&$word, $index){
            if ($index === 0) return;
            $word = ucfirst($word);
        });

        return \implode($words);
    }

    private function toCamelCase2($str)
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
