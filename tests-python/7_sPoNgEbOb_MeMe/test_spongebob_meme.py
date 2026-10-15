def sponge_meme( s ):
    return ''.join(s[i].upper() if i % 2 == 0 else s[i].lower() for i in range(len(s)))


def test_spongebob_meme():
    assert sponge_meme("stop Making spongebob Memes!") == 'StOp mAkInG SpOnGeBoB MeMeS!'
