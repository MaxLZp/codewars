<?php

namespace tests\K7_WellOfIdeas;

class DataProvider
{
    public function data()
    {
        return [
            [[['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']], 'Fail!'],
            [[['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']], 'Publish!'],
            [[['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']], 'I smell a series!'],
        ];
    }
}