<?php

namespace tests\K6_ExtractPortionOfFileName;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_ExtractPortionOfFileName\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(string $dirtyFileName): string {
        return preg_replace('/^(\d+_)(.*)(\..+)$/', '$2', $dirtyFileName);
    }

}
