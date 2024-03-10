<?php

namespace tests\K6_AlphabetWar_ReinforcesMassacre;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_AlphabetWar_ReinforcesMassacre\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input[0], $input[1]));
    }


    public function solve(array $reinforces, array $airstrikes): string {
        $forces = str_split(array_shift($reinforces));
        $reinforces = array_map(function($item){
            return str_split($item);
        } , $reinforces);
        while (count($airstrikes)) {
            $strike = str_split(array_shift($airstrikes));
            foreach ($strike as $key => $value) {
                if ($value == '*') {
                    for ($i = $key - 1; $i <= $key+1; $i++) {
                        if (array_key_exists($i, $forces)) {
                            $forces[$i] = '_';
                        }
                    }
                }
            }
            foreach ($forces as $key => $value) {
                if ($value == '_') {
                    foreach ($reinforces as $rkey => $rvalue) {
                        if ($rvalue[$key] != '_') {
                            $forces[$key] = $rvalue[$key];
                            $reinforces[$rkey][$key] = '_';
                            break;
                        }
                    }
                }
            }
        }
        return implode('', $forces);
    }

}
