<?php
/**
 * 6 kyu Class BuildAPileOfCubes
 *
 * Your task is to construct a building which will be a pile of n cubes.
 * The cube at the bottom will have a volume of n^3,
 * the cube above will have volume of (n-1)^3 and so on until the top
 * which will have a volume of 1^3.
 *
 * You are given the total volume m of the building.
 * Being given m can you find the number n of cubes you will have to build?
 *
 * The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m
 * and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m
 * if such a n exists or -1 if there is no such n.
 *
 * findNb(1071225) --> 45
 * findNb(91716553919377) --> -1
 *
 */
namespace tests;

use PHPUnit\Framework\TestCase;

class BuildAPileOfCubesTest extends TestCase
{

    /** @test */
    public function testBasicsV1() {
        $this->assertEquals($this->findNbV1(224), -1);
        $this->assertEquals($this->findNbV1(225), 5);
        $this->assertEquals($this->findNbV1(4183059834009), 2022);
        $this->assertEquals($this->findNbV1(24723578342962), -1);
        $this->assertEquals($this->findNbV1(135440716410000), 4824);
    }

    /** @test */
    public function testBasicsV2() {
        $this->assertEquals($this->findNbV2(224), -1);
        $this->assertEquals($this->findNbV2(225), 5);
        $this->assertEquals($this->findNbV2(4183059834009), 2022);
        $this->assertEquals($this->findNbV2(24723578342962), -1);
        $this->assertEquals($this->findNbV2(135440716410000), 4824);
    }

    public function findNbV1($m): int
    {
        for ($n = 1; ; $n++) {
            $sum = $this->cubesSum($n);
            if ($m === $sum) {return $n;}
            if ($m < $sum) {return -1;}
        }
    }

    private function findNbV2($m): int
    {
        $n = 1;
        $step = $n;

        while (true) {
            $difference = $m - $this->cubesSum($n);

            if ($difference === 0) {
                return $n;
            };

            // if the difference is positive then $n is to small
            // Increase it by $step value
            // ($step value is doubled each time)
            $step *= 2;
            if ($difference < 0) {
                //reset step to half of current step value
                // if it is too big
                $step = $step / 2; //get prior $step
                $n -= $step; //get prior $n value
                $step = $step / 2; //make current $step value as half of prior $step
                if ($step < 1) return -1;
            }
            $n += $step;
        }

        return -1;
    }

    /**
     * Claculate sum of cubes
     *
     * https://elementy.ru/problems/2068/Summy_kvadratov_summy_kubov
     *          Sum = (sqr(n) * sqr(n+1)) / 4;
     * or https://www.youtube.com/watch?v=W2vTn7PFJE4
     *
     * @param $n
     * @return int
     */
    private function cubesSum($n): int
    {
        return (\pow($n, 2) * pow($n + 1, 2)) / 4;
    }
}
