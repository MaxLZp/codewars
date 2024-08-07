<?php

namespace tests\K6_ApplyOffsetToSubtitles;

class DataProvider
{
    public function data()
    {
        return [
            [["01:09:02,684 --> 01:09:03,601 Run Forrest, run!", 3663655], "02:10:06,339 --> 02:10:07,256 Run Forrest, run!"],
            [["00:43:22,074 --> 00:43:24,159 No, I am your father.", 1789], "00:43:23,863 --> 00:43:25,948 No, I am your father."],
            [["00:03:06,241 --> 00:03:07,618 I`ll be back.", -21789], "00:02:44,452 --> 00:02:45,829 I`ll be back."],
            [["00:03:14,917 --> 00:03:16,001 My name is Bond. James Bond.", -195000],  "Invalid offset"],
            [["01:00:00,000 --> 01:00:02,000 Let`s start with this.", -3600000], "00:00:00,000 --> 00:00:02,000 Let`s start with this."],
            [["01:00:00,000 --> 01:00:02,000 Let`s finish this.", 356397999],  "99:59:57,999 --> 99:59:59,999 Let`s finish this."],
        ];
    }
}