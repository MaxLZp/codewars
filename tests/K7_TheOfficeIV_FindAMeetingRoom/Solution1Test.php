<?php

namespace tests\K7_TheOfficeIV_FindAMeetingRoom;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K7_TheOfficeIV_FindAMeetingRoom\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $a)
    {
        $pos = array_search('O', $a);
        return $pos === false ? 'None available!' : $pos;
    }
}
