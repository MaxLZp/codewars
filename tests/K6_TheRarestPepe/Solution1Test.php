<?php

namespace tests\K6_TheRarestPepe;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_TheRarestPepe\DataProvider::data
     */
    public function execute($expected, $input) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $pepes): string|array {
        $count = array_count_values($pepes);
        $min = min($count);
        $count = array_keys($count, $min);
        sort($count);

        return $min >= 5 ? 'No rare pepes!' : (count($count) == 1 ? $count[0] : $count);
    }

    // public function solve(array $pepes): string|array {
    //     $count = [];
    //     foreach($pepes as $pepe) {
    //         if (!isset($count[$pepe])) {
    //             $count[$pepe] = [
    //                 'pepe' => $pepe,
    //                 'count' => 0,
    //             ];
    //         }
    //         $count[$pepe]['count']++;
    //     }

    //     usort($count, function($l, $r) {
    //         return $l['count'] - $r['count'];
    //     });

    //     $min = $count[0]['count'];
    //     $count = array_filter($count, function($pepe) use($min) {
    //         return $pepe['count'] <= $min;
    //     });
    //     $count = array_map(function($pepe) {
    //         return $pepe['pepe'];
    //     }, $count);

    //     sort($count);

    //     return $min >= 5 ? 'No rare pepes!' : (count($count) == 1 ? $count[0] : $count);
    // }
}
