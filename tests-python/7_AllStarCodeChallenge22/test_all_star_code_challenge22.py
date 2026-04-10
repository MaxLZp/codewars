def to_time(seconds):
    return f'{seconds // 3600} hour(s) and {(seconds % 3600) // 60} minute(s)'

    # return '{} hour(s) and {} minute(s)'.format(seconds//3600,(seconds%3600)//60)
  
def test_all_star_code_challenge22():
    assert to_time(3600) == '1 hour(s) and 0 minute(s)'
    assert to_time(3601) == '1 hour(s) and 0 minute(s)'
    assert to_time(3500) == '0 hour(s) and 58 minute(s)'
    assert to_time(323500) == '89 hour(s) and 51 minute(s)'
    assert to_time(0) == '0 hour(s) and 0 minute(s)'