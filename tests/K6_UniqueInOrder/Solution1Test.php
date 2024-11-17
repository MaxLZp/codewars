<?php

namespace tests\K6_UniqueInOrder;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_UniqueInOrder\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($iterable)
    {
        $input = $iterable;
        if (is_string($input)) {
            $input = [];
            if (strlen($iterable) > 0){
                $input = str_split($iterable);
            }
        }

        $ret = [];
        for ($i = 0; $i < count($input); $i++) { 
            if (!$ret) {
                $ret[] = $input[$i];
                continue;
            }
            if ($ret[count($ret) - 1] !== $input[$i]) {
                $ret[] = $input[$i];
            }
        }
        return $ret;
    }
}
