<?php

namespace tests\K7_RemoveAnchorFromURL;

class DataProvider
{
    public function data()
    {
        return [
            ["http://www.uol.com.br#teste", "http://www.uol.com.br",],
            ["www.google.com" , "www.google.com",],
            ["www.ig.com.br","www.ig.com.br",],
            ["www.naoexiste.com#naoexiste","www.naoexiste.com",],
            ["abc#d","abc",],
            ["www.attser.com","www.attser.com",],
            ["www.indio.com#flecha","www.indio.com",],
        ];
    }
}
