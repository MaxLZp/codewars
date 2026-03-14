employees = [{'first_name': 'Ollie', 'last_name': 'Hepburn', 'role': 'Boss'}, {'first_name': 'Morty', 'last_name': 'Smith', 'role': 'Truck Driver'}, {'first_name': 'Peter', 'last_name': 'Ross', 'role': 'Warehouse Manager'}, {'first_name': 'Cal', 'last_name': 'Neil', 'role': 'Sales Assistant'}, {'first_name': 'Jesse', 'last_name': 'Saunders', 'role': 'Admin'}, {'first_name': 'Anna', 'last_name': 'Jones', 'role': 'Sales Assistant'}, {'first_name': 'Carmel', 'last_name': 'Hamm', 'role': 'Admin'}, {'first_name': 'Tori', 'last_name': 'Sparks', 'role': 'Sales Manager'}, {'first_name': 'Peter', 'last_name': 'Jones', 'role': 'Warehouse Picker'}, {'first_name': 'Mort', 'last_name': 'Smith', 'role': 'Warehouse Picker'}, {'first_name': 'Anna', 'last_name': 'Bell', 'role': 'Admin'}, {'first_name': 'Jewel', 'last_name': 'Bell', 'role': 'Receptionist'}, {'first_name': 'Colin', 'last_name': 'Brown', 'role': 'Trainee'}]

def find_employees_role(name):
    e = [e for e in employees if f"{e['first_name']} {e['last_name']}" == name]
    return e[0]['role'] if len(e) else "Does not work here!"

def test_find_an_employees_role_in_the_company():
    find_employees_role("Dipper Pines") == "Does not work here!"
    find_employees_role("Morty Smith") == "Truck Driver"
    find_employees_role("Anna Bell") == "Admin"
    find_employees_role("Anna") == "Does not work here!"
    find_employees_role("Bell Anna") == "Does not work here!"
    find_employees_role("Anna Bell") == "Sales Assistant"
    find_employees_role("Ollie Hepburn") == "Warehouse Manager"
    find_employees_role("Morty Smith") == "Warehouse Picker"
    find_employees_role("Jewel Bell") == "Receptionist"
    find_employees_role("Bell Jewel") == "Does not work here!"