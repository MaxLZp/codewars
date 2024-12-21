<?php

namespace tests\K6_SimpleEncryption1_AlternatingSplit;

class DataProvider
{
    public function encrypt()
    {
        return [
            [["This is a test!", 0],"This is a test!", ],
            [["This is a test!", 1],"hsi  etTi sats!", ],
            [["This is a test!", 2],"s eT ashi tist!", ],
            [["This is a test!", 3]," Tah itse sits!", ],
            [["This is a test!", 4],"This is a test!", ],
            [["This is a test!", -1],"This is a test!", ],
            [["This kata is very interesting!", 1],"hskt svr neetn!Ti aai eyitrsig", ],
        ];
    }

    public function decrypt()
    {
        return [
            [["This is a test!", 0],"This is a test!", ],
            [["hsi  etTi sats!", 1],"This is a test!", ],
            [["s eT ashi tist!", 2],"This is a test!", ],
            [[" Tah itse sits!", 3],"This is a test!", ],
            [["This is a test!", 4],"This is a test!", ],
            [["This is a test!", -1],"This is a test!", ],
            [["hskt svr neetn!Ti aai eyitrsig", 1],"This kata is very interesting!", ],
        ];
    }

    public function empty()
    {
        return [
            [["", 0],"", ],
            [[null, 0],null, ],
        ];
    }
}