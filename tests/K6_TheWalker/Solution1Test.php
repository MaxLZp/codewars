<?php

namespace tests\K6_TheWalker;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{
    /**
     * @test
     * @dataProvider tests\K6_TheWalker\DataProvider::data
     */
    public function execute($input, $expected)
    {
        $this->assertEquals($expected, $this->solve($input[0], $input[1], $input[2], $input[3], $input[4], $input[5]));
    }

    public function solve($a, $b, $c, $alpha, $beta, $gamma): array    
    {
        $A = [cos(deg2rad($alpha)) * $a, sin(deg2rad($alpha)) * $a];
        $B = [$A[0] - sin(deg2rad($beta)) * $b, $A[1] + cos(deg2rad($beta)) * $b];
        $C = [$B[0] - cos(deg2rad($gamma)) * $c, $B[1] - sin(deg2rad($gamma)) * $c];
        
        $len = sqrt(pow($C[0], 2) + pow($C[1], 2));
        $deg = 180 - rad2deg(atan(abs($C[1]/$C[0])));
        $m = 60 * ($deg - (int)$deg);
        $s = 60 * ($m - (int)$m);

        return [
            (int)round($len), 
            (int)$deg,
            (int)$m,
            (int)$s,
        ];
    }
}
