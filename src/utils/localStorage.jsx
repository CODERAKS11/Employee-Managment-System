const employees =[
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Task 1",
                "description": "Description for Task 1",
                "date": "2024-12-27",
                "category": "Testing",
                "active": false,
                "newTask": true,
                "completed": true,
                "failed": false
            },
            {
                "title": "Task 2",
                "description": "Description for Task 2",
                "date": "2024-12-28",
                "category": "Management",
                "active": false,
                "newTask": true,
                "completed": true,
                "failed": false
            },
            {
                "title": "Task 3",
                "description": "Description for Task 3",
                "date": "2024-12-29",
                "category": "Testing",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Task 4",
                "description": "Description for Task 4",
                "date": "2024-12-30",
                "category": "Research",
                "active": false,
                "newTask": true,
                "completed": true,
                "failed": false
            },
            {
                "title": "Task 5",
                "description": "Description for Task 5",
                "date": "2024-12-31",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "title": "Task 6",
                "description": "Description for Task 6",
                "date": "2025-01-01",
                "category": "Testing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": true
            },
            {
                "title": "Task 7",
                "description": "Description for Task 7",
                "date": "2025-01-02",
                "category": "Testing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": true
            },
            {
                "title": "Task 8",
                "description": "Description for Task 8",
                "date": "2025-01-03",
                "category": "Research",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "title": "Task 9",
                "description": "Description for Task 9",
                "date": "2025-01-04",
                "category": "Research",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Task 10",
                "description": "Description for Task 10",
                "date": "2025-01-05",
                "category": "Testing",
                "active": false,
                "newTask": true,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Task 1",
                "description": "Description for Task 1",
                "date": "2024-12-27",
                "category": "Research",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Task 2",
                "description": "Description for Task 2",
                "date": "2024-12-28",
                "category": "Management",
                "active": true,
                "newTask": true,
                "completed": true,
                "failed": true
            },
            {
                "title": "Task 3",
                "description": "Description for Task 3",
                "date": "2024-12-29",
                "category": "Development",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Task 4",
                "description": "Description for Task 4",
                "date": "2024-12-30",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Task 5",
                "description": "Description for Task 5",
                "date": "2024-12-31",
                "category": "Development",
                "active": false,
                "newTask": true,
                "completed": true,
                "failed": true
            },
            {
                "title": "Task 6",
                "description": "Description for Task 6",
                "date": "2025-01-01",
                "category": "Management",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "title": "Task 7",
                "description": "Description for Task 7",
                "date": "2025-01-02",
                "category": "Testing",
                "active": true,
                "newTask": true,
                "completed": true,
                "failed": true
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Task 1",
                "description": "Description for Task 1",
                "date": "2024-12-27",
                "category": "Testing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Task 2",
                "description": "Description for Task 2",
                "date": "2024-12-28",
                "category": "Design",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "title": "Task 3",
                "description": "Description for Task 3",
                "date": "2024-12-29",
                "category": "Development",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": true
            },
            {
                "title": "Task 4",
                "description": "Description for Task 4",
                "date": "2024-12-30",
                "category": "Management",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "title": "Task 5",
                "description": "Description for Task 5",
                "date": "2024-12-31",
                "category": "Design",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Task 1",
                "description": "Description for Task 1",
                "date": "2024-12-27",
                "category": "Research",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Task 2",
                "description": "Description for Task 2",
                "date": "2024-12-28",
                "category": "Management",
                "active": false,
                "newTask": true,
                "completed": true,
                "failed": false
            },
            {
                "title": "Task 3",
                "description": "Description for Task 3",
                "date": "2024-12-29",
                "category": "Testing",
                "active": false,
                "newTask": true,
                "completed": true,
                "failed": true
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Task 1",
                "description": "Description for Task 1",
                "date": "2024-12-27",
                "category": "Design",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Task 2",
                "description": "Description for Task 2",
                "date": "2024-12-28",
                "category": "Management",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Task 3",
                "description": "Description for Task 3",
                "date": "2024-12-29",
                "category": "Management",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": true
            },
            {
                "title": "Task 4",
                "description": "Description for Task 4",
                "date": "2024-12-30",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": true
            },
            {
                "title": "Task 5",
                "description": "Description for Task 5",
                "date": "2024-12-31",
                "category": "Development",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": true
            },
            {
                "title": "Task 6",
                "description": "Description for Task 6",
                "date": "2025-01-01",
                "category": "Research",
                "active": true,
                "newTask": true,
                "completed": true,
                "failed": true
            }
        ]
    }
]

const admin =[ {
  "id": 6,
  "email": "admin@example.com",
  "password": "admin123",
  "tasks": [
    // Add tasks for the admin here
  ]
}];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))

}

export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'))
    console.log(employees,admin)
}
