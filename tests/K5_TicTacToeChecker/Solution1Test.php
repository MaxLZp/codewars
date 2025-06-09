<?php

namespace tests\K5_TicTacToeChecker;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K5_TicTacToeChecker\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve(array $board): int
    {
        $hasEmpty = false;
        for ($i = 0; $i < count($board); $i++) {
          $res = [0, 0, 0];
          for ($j = 0; $j < count($board[$i]); $j ++) {
              $res[$board[$i][$j]]++;
          }   
          if ($res[1] == 3) { return 1; }
          if ($res[2] == 3) { return 2; }
          $hasEmpty = $res[0];
        }  

        for ($i = 0; $i < count($board); $i++) {
          $res = [0, 0, 0];
          for ($j = 0; $j < count($board[$i]); $j++) {
              $res[$board[$j][$i]]++;
          }   
          if ($res[1] == 3) { return 1; }
          if ($res[2] == 3) { return 2; }
          $hasEmpty = $hasEmpty || $res[0];
        }  

        $res = [0, 0, 0];
        for ($i = 0; $i < count($board); $i++) {
          $res[$board[$i][$i]]++;
        }  
        if ($res[1] == 3) { return 1; }
        if ($res[2] == 3) { return 2; }
        $hasEmpty = $hasEmpty || $res[0];

        $res = [0, 0, 0];
        for ($start = count($board) - 1, $i = $start; $i >= 0; $i--) {
            $res[$board[$i][$start - $i]]++;
        }  
        if ($res[1] == 3) { return 1; }
        if ($res[2] == 3) { return 2; }
        $hasEmpty = $hasEmpty || $res[0];

        return $hasEmpty ? -1 : 0;
    }

}







