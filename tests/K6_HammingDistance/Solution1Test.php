<?php

namespace tests\K6_HammingDistance;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_HammingDistance\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($this->solve(...$input), $expected);
    }

    public function solve(string $a, string $b): int 
    {
        $result = 0;
        for($i = 0; $i < strlen($a); $i++) {
            $result += $a[$i] == $b[$i] ? 0 : 1;
        }

        return $result;
    }
}
