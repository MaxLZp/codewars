<?php

namespace tests\K6_DetectPangram;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_DetectPangram\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($input): bool
    {
        return count(array_unique(str_split(strtolower(trim(preg_replace('/[^a-z]/i', '', $input)))))) >= (ord('z') - ord('a') + 1);
    }
}
