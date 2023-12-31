<?php

namespace tests\K6_PermuteAPalindrome;

class DataProvider
{
    public function data()
    {
        return [
            [ ""          , true, ],
            [ "a"         , true, ],
            [ "aa"        , true, ],
            [ "aaa"       , true, ],
            [ "baa"       , true, ],
            [ "aab"       , true, ],
            [ "baabcd"    , false, ],
            [ "racecars"  , false, ],
            [ "abcdefghba", false, ],
            [ "kirhcyyxodp", false, ],
            [ "pcoixknoqxtbcsenxldxsegdeivchzzaaovlqgydxadadoizzdrjjdikxmisfyboddbmgfbuowdxvqnzqctthpeohzvcnbwpqowpchewmftcwvedemhpbxrqzifaxpisrkswmltdqjsxuinsevoqfsalhgqyvmdrbgukhvhysxbxnfdvnmitfckyskivzksjzuedanrwvivwejuuyiwqotoftnglxkppbqzeeedkskouqcsoedxgrbmxrlpmuohepixgihncasylofozxfbczlpiiyypxsffwzuljkwdczknbekzrhvvwijgcspzfiifzhfpegpmkdaycxqqoreubvdxgwbcbwuptfmtdiocjcjolskkeqyrihuetfhkkokxvppdxoprmsxikwwhgqmwjxlblioqcuyosspwxnexyvddrqkwwwfdwpbcyglveznxdqeutgaqtemeknjotzwjkgbpcwrblxinqzworhxprjlndpwwotqsgqqlkfvmvvqiddpxraafckgfzvnsfycywzhklxhkiuqkkscegmtqrlaizoaawcnwaapiqibdkbqctfcdnhbaxuyxjpvszkvacyviezazbixnbnxkyqxscppoqlabuixbbmwyxxkpmwnulxydiqaovnslwuoanukumtmrqckukvqgvxgprroqltcxlnnillujeutgwrqycdneeutsfbrmuozexoviiskkmvejwdphkwaqvdioeiiuejdojlukdgtnqpqhvmhniccgiocycfhknlvpdcvkggxzheaavuftdjyldebnuaemywnmknttgupkzpmtswzqkgaihhizxvmmwtxadprbaegluhvkgpxrsqabvcyzvmscgdzgdbcdsetqlurlakpiehbgnundaxnyfdqqmqdsqpxgkqehscppfdpmkfdskjpgeitpolzzbacqlztrnxxvlqkygtlkdwvahbsxeebteyxblzkjfmpktekgevwsacpxpddbqllnfsvqnsxuesozgzysllokiifhbqukhtsyiubqfgygondarjevpepbbugkt", false, ],
        ];
    }
}