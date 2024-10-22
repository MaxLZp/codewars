<?php

namespace tests\K7_SortByLastChar;

class DataProvider
{
    public function data()
    {
        return [
            ['man i need a taxi up to ubud', ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'], ],
            ['what time are we climbing up the volcano', ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what'], ],
            ['take me to semynak', ['take', 'me', 'semynak', 'to'], ],
        ];
    }
}
