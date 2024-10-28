<?php

namespace tests\K7_PairsOfIntegersFromMtoN;

use PHPUnit\Framework\TestCase;
use tests\K7_OOP4_PeoplePeoplePeople_Practice\Person;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_PairsOfIntegersFromMtoN\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }

    public function solve($m,$n): array
    {
        $result = [];
        for ($i = $m; $i <= $n; $i++) {
            for ($j = $i; $j <= $n; $j++) {
                $result[] = [$i, $j];
            }
        }

        return $result;
    }
}
