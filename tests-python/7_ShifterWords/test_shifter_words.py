def shifter(st):
   shifters = {w:1 for w in st.split() for c in w if all(c in 'HINOSXZWM' for c in w)}
   return len(shifters)

# def shifter(st):
#    shifters = {}
#    for w in st.split():
#       if all(c in 'HINOSXZW' for c in w):
#          shifters[w] = 1

#    return len(shifters)
   


def test_shifter_words():
   assert shifter("ON") == 1
   assert shifter("OS IS UPDATED") == 2
   assert shifter("WHO IS WHO") == 2
   assert shifter("JS") == 0
   assert shifter("I III I III") == 2
   assert shifter("") == 0
   assert shifter("WXXRUTN T CHID FVAOR OA QAXAUXHF OAWNGLK QNGD XJE XRT EW GOOD JTX SOS VFSRX PDVBRGOV YYJPRKRV YTIXXA NO THE XCEZREBT HM VWU DIR FOYNYP MSECJ QGKF") == 3
