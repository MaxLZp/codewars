<?php

namespace tests\K6_AlphabetWar_Airstrike_LettersMassacre;

class DataProvider
{
    public function data()
    {
        return [
            ["z", "Right side wins!", ],
            ["****", "Let's fight again!", ],
            ["z*dq*mw*pb*s", "Let's fight again!", ],
            ["zdqmwpbs", "Let's fight again!", ],
            ["zz*zzs", "Right side wins!", ],
            ["sz**z**zs", "Left side wins!", ],
            ["z*z*z*zs", "Left side wins!", ],
            ["*wwwwww*z*", "Left side wins!", ],

            ["w**dhtz*h", "Right side wins!", ],

            ["wtxqz", "Let's fight again!", ],
            ["emd*dls**p", "Right side wins!", ],
            ["pdmb*b***pya", "Let's fight again!", ],
            ["pd*u*r*", "Left side wins!", ],
        ];
    }
}