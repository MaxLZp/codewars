<?php

namespace tests\K7_BubblesortOnce;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_BubblesortOnce\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($a): array
    {
        $result = array_values($a);
        for ($i = 1; $i < count($a); $i++) {
            if ($result[$i - 1] > $result[$i]) {
                $temp = $result[$i];
                $result[$i] = $result[$i - 1];
                $result[$i - 1] = $temp;
            }
        }

        return $result;
    }
}
