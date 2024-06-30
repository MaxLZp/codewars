<?php

namespace tests\K5_FindTheUniqueString;

class DataProvider
{
    public function data()
    {
        return [
            [[ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ], 'BbBb', ],
            [[ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ], 'foo', ],
            [[ 'silvia', 'vasili', 'victor' ], 'victor', ],
            [[ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ], 'Harry Potter', ],
            [[ '     ', 'a', ' ' ], 'a', ],
        ];
    }
}