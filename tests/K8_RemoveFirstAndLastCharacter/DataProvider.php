<?php

namespace tests\K8_RemoveFirstAndLastCharacter;

class DataProvider
{
    public function data()
    {
        return [
            ['eloquent', 'loquen'],
            ['country', 'ountr'],
            ['person', 'erso'],
            ['place', 'lac'],
        ];
    }
}
