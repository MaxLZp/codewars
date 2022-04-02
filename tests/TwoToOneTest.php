<?php
/**
 * 7kyu Two to One
 *
 * Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
 * Examples:
 *
 * a = "xyaabbbccccdefww"
 * b = "xxxxyyyyabklmopq"
 * longest(a, b) -> "abcdefklmopqwxy"
 *
 * a = "abcdefghijklmnopqrstuvwxyz"
 * longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
 *
 */
namespace tests;

use PHPUnit\Framework\TestCase;

class TwoToOneTest extends TestCase
{
    private function revTest($actual, $expected) {
        $this->assertEquals($expected, $actual);
    }

    /**
     * @test
     */
    public function testBasics() {
        $this->revTest($this->longest("aretheyhere", "yestheyarehere"), "aehrsty");
        $this->revTest($this->longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu");
        $this->revTest($this->longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy");
        $this->revTest($this->longest("lordsofthefallen", "gamekult"), "adefghklmnorstu");
    }

    private function longest($first, $second)
    {
        $azArray = range('a', 'z');
        $azArray = array_combine($azArray, array_fill(0, count($azArray), 0));
        foreach(str_split($first) as $letter) {
            $azArray[$letter]++;
        }
        foreach(str_split($second) as $letter) {
            $azArray[$letter]++;
        }
        $azArray = array_filter($azArray, function($element) { return $element > 0; });
        $azArray = array_keys($azArray);
        return implode('', $azArray);
    }

//    /**
//     * Other's solution
//     *
//     * @return string
//     */
//    private function longest() {
//        $c = array_unique(str_split($a . $b));
//        sort($c);
//        return implode($c);
//    }
}
