<?php

namespace tests\K6_StringTransformer;

class DataProvider
{
    public function data()
    {
        return [
            ["Example string", "STRING eXAMPLE"],
            ["You Know When  THAT  Hotline Bling", 'bLING hOTLINE  that  wHEN kNOW yOU'],
        ];
    }
}