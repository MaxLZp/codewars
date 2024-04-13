<?php

namespace tests\K6_FruitMachine;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_FruitMachine\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($this->solve($input[0], $input[1]), $expected);
    }

    public function solve($reels, $spins) {
        $map = [
            "Wild"   => 10,
            "Star"   => 9,
            "Bell"   => 8,
            "Shell"  => 7,
            "Seven"  => 6,
            "Cherry" => 5,
            "Bar"    => 4,
            "King"   => 3,
            "Queen"  => 2,
            "Jack"   => 1,
        ];
        $reelsSpinned = array_map(function($reel, $key) use ($spins) {
            $spinned = array_merge(
                array_slice($reel, $spins[$key]),
                array_slice($reel, 0, $spins[$key])
            );
            return $spinned[0];
        }, $reels, array_keys($reels));
        $values = array_count_values($reelsSpinned);
        foreach ($values as $key => $value) {
            if ($value == 1) { continue; }
            if ($value == 3) { return $map[$key] * 10; }
            return $map[$key] * (array_key_exists('Wild', $values) && $key != 'Wild' ? 2 : 1);
        }
        return 0;
    }
}
