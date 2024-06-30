<?php

namespace tests\K5_FindTheUniqueString;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K5_FindTheUniqueString\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($a): string
    {
        $data = [];
        foreach ($a as $key => $value) {
            $val = array_unique(str_split(str_replace(' ', '', strtolower($value))));
            sort($val);
            $val = implode('', $val);
            if (! array_key_exists($val, $data)) {
                $data[$val] = [
                    'index' => $key,
                    'value' => $value,
                    'count' => 0,
                ];
            }
            $data[$val]['count'] += 1;
        }

        $data = array_filter($data, function($item) {
            return $item['count'] == 1;
        });
        $data = array_shift($data);

        return $data['value'];
    }

}







