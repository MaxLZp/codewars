<?php

namespace tests\K6_ReversingAProcess;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_ReversingAProcess\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input));
    }

    private function solve(string $r): string
    {
        $num = (int)$r;
        $s = array_map(function($c){
            return ord($c) - ord('a');
        }, str_split(str_replace("$num", '', $r)));

        $codes = [];
        for ($i = 0; $i < count($s); $i++) {
            for ($j = 0; $j < 26; $j++) {
                if ($s[$i] == $j*$num%26) {
                    $codes[] = $j;
                }
            }
        }
        if (count($codes) != count($s)){ return 'Impossible to decode'; }
        return implode('', array_map(function($code){
            return chr($code + ord('a'));
        }, $codes));
    }
}
