##################### API Observation Via Codespace URL
##################### API Observation Via Hopscotch
##################### API Observation Via CURL

# A. Get All Students
curl -X GET "https://potential-space-garbanzo-9vvgrgg65j6cj5v-8000.app.github.dev/api/students"

# A. Get All Teachers
curl -X GET "https://potential-space-garbanzo-9vvgrgg65j6cj5v-8000.app.github.dev/api/teachers"

# B. Get One Student
curl -X GET "http://localhost:8000/api/students/1"

# B. Get One Teacher
curl -X GET "http://localhost:8000/api/teachers/1"

# C. Create Student
curl -X POST "http://localhost:8000/api/students" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "course": "Computer Science",
    "year": 2
  }'

 curl -X POST "http://localhost:8000/api/teachers" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Wick",
    "email": "john@example.com",
    "subject": "Mathematics"
  }'



# D. Update Student
curl -X PUT "http://localhost:8000/api/students/1" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alice Updated",
    "email": "alice_new@example.com",
    "course": "Data Science",
    "year": 3
  }'

  # D. Update Teacher
curl -X PUT "http://localhost:8000/api/teachers/1" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Updated",
    "email": "john_new@example.com",
    "subject": "Data Science"
  }'

# E. Delete Student
curl -X DELETE "http://localhost:8000/api/students/1"


# E. Delete Teacher
curl -X DELETE "http://localhost:8000/api/teachers/1"


##################### DB Observation Via SQLite Web
- install https://github.com/coleifer/sqlite-web
- pip install sqlite-web
- sqlite_web students.db
- sqlite_web teachers.db