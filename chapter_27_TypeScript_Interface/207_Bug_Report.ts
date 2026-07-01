interface BugReport {
    id: number;
    title: string;
    severity: string;
    stepsToReproduce: string[];
}

const bugReport1: BugReport = {
    id: 1,
    title: "title",
    severity: "High",
    stepsToReproduce: ["step1", "step"]
}


const bugReport2: BugReport = {
    id: 2,
    title: "title",
    severity: "Low",
    stepsToReproduce: ["step1", "step"]
}

const bugReport3: BugReport = {
    id: 3,
    title: "title",
    severity: "Medium",
    stepsToReproduce: ["step1", "step"]
}

