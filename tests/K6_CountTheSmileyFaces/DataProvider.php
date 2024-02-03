<?php

namespace tests\K6_CountTheSmileyFaces;

class DataProvider
{
    public function data()
    {
        return [
            [[], 0,],
            [[':D',':~)',';~D',':)'], 4,],
            [[':)',':(',':D',':O',':;'], 2,],
            [[';]', ':[', ';*', ':$', ';-D'], 1,],
        ];
    }
}