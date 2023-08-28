<?php

namespace tests\K7_DisemvowelTrolls;

class DataProvider
{
    public function data()
    {
        return [
            ["This website is for losers LOL!", "Ths wbst s fr lsrs LL!"],
            ["No offense but,\nYour writing is among the worst I've ever read", "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"],
        ];
    }
}
