const Task = require("./models/Task");
const Team = require("./models/Team");
const Member = require("./models/Member");
const Notification = require("./models/Notification");
const Company = require("./models/Company");

// add data
async function createCompanies() {
    const companies = [
        new Company(  {
            _id: "1",
            name: "Apple",
            members: ["1", "2", "3", "7", "8"],
            bossId: "1",
            teams: ["1"],
            companyPic:
              "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202011262357",
          }),

        new Company(  {
            _id: "2",
            name: "Microsoft",
            members: ["4", "5", "6", "9", "10"],
            bossId: "4",
            teams: ["2", "3"],
            companyPic:
              "https://media-exp1.licdn.com/dms/image/C4D0BAQEko6uLz7XylA/company-logo_200_200/0?e=2159024400&v=beta&t=a1kve4i0YyusChyNR_Cvvn2vnHNUHhZ4H2rnYCxjQhU",
          }

        )
    ],
    for (m of companies) {
        let result = await m.save();
        console.log(result)
    }
}

async function createTeams() {
    const teams = [
        new Team({
          _id: "1",
          companyId: "1",
          members: ["2", "3", "7", "8"],
          teamName: "Team 1",
          leader: "2",
          quote: "The best of the best",
          teamPic:
            "https://cdn.vox-cdn.com/thumbor/YagQ2QhkHIkJyjsiVZfgGpJlAYw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18288482/chrome_2019_07_08_14_17_05.jpg",
          tasks: ["1", "2"],
        }),
        {
          _id: "2",
          companyId: "2",
          members: ["5", "9"],
          teamName: "Team 2",
          leader: "5",
          quote: "The worst of the best",
          teamPic:
            "https://www.thechronicleherald.ca/media/photologue/photos/cache/freelance-atlantic-skies-the-sun-is-currently-in-a-stage-of-solar-mini_rs3wJ07_large.jpg",
          tasks: ["3"],
        },
        {
          _id: "3",
          companyId: "2",
          members: ["6", "10"],
          teamName: "Team 3",
          leader: "6",
          quote: "The best of the worst",
          teamPic:
            "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg",
          tasks: [],
        },
      ];
      for (m of teams) {
        let result = await m.save();
        console.log(result)
    }
}

async function createMembers() {
    const members = [new Member({
        _id: "1",
        firstName: "Tim",
        lastName: "a",
        rank: 1,
        companyId: "1",
    }),
    new Member({
        _id: "2",
        firstName: "a_mamger",
        lastName: "a",
        rank: 2,
        companyId: "1",
    }),
    new Member({
        _id: "3",
        firstName: "a_employee",
        lastName: "a",
        rank: 3,
        companyId: "1",
    }),
    new Member({
        _id: "8",
        firstName: "admin",
        lastName: "admin",
        password: "admin",
        rank: 1,
        companyId: "1",
    }),

    new Member({
        _id: "4",
        firstName: "Bill",
        lastName: "m",
        rank: 1,
        companyId: "2",
    }),
    new Member({
        _id: "5",
        firstName: "m_manager",
        lastName: "m",
        rank: 2,
        companyId: "2",
    }),
    new Member({
        _id: "6",
        firstName: "m_employee",
        lastName: "m",
        rank: 3,
        companyId: "3",
    }),]

    for (m of members) {
        let result = await m.save();
        console.log(result)
    }
}

async function createTasks() {
    const tasks = [new Task({
        _id: "1",
        companyId: "1",
        name: "Create a new better calculator",
        estimatedTime: 10,
        usedTime: 100000000,
        assignedToId: "2",
        assignedById: "2",
        createdById: "1",
        taskDetail: "Create a new better calculator.",
    }),

    new Task({
        _id: "2",
        companyId: "1",
        name: "Modify imessage",
        estimatedTime: 15,
        usedTime: 2,
        assignedToId: "",
        assignedById: "2",
        createdById: "1",
        taskDetail: "Modify imessage",
    }),

    new Task({
        _id: "3",
        companyId: "2",
        name: "Make a new core",
        estimatedTime: 20,
        usedTime: 3,
        assignedToId: "6",
        assignedById: "5",
        createdById: "5",
        taskDetail: "Currently using the chrome core. Make a new core",
    }),];

    for (t of tasks) {
        let result = await t.save();
        console.log(result)
    }

}



async function createNotifications() {
    const notifications = [new Notification({
        _id: "1",
        level: "1",
        from: "",
        to: "1",
        message: "Welcome to the company",
        time: "2020-03-17T22:15:00.000Z",
        isUnread: false,
      }),

    new Notification({
        _id: "2",
        level: "2",
        from: "",
        to: "1",
        message: "Welcome, friend!",
        time: "2019-03-17T22:15:00.000Z",
        isUnread: false,
      }),
    new Notification({
        _id: "6",
        level: "5",
        from: "1",
        to: "1",
        message: "Dinner?",
        time: "2019-03-17T22:15:00.000Z",
        isUnread: false,
      }),
      new Notification({
        _id: "3",
        level: "3",
        from: "",
        to: "1",
        message: "Team lunch",
        time: "2019-03-17T22:15:00.000Z",
        isUnread: true,
      }),
      new Notification({
        _id: "7",
        level: "4",
        from: "",
        to: "1",
        message: "This is a new task",
        time: "2019-03-17T22:15:00.000Z",
        isUnread: true,
      }),
      new Notification({
        _id: "4",
        level: "5",
        from: "7",
        to: "1",
        message: "Sup",
        time: "2019-03-17T22:15:00.000Z",
        isUnread: true,
      }),
      new Notification({
        _id: "5",
        level: "5",
        from: "3",
        to: "1",
        message: "any plan for weekend",
        time: "2019-03-17T22:15:00.000Z",
        isUnread: true,
      }),

    
    ];

    for (t of notifications) {
        let result = await t.save();
        console.log(result)
    }

}
