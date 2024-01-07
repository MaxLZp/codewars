<?php

namespace tests\K6_PrizeDraw;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{
    private $exstr  = "Sophia,Jacob,Isabella,Mason,Emma,William,Willaim,Olivia,Olivai,Jayden,Ava,Noah,Naoh,Emily,Michael,Abigail,Ethan,Madison,"
        ."Alexander,Mia,Aiden,Chloe,Daniel,Elizabeth,Robert,Ella,Matthew,Addison,Elijah,Natalie,Joshua,Lily,Lyli,Liam,Grace,Andrew,Samantha,"
        ."James,Avery,David,Sofia,Benjamin,Aubrey,Logan,Lagon,xxxxx,yyyyy,zzzzz";
    /**
     * @test
     * @dataProvider \tests\K6_PrizeDraw\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertEquals($expected, $this->solve($input[0], $input[1], $input[2]));
    }

    public function solve($st, $we, $n): string
    {
        if (!$st) { return 'No participants'; }
        $names = preg_split('/,/', $st);
        if (count($names) < $n) {
            return "Not enough participants";
        }
        $names = array_map(function($name, $we) {
            $weight = $we * (strlen($name) + array_reduce(str_split($name), function($carry, $current) {
                return $carry + ord(strtolower($current)) - ord('a') + 1;
            }, 0));
            return [
                'name' => $name,
                'weight' => $weight,
            ];
        }, $names, $we);

        usort($names, function($nameL, $nameR) {
            if ($nameL['weight'] == $nameR['weight']) {
                return $nameL['name'] <=> $nameR['name'];
            }
            return $nameR['weight'] <=> $nameL['weight'];
        });

        return $names[$n-1]['name'];
    }

}
