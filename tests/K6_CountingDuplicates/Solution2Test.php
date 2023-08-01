<?php

namespace tests\K6_CountingDuplicates;

use PHPUnit\Framework\TestCase;

class Solution2Test extends TestCase
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
            $this->makeCharsDictionaryV2(
                $this->makeLowercase($input)
            )
        );
    }

    private function makeLowercase(string $string): string
    {
        return \strtolower($string);
    }

    private function makeCharsDictionaryV2(string $string): array
    {
        $dictionary = [];
        $stringArray = \str_split($string);
        \array_walk($stringArray, function ($item, $key) use (&$dictionary) {
            if (!\array_key_exists($item, $dictionary)) {
                $dictionary[$item] = 0;
            }
            $dictionary[$item]++;
        });
        return $dictionary;
    }

    private function countDuplicates(array $dictionary): int
    {
        return \array_reduce($dictionary, function($total, $item) {
            $total += ($item > 1) ? 1 : 0;
            return $total;
        }, 0);
    }
}
