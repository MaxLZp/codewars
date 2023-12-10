<?php

namespace tests\K6_IntegerDepth;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_IntegerDepth\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($this->solve($input), $expected);
    }

    public function solve(int $n): int
    {
        $counter = 1;
        $ints = [];
        do{
            $ms = (string)($n * $counter++);
            for ($i=0; $i < strlen($ms); $i++) {
                $ints[$ms[$i]] = 1;
            }
        } while(count($ints) < 10);
        return $counter-1;
    }
}
