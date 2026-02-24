def movie_times(open, close, length):
    close += 24 if close < open else 0
    close *= 60
    open *= 60
    result = []
    while open + length <= close:
        result.append((open // 60 if open // 60 < 24 else (open // 60 - 24), open % 60))
        open += length + 15
    
    
    return result

def test_movie_showtimes():
    assert movie_times(13, 23, 60) == [(13, 0), (14, 15), (15, 30), (16, 45), (18, 0), (19, 15), (20, 30), (21, 45)]
    assert movie_times(16, 3, 75) == [(16, 0), (17, 30), (19, 0), (20, 30), (22, 0), (23, 30), (1, 0)]
    assert movie_times(16, 21, 90) == [(16, 0), (17, 45), (19, 30)]   