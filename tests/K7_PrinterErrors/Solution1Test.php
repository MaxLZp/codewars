<?php

namespace tests\K7_PrinterErrors;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_PrinterErrors\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    private function solve($s): string
    {
        return $this->formatResult($this->countErrorsIn($s), \strlen($s));
    }

    private function countErrorsIn($s): int
    {
        return \strlen(\preg_replace('/[a-m]/', '', $s));
    }

    private function formatResult(int $errors, int $total): string
    {
        return \sprintf("%d/%d", $errors, $total);
    }
}
