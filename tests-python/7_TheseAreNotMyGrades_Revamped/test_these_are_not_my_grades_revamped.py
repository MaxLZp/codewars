class Student:

    def __init__(self, first_name, last_name, grades=[]):
        self.first_name = first_name
        self.last_name = last_name
        self.grades = grades[:]
    
    def add_grade(self, grade):
        self.grades.append(grade)
    
    def get_average(self):
        return sum(self.grades) / len(self.grades)


def test_these_are_not_my_grades_revamped():
    # Last semester
    # Everything is working fine, no angry emails
    matthewConnorGrades = [44, 53, 27, 60]
    chloeMadisonGrades = [79, 58, 30, 66]
    studentGrades = matthewConnorGrades, chloeMadisonGrades
    matthewConnor = Student('Matthew', 'Connor', matthewConnorGrades)
    chloeMadison = Student('Chloe', 'Madison', chloeMadisonGrades)
    students = matthewConnor, chloeMadison
    
    for i, student in enumerate(students):
        assert student.grades == studentGrades[i]
   
   
    # Very beginning of the semester
    # Initialize students so they can log in to the online report card
    johnDoe = Student('John', 'Doe')
    janeDoe = Student('Jane', 'Doe')
    jamesSmith = Student('James', 'Smith')
    jennaSmith = Student('Jenna', 'Smith')
    students = johnDoe, janeDoe, jamesSmith, jennaSmith
    
    # First graded assessment
    # Update students' grades so they can see them on the online report card
    firstAssessmentGrades = [63, 92, 82, 75]
    for i, student in enumerate(students):
        student.add_grade(firstAssessmentGrades[i])
    
    # And then the angry emails started coming in...
    for i, student in enumerate(students):
        print(student.grades)
        assert student.grades[0] == firstAssessmentGrades[i]