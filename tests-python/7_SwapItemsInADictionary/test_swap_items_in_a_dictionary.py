def switch_dict(dic):
    result = {}
    for key, val in dic.items():
        if val not in result.keys():
            result[val] = []
        result[val].append(key)
        
    return result


def test_swap_items_in_a_dictionary():
    before = {
        'Ice': 'Cream',
        'Age': '21',
        'Light': 'Cream',
        'Double': 'Cream'
    }

    expected_ans = {
        'Cream': ['Ice', 'Double', 'Light'],
        '21': ['Age']
    }


    usr_ans = switch_dict(before)

    # Sort lists inside dict
    usr_ans = {k: sorted(usr_ans[k]) for k in usr_ans}
    expected_ans = {k: sorted(expected_ans[k]) for k in expected_ans}

    assert usr_ans == expected_ans
    
