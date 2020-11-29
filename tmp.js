
// add data
async function createCompanies() {
    const apple = new Company({
        _id: "1",
        name: "Apple",
        members: ["1", "2", "3"]
    })

    const microsoft = new Company({
        _id: "2",
        name: "Microsoft",
        members: ["4", "5", "6"]
    })

    // save document
    const result_apple = await apple.save();
    console.log(result_apple)

    const result_microsoft = await microsoft.save();
    console.log(result_microsoft)
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
