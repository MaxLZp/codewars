<?php

namespace tests\K7_ConvertALinkedListToAString;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_ConvertALinkedListToAString\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($list): string
    {
        return $list ? $list->data. ' -> '. $this->solve($list->next) : 'NULL';
    }
}
