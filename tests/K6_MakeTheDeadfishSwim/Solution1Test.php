<?php

namespace tests\K6_MakeTheDeadfishSwim;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_MakeTheDeadfishSwim\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($data): array
    {
        $result = [];
        $value = 0;
        foreach(str_split($data) as $command) {
            switch ($command) {
                case 'i': $value++; break;
                case 'd': $value--; break;
                case 's': $value *= $value; break;
                case 'o': $result[] = $value; break;
                default: break;
            }
        };

        return $result;
    }
}
