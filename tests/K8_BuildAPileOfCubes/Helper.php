<?php

namespace tests\K8_BuildAPileOfCubes;

use PHPUnit\Framework\TestCase;

class Helper extends TestCase
{

    /**
     * Calculate sum of cubes
     *
     * Sum = (sqr(n) * sqr(n+1)) / 4;
     * @link https://elementy.ru/problems/2068/Summy_kvadratov_summy_kubov.
     * @link https://www.youtube.com/watch?v=W2vTn7PFJE4
     *
     * @param $n
     * @return int
     */
    public static function sumOfCubes($n): int
    {
        return (\pow($n, 2) * pow($n + 1, 2)) / 4;
    }
}
