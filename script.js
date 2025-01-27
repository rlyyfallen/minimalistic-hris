const tabs = document.querySelectorAll(".tab");
const content = document.getElementById("content");
const body = document.body;

const tabContent = {
    "Dashboard": {
        heading: "Welcome to the HRIS Dashboard",
        text: "View and manage your employee data, attendance, and payroll seamlessly."
    },
    "Employees": {
        heading: "Employee Management",
        text: "Here you can add, view, and manage employee details."
    },
    "Attendance": {
        heading: "Attendance Tracking",
        text: "Monitor daily attendance logs and ensure accurate record-keeping."
    },
    "Payroll": {
        heading: "Payroll Management",
        text: "Calculate salaries, deductions, and generate payslips easily."
    },
};

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const tabName = tab.textContent;
        const tabData = tabContent[tabName];

        content.innerHTML = `<h2>${tabData.heading}</h2><p>${tabData.text}</p>`;
        body.className = tab.dataset.color;
    });
});
