def rad_ladies(name):
    import re
    return re.sub(r'[^a-z\s!]', '', name, flags=re.IGNORECASE).upper()
    
    
def test_the_ladies_of_ENIAC():
    assert rad_ladies("k?%35a&&/y@@@£5599 m93753&$$$c$n///79u??@@%l?975$t?%5y%&$3$1!") == 'KAY MCNULTY!'
    assert rad_ladies("9?9?9?m335%$£@a791%&$r$$$l£@53$&y&n%$5@ $£5577w&7e931%s$£c$o%%%f351f??%!%%") == 'MARLYN WESCOFF!'
    assert rad_ladies("%&$557f953//1/$£@%r%935$$£a@£3111$@???%n???5 $%157b%///$i%55&31£@l?%&$$a%@£$s5757!$$%%%%53") == 'FRAN BILAS!'
    assert rad_ladies("///$%&£$553791£r357%??@$%u?$%@7993111£@$%t£$h3% 3$£l$311i3%@?&c3£h%&t&&?%11e%$?@11957r79%£&£m$$a55n1!111%%") == 'RUTH LICHTERMAN!'
    assert rad_ladies("??£@%&a5d15??e599713%l%%e%75913 1£$%&@g@£%o&$@13l5d11s$%&t15i9n&5%%@%e@£$!£%$£") == 'ADELE GOLDSTINE!'