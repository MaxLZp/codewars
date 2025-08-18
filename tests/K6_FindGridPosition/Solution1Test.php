<?php

namespace tests\K6_FindGridPosition;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_FindGridPosition\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($this->solve(...$input), $expected);
    }

    public function solve(int $m, int $n, array $position): string
    {
        $result = [];
        for($row = 0; $row < $m; $row++) {
            $line = array_fill(0, $n, $row == $position['y'] && $n > $position['x'] ? 1 : 0);
            if ($position['x'] < $n && $position['y'] < $m) {
                $line[$position['x']] = ($row == $position['y'] ? '*' : 1);
            }
            $result[] = implode('', $line);
        }
        return implode('\n', $result);
    }
}
