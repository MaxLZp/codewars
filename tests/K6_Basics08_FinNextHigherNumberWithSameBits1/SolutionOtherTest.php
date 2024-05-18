<?php

namespace tests\K6_Basics08_FinNextHigherNumberWithSameBits1;

use PHPUnit\Framework\TestCase;

class SolutionOtherTest extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_Basics08_FinNextHigherNumberWithSameBits1\DataProvider::data
     */
    public function executeDist($input, $expected) {
        $this->assertSame($this->solve($input), $expected);
    }

    public function solve($n): int
    {
        $c = ($n & -$n);
        $r = $n + $c ;
        return intval(((($r ^ $n) >> 2) / $c)) | $r ;
    }

}
