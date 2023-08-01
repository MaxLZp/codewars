<?php

namespace tests\K6_CountingDuplicates;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_CountingDuplicates\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($input): int
    {
        return $this->countDuplicates(
            $this->makeCharsDictionaryV1(
                $this->makeLowercase($input)
            )
        );
    }
    private function makeLowercase(string $string): string
    {
        return \strtolower($string);
    }

    private function makeCharsDictionaryV1(string $string): array
    {
        return \array_count_values(\str_split($string));
    }

    private function countDuplicates(array $dictionary): int
    {
        return \array_reduce($dictionary, function($total, $item) {
            $total += ($item > 1) ? 1 : 0;
            return $total;
        }, 0);
    }
}
