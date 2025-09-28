<?php

namespace tests\K6_FollowThatSpy;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_FollowThatSpy\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($this->solve($input), $expected);
    }

    public function solve(array $routes)
    {
        $i = 0;
        do {
            $cur = [$routes[$i++]];
            $result = [$cur[0][0]];

            while($cur = array_values(array_filter($routes, function($route) use ($cur) { return $route[0] === $cur[0][1]; }))) {
                $result[] = $cur[0][0];
            }

            $cur = array_values(array_filter($routes, function($route) use ($result) { return $route[0] === $result[count($result) - 1]; }));
            $result[] = $cur[0][1];
        } while (count($result) - 1 != count($routes));
        
        return implode(', ', $result);
    }
}
