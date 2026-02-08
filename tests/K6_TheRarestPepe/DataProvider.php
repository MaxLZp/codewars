<?php

namespace tests\K6_TheRarestPepe;

class DataProvider
{
    public function data()
    {
        return [
            "one pepe" => ['Melania Trump Pepe', [
                'Donald Trump Pepe',
                'Melania Trump Pepe','Clown Pepe', 'Clown Pepe',
                'Donald Trump Pepe'
              ]],
              "two pepes" => [['Deep Learning Pepe', 'Go Pepe'], [
                'Go Pepe', 'Deep Learning Pepe', 'Machine Learning Pepe',
                'Machine Learning Pepe', 'Machine Learning Pepe'
              ]],
              "no pepe" => ['No rare pepes!', [
                'Codewars Pepe', 'Codewars Pepe', 'Codewars Pepe',
                'Codewars Pepe', 'Codewars Pepe'
              ]]
        ];
    }
}
