<?php

namespace tests\K6_PlayingWithDigits;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_PlayingWithDigits\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve($n, $p): int {
        $nums = str_split("{$n}");
        $sum = 0;
        for ($i = 0; $i < count($nums); $i++) {
            // $sum += pow($nums[$i], $p+$i);
            // or ** === pow; p++ === $p+$i
            $sum += $nums[$i] ** $p++;
        }
        $k = $sum / $n;
        return  fmod($k, 1) == 0 ? $k : -1;
        //or
        // return  $k == (int)$k ? $k : -1;
    }
}
