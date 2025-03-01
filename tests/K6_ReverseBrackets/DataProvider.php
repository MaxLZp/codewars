<?php

namespace tests\K6_ReverseBrackets;

class DataProvider
{
    public function data()
    {
        return [
            ["a(bc)de", "acbde"],
            ["a(bcdefghijkl(mno)p)q", "apmnolkjihgfedcbq"],
            ["co(de(war)s)", "coswared"],
            ["Code(Cha(lle)nge)", "CodeegnlleahC"],
        ];
    }
}