<?php

namespace tests\K6_SelectiveMemory;

class DataProvider
{
    public function data()
    {
        return [
            [
                "Bryan Joubert", 
                "Bryan Joubert",
            ],
            [
                "Jesse Cox, !Selena Gomez",
                "Jesse Cox", 
            ],
            [
                "!Eleena Daru, Obi-Wan Kenobi, Eleena Daru, Jar-Jar Binks",
                "Jar-Jar Binks", 
            ],
            [
                "Digital Daggers, !Kiny Nimaj, Rack Istley, Digital Daggers, Digital Daggers",
                "Digital Daggers, Digital Daggers, Digital Daggers", 
            ],
            [
                "Albert Einstein, !Sarah Connor, Marilyn Monroe, Abraham Lincoln, Sarah Connor, Sean Connery, Marilyn Monroe, Bjarne Stroustrup, Manson Marilyn, Monroe Mary",
                "Albert Einstein, Abraham Lincoln, Sean Connery, Bjarne Stroustrup, Manson Marilyn, Monroe Mary", 
            ],
            [
                "!Partha Ashanti, !Mindaugas Burton, Stacy Thompson, Amor Hadrien, !Ahtahkakoop Sothy, Partha Ashanti, Uzi Griffin, Partha Ashanti, !Serhan Eutimio, Amor Hadrien, Noor Konstantin",
                "Uzi Griffin, Noor Konstantin", 
            ],
            [
                "!Code Wars, !Doug Smith, !Cyril Lemaire, !Codin Game",
                "", 
            ],  

            [
                "Nagjlmpqz Ibdfsvz, Gbkz Skopquxz, Fabcdehm Mdgprsu, Pcefhkmryz Edfhjlz, Nagjlmpqz Ibdfsvz, !Pcefhkmryz Edfhjlz, Fadegjkmo Ocfgmtu, Rcflnorvwy Edghlosv, Kbciqrvz Hghns, Nagjlmpqz Ibdfsvz, Nagjlmpqz Ibdfsvz, Nagjlmpqz Ibdfsvz, Ucdhopsuz Umu, Rcflnorvwy Edghlosv, Kbciqrvz Hghns, Kbciqrvz Hghns, Rcflnorvwy Edghlosv, Nagjlmpqz Ibdfsvz, Fadegjkmo Ocfgmtu, Rcflnorvwy Edghlosv, Pcefhkmryz Edfhjlz, Rcflnorvwy Edghlosv, Kbciqrvz Hghns, Ucdhopsuz Umu, Mabejnptvy Jabhlm, Nagjlmpqz Ibdfsvz, Rcflnorvwy Edghlosv, Pcefhkmryz Edfhjlz, !Ucdhopsuz Umu, Pcefhkmryz Edfhjlz, Abj Qghmp, Fabcdehm Mdgprsu, Abj Qghmp, Fadegjkmo Ocfgmtu, Gbkz Skopquxz, Ucdhopsuz Umu, Mabejnptvy Jabhlm, Kbciqrvz Hghns",
                "Nagjlmpqz Ibdfsvz, Gbkz Skopquxz, Fabcdehm Mdgprsu, Nagjlmpqz Ibdfsvz, Rcflnorvwy Edghlosv, Kbciqrvz Hghns, Nagjlmpqz Ibdfsvz, Nagjlmpqz Ibdfsvz, Nagjlmpqz Ibdfsvz, Rcflnorvwy Edghlosv, Kbciqrvz Hghns, Kbciqrvz Hghns, Rcflnorvwy Edghlosv, Nagjlmpqz Ibdfsvz, Rcflnorvwy Edghlosv, Rcflnorvwy Edghlosv, Kbciqrvz Hghns, Mabejnptvy Jabhlm, Nagjlmpqz Ibdfsvz, Rcflnorvwy Edghlosv, Abj Qghmp, Fabcdehm Mdgprsu, Abj Qghmp, Gbkz Skopquxz, Mabejnptvy Jabhlm, Kbciqrvz Hghns", 
            ],  
            [
                "!Qegjktwxz Pdmsuy, Vakrs Jgimrv, Rbcgilq Nch, !Ngiknqruwx Ecfisvw, Ccmqst Fbcu, Pfimotv Lcdepqt, Ngiknqruwx Ecfisvw, Pbgint Koq, Qegjktwxz Pdmsuy, Rhiklnqt Lcilnqrtx, Ngiknqruwx Ecfisvw, Vakrs Jgimrv, Hjkux Gikqrtuvw, Paegilnuv Kbdlnpsuvy, Vakrs Jgimrv, Vakrs Jgimrv, Hjkux Gikqrtuvw, Paegilnuv Kbdlnpsuvy, Pfimotv Lcdepqt, !Pbgint Koq, Vakrs Jgimrv, Ccmqst Fbcu, Qegjktwxz Pdmsuy, Pfimotv Lcdepqt, Ngiknqruwx Ecfisvw, Rbcgilq Nch, Rhiklnqt Lcilnqrtx, Pbgint Koq, !Pfimotv Lcdepqt, Ccmqst Fbcu, Pbgint Koq, Rhiklnqt Lcilnqrtx, Rhiklnqt Lcilnqrtx, !Pfimotv Lcdepqt, Pfimotv Lcdepqt, !Paegilnuv Kbdlnpsuvy, Hjkux Gikqrtuvw, Ccmqst Fbcu, Ccmqst Fbcu, Paegilnuv Kbdlnpsuvy, Vakrs Jgimrv, Rhiklnqt Lcilnqrtx, Hjkux Gikqrtuvw, Ngiknqruwx Ecfisvw, Hjkux Gikqrtuvw, Hjkux Gikqrtuvw, Qegjktwxz Pdmsuy, Paegilnuv Kbdlnpsuvy, Vakrs Jgimrv, Ccmqst Fbcu",
                "Rbcgilq Nch, Rhiklnqt Lcilnqrtx, Rbcgilq Nch, Rhiklnqt Lcilnqrtx, Rhiklnqt Lcilnqrtx, Rhiklnqt Lcilnqrtx, Rhiklnqt Lcilnqrtx", 
            ],  
            [
                "Eabefklnvy Tmnpruxz, Ydiquy Elz, Nop Vbefhikqsy, Nop Vbefhikqsy, Ihitv Qbh, Sabjovz Fbhkmny, !Uanrvyz Oabfmtwy, Hcgorwz Abdjkpvx, Ybdjklrvxy Yev, !Ihitv Qbh, Nop Vbefhikqsy, Hcgorwz Abdjkpvx, Ihitv Qbh, Uanrvyz Oabfmtwy, Sabjovz Fbhkmny, Tcdlrstvy Nkqz, Hcgorwz Abdjkpvx, Hcgorwz Abdjkpvx, Sabjovz Fbhkmny, Mfklmo Vbsw, Mfklmo Vbsw, Hcgorwz Abdjkpvx, Uanrvyz Oabfmtwy, Tcdlrstvy Nkqz, Tcdlrstvy Nkqz, Ydiquy Elz, Eabefklnvy Tmnpruxz, Hcgorwz Abdjkpvx, Mfklmo Vbsw, Ihitv Qbh, Ihitv Qbh, !Tcdlrstvy Nkqz, Ihitv Qbh, Tcdlrstvy Nkqz, Tcdlrstvy Nkqz, !Uanrvyz Oabfmtwy, Mfklmo Vbsw, Ydiquy Elz, Ybdjklrvxy Yev",
                "Eabefklnvy Tmnpruxz, Ydiquy Elz, Sabjovz Fbhkmny, Ybdjklrvxy Yev, Sabjovz Fbhkmny, Sabjovz Fbhkmny, Ydiquy Elz, Eabefklnvy Tmnpruxz, Ydiquy Elz, Ybdjklrvxy Yev", 
            ],  
            [
                "Aekmux Qchkopru, Iels Bcfkqtu, Jemo Sajmotuy, Iels Bcfkqtu, Jeh Abcfnpyz, Aekmux Qchkopru, Jgilmnpswy Aadfklot, Zjm Jadgqr, Oerxy Eaefgiov, Iels Bcfkqtu, Ebmps Padijqrx, Oerxy Eaefgiov, Jgilmnpswy Aadfklot, !Zjm Jadgqr, !Ddghjnoswx Zadknoqrx, Jgilmnpswy Aadfklot, Iels Bcfkqtu, Iels Bcfkqtu, Jemo Sajmotuy, Ebmps Padijqrx, Aekmux Qchkopru, Iels Bcfkqtu, Zjm Jadgqr, Ddghjnoswx Zadknoqrx, Ebmps Padijqrx, Jemo Sajmotuy, Ebmps Padijqrx, Oerxy Eaefgiov, Ddghjnoswx Zadknoqrx, Ebmps Padijqrx, Jeh Abcfnpyz, Oerxy Eaefgiov, Ebmps Padijqrx, !Aekmux Qchkopru, Xcfgklmosw Rbl",
                "Iels Bcfkqtu, Jemo Sajmotuy, Iels Bcfkqtu, Jeh Abcfnpyz, Oerxy Eaefgiov, Iels Bcfkqtu, Ebmps Padijqrx, Oerxy Eaefgiov, Iels Bcfkqtu, Iels Bcfkqtu, Jemo Sajmotuy, Ebmps Padijqrx, Iels Bcfkqtu, Ebmps Padijqrx, Jemo Sajmotuy, Ebmps Padijqrx, Oerxy Eaefgiov, Ebmps Padijqrx, Jeh Abcfnpyz, Oerxy Eaefgiov, Ebmps Padijqrx", 
            ],  
        ];
    }
}