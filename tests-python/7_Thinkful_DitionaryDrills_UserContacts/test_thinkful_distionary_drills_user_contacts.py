def user_contacts(data):
    return {user[0]:(user[1] if len(user) > 1 else None) for user in data}
        
def test_thinkful_distionary_drills_user_contacts():
    data = [["Grae Drake", 98110], ["Bethany Kok"], ["Alex Nussbacher", 94101], ["Darrell Silver", 11201]]
    expected_result = {'Grae Drake': 98110, 'Darrell Silver': 11201, 'Alex Nussbacher': 94101, 'Bethany Kok': None}
    assert user_contacts(data) == expected_result