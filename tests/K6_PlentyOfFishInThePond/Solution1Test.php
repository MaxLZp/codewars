<?php

namespace tests\K6_PlentyOfFishInThePond;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_PlentyOfFishInThePond\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($shoal): int
    {
        $size = 1;
        $nextSize = $size * 4;
        $eaten = 0;
        $shoalArray = str_split($shoal);
        $shoalArray = array_map(fn($val) => (int)$val, $shoalArray);
        sort($shoalArray, SORT_NUMERIC);

        for ($i = 0; $i < count($shoalArray) && $shoalArray[$i] <= $size; $i++) {
            $eaten += $shoalArray[$i];
            if ($eaten >= $nextSize) {
                $size++;
                $nextSize += $size * 4;
            }
        }

        return $size;
    }
}
