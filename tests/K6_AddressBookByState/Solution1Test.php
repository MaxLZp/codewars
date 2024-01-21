<?php

namespace tests\K6_AddressBookByState;

use PHPUnit\Framework\TestCase;

class Solution1Test extends TestCase
{

    /**
     * @test
     * @dataProvider \tests\K6_AddressBookByState\DataProvider::data
     */
    public function execute($input, $expected) {
        $this->assertSame($expected, $this->solve($input));
    }

    public function solve($str): string
    {
        $patterns = [
            '/AZ/',
            '/CA/',
            '/ID/',
            '/IN/',
            '/MA/',
            '/OK/',
            '/PA/',
            '/VA/',
        ];
        $replacements = [
            'Arizona',
            'California',
            'Idaho',
            'Indiana',
            'Massachusetts',
            'Oklahoma',
            'Pennsylvania',
            'Virginia',
        ];
        $addresses = array_filter(explode(PHP_EOL, preg_replace($patterns, $replacements, $str)));
        usort($addresses, function($l, $r) {
            $ls = substr($l, strrpos($l, ' ')+1).$l;
            $rs = substr($r, strrpos($r, ' ')+1).$r;
            return strcmp($ls, $rs);
        });
        $state = '';
        $result = [];
        for ($i=0; $i < count($addresses); $i++) {
            $curState = substr($addresses[$i], strrpos($addresses[$i], ' ')+1);
            if ($curState != $state) {
                $result[] = ($state ? ' '.$curState : $curState);
                $state = $curState;
            }
            $result[] = '..... '.preg_replace('/,/', '', $addresses[$i]);
        }
        return implode("\r\n", $result);
    }

    /**
     * Not accepted by codewars
     */
    // public function solve($str): string
    // {
    //     $patterns = [
    //         '/AZ/',
    //         '/CA/',
    //         '/ID/',
    //         '/IN/',
    //         '/MA/',
    //         '/OK/',
    //         '/PA/',
    //         '/VA/',
    //     ];
    //     $replacements = [
    //         'Arizona',
    //         'California',
    //         'Idaho',
    //         'Indiana',
    //         'Massachusetts',
    //         'Oklahoma',
    //         'Pennsylvania',
    //         'Virginia',
    //     ];
    //     $addresses = array_filter(explode(PHP_EOL, preg_replace($patterns, $replacements, $str)));
    //     usort($addresses, function($l, $r) {
    //         $ls = substr($l, strrpos($l, ' ')+1).$l;
    //         $rs = substr($r, strrpos($r, ' ')+1).$r;
    //         return strcmp($ls, $rs);
    //     });
    //     $state = '';
    //     return rtrim(array_reduce($addresses, function($carry, $address) use (&$state) {
    //         $curState = substr($address, strrpos($address, ' ')+1);
    //         if ($curState != $state) {
    //             $carry .= ($state ? ' '.$curState : $curState).PHP_EOL;
    //             $state = $curState;
    //         }
    //         return $carry . '..... ' . preg_replace('/,/', '', $address) . PHP_EOL;
    //     }, ''), PHP_EOL);
    // }
}







