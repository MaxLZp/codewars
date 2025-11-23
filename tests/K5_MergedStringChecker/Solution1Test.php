<?php

namespace tests\K5_MergedStringChecker;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K5_MergedStringChecker\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve(...$input));
    }

    public function solve(string $s, string $part1, string $part2, bool $first = true): bool 
    {
        if (strlen($s) != strlen($part1) + strlen($part2)) return false;
        if (strlen($s) == 0) return true;
        if (strlen($part1) == 0) return $s == $part2;
        if (strlen($part2) == 0) return $s == $part1;
        if ($s[0] == $part1[0] && $this->solve(substr($s, 1), substr($part1, 1), $part2)) return true;
        if ($s[0] == $part2[0] && $this->solve(substr($s, 1), $part1, substr($part2, 1))) return true;
        return false;    }

}
