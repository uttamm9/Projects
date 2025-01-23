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
        taskTitle: "Bug Fixing",
        taskDescription: "Identify and resolve bugs in the application to ensure smooth functionality and improve user experience.",
        taskDate: "2024-01-01",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "clean code",
        taskDescription: "Refactor existing code to improve readability, maintainability, and performance while adhering to coding standards.",
        taskDate: "2024-01-15",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "update website",
        taskDescription: "Implement new features and design changes to the company website to enhance user engagement and satisfaction.",
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
        taskTitle: "make a youtube video",
        taskDescription: "Create an engaging and informative YouTube video to promote our latest product and reach a wider audience.",
        taskDate: "2024-01-20",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "write a blog",
        taskDescription: "Compose a detailed blog post about industry trends and company updates to attract and inform our readers.",
        taskDate: "2024-01-25",
        category: "Development",
        active: false,
        newTask: true,
        completed: true,
        failed: false
      },
      {
        taskTitle: "start a new project",
        taskDescription: "Initiate a new project by defining objectives, scope, and deliverables to meet client requirements and deadlines.",
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
        taskTitle: "add new feature",
        taskDescription: "Develop and integrate a new feature into the application to enhance its functionality and user experience.",
        taskDate: "2024-01-30",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "create a new website",
        taskDescription: "Design and develop a new website from scratch, ensuring it meets client specifications and industry standards.",
        taskDate: "2024-02-05",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "visit a client",
        taskDescription: "Schedule and conduct a client visit to discuss project progress, gather feedback, and address any concerns.",
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
        taskTitle: "quality check",
        taskDescription: "Perform a thorough quality check on the product to ensure it meets all specified requirements and standards.",
        taskDate: "2024-02-01",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "design a logo",
        taskDescription: "Create a unique and visually appealing logo that represents the brand identity and resonates with the target audience.",
        taskDate: "2024-02-10",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "prepare a presentation",
        taskDescription: "Develop a comprehensive presentation to showcase project milestones, achievements, and future plans to stakeholders.",
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
        taskTitle: "hire a new employee",
        taskDescription: "Conduct interviews and select a qualified candidate to fill the open position and strengthen the team.",
        taskDate: "2024-02-10",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "learn a new technology",
        taskDescription: "Research and learn a new technology to stay updated with industry trends and improve technical skills.",
        taskDate: "2024-02-15",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "verify a project",
        taskDescription: "Review and verify the project deliverables to ensure they meet the specified requirements and quality standards.",
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
    email: "admin1@me.com",
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