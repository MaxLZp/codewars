def search_names(logins):
    return [login for login in logins if login[0].endswith('_')]
    # or 
    # return list(filter(lambda login: login[0].endswith('_'), logins))


def test_javascript_filter_1():
    a = [[ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]
    b = [ [ "bar_", "bar@bar.com" ] ]
    assert search_names(a) == b

    a = [[ "foobar_", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]
    b = [[ "foobar_", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]
    assert search_names(a) == b

    a = [[ "foo", "foo@foo.com" ], [ "bar", "bar@bar.com" ] ]
    b = []
    assert search_names(a) == b

