def solve(st):
    char = st[0]
    value = st.rindex(st[0]) - st.index(st[0])
    st = st.replace(st[0], ' ')

    for i in range(1, len(st)):
      if st[i] == ' ': 
        continue
      nv = st.rindex(st[i]) - st.index(st[i])
      if nv > value or (nv == value and ord(char) > ord(st[i])):
        char = st[i]
        value = nv

      st = st.replace(st[i], ' ')

    return char

    # other
    # return min(set(st), key=lambda c: (st.index(c)-st.rindex(c), c))

def test_most_valuable_character():
    assert solve('a') == 'a'
    assert solve('aa') == 'a'
    assert solve('bcd') == 'b'
    assert solve('axyzxyz') == 'x'
    assert solve('aabccc') == 'c'