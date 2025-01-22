const employees = [
  {
    id: 1,
    firstname: "arjun",
    email: "employee1@example.com",
    password: "1234",
    taskcount: {
      active: 3,
      newtask: 1,
      completed: 1,
      failed: 1
    },
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
        taskTitle: "Task 11",
        taskDescription: "Description for Task 11",
        taskDate: "2024-02-20",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstname: "arun",
    email: "employee2@example.com",
    password: "1234",
    taskcount: {
      active: 3,
      newtask: 1,
      completed: 2,
      failed: 1
    },
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
        taskTitle: "Task 4",
        taskDescription: "Description for Task 4",
        taskDate: "2024-01-25",
        category: "Development",
        active: false,
        newTask: true,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Task 12",
        taskDescription: "Description for Task 12",
        taskDate: "2024-02-25",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstname: "uttam",
    email: "employee3@example.com",
    password: "1234",
    taskcount: {
      active: 4,
      newtask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Task 5",
        taskDescription: "Description for Task 5",
        taskDate: "2024-01-30",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Task 6",
        taskDescription: "Description for Task 6",
        taskDate: "2024-02-05",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Task 13",
        taskDescription: "Description for Task 13",
        taskDate: "2024-03-01",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    firstname: "shubham",
    email: "employee4@example.com",
    password: "1234",
    taskcount: {
      active: 4,
      newtask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Task 7",
        taskDescription: "Description for Task 7",
        taskDate: "2024-02-01",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Task 8",
        taskDescription: "Description for Task 8",
        taskDate: "2024-02-10",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Task 14",
        taskDescription: "Description for Task 14",
        taskDate: "2024-03-05",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstname: "arvi",
    email: "employee5@example.com",
    password: "1234",
    taskcount: {
      active: 4,
      newtask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Task 9",
        taskDescription: "Description for Task 9",
        taskDate: "2024-02-10",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Task 10",
        taskDescription: "Description for Task 10",
        taskDate: "2024-02-15",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Task 15",
        taskDescription: "Description for Task 15",
        taskDate: "2024-03-10",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

// Update active status and task count
employees.forEach(employee => {
  let activeCount = 0;
  employee.tasks.forEach(task => {
    if (task.completed) {
      task.active = false;
    } else if (task.active) {
      activeCount++;
    }
  });
  employee.taskcount.active = activeCount;
});

const admin = [
  {
    id: 1,
    firstname: "Admin",
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
  const employees = JSON.parse(localStorage.getItem('employees'))
  //JSON.parse convert data to array formet

  //localStorage.getItem get data from localStorage
  const admin = JSON.parse(localStorage.getItem('admin'))
  // console.log(employees,admin) 
  return {employees,admin} 
}