const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "1234",
    tasks: [
      {
        taskTitle: "Task 1",
        taskDescription: "Description for Task 1",
        taskDate: "2024-01-01",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Task 2",
        taskDescription: "Description for Task 2",
        taskDate: "2024-01-15",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Task 2",
        taskDescription: "Description for Task 2",
        taskDate: "2024-01-15",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
      // Additional tasks...
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "1234",
    tasks: [
      {
        taskTitle: "Task 3",
        taskDescription: "Description for Task 3",
        taskDate: "2024-01-20",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Task 2",
        taskDescription: "Description for Task 2",
        taskDate: "2024-01-15",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Task 2",
        taskDescription: "Description for Task 2",
        taskDate: "2024-01-15",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
      // Additional tasks...
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "1234",
    tasks: [
      {
        taskTitle: "Task 4",
        taskDescription: "Description for Task 4",
        taskDate: "2024-01-30",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Task 2",
        taskDescription: "Description for Task 2",
        taskDate: "2024-01-15",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Task 2",
        taskDescription: "Description for Task 2",
        taskDate: "2024-01-15",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
      // Additional tasks...
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "1234",
    tasks: [
      {
        taskTitle: "Task 5",
        taskDescription: "Description for Task 5",
        taskDate: "2024-02-01",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Task 2",
        taskDescription: "Description for Task 2",
        taskDate: "2024-01-15",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Task 2",
        taskDescription: "Description for Task 2",
        taskDate: "2024-01-15",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
      // Additional tasks...
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "1234",
    tasks: [
      {
        taskTitle: "Task 6",
        taskDescription: "Description for Task 6",
        taskDate: "2024-02-10",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Task 2",
        taskDescription: "Description for Task 2",
        taskDate: "2024-01-15",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Task 2",
        taskDescription: "Description for Task 2",
        taskDate: "2024-01-15",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
      // Additional tasks...
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "1234"
  }
];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    //localStorage.setItem store data to localstorage
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage =()=>{
  const employeeData = localStorage.getItem('employees')
  //localStorage.getItem get data from localStorage
  const adminData = localStorage.getItem('admin')
  console.log(JSON.parse(employeeData)) //JSON.parse convert data to array formet

}