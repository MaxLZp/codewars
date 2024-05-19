<?php

namespace tests\K7_TheOfficeIV_FindAMeetingRoom;

class DataProvider
{
    public function data()
    {
        return [
            [['X', 'O', 'X'], 1,],
            [['O', 'X', 'X', 'X', 'X'], 0],
            [['X', 'X', 'X', 'X', 'X'], "None available!",],
        ];
    }
}