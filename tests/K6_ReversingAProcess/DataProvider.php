<?php

namespace tests\K6_ReversingAProcess;

class DataProvider
{
    public function data()
    {
        return [
            // [$actual, $expected]
            ["6015ekx", "mer", ],
            ["1273409kuqhkoynvvknsdwljantzkpnmfgf", "uogbucwnddunktsjfanzlurnyxmx", ],
            ["1544749cdcizljymhdmvvypyjamowl", "mfmwhbpoudfujjozopaugcb", ],
            ["105860ymmgegeeiwaigsqkcaeguicc", "Impossible to decode", ],
            ["1122305vvkhrrcsyfkvejxjfvafzwpsdqgp", "rrsxppowmjsrclfljrajtybwviqb", ],
        ];
    }
}