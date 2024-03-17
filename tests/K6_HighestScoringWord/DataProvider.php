<?php

namespace tests\K6_HighestScoringWord;

class DataProvider
{
    public function data()
    {
        return [
            ['man i need a taxi up to ubud' , 'taxi', ],
            ['what time are we climbing up the volcano', 'volcano', ],
            ['take me to semynak', 'semynak', ],
            ['aa b', 'aa', ],
            ['b aa', 'b', ],
            ['bb d', 'bb', ],
            ['d bb', 'd', ],
        ];
    }
}