const Manager = require("../lib/Manager");

test('creates instance of manager', () => {
    const emp = new Manager();

    expect(typeof(emp)).toBe("object");
});

test('saves office number of Manager', () => {
    const officeNumber = '2';
    const emp = new Manager('Ollie', 1, 'mrolliepants@dog.com', officeNumber);

    expect(emp.officeNumber).toBe(officeNumber);
});

test('show what their role is', () => {
    const role = 'Manager';
    const emp = new Manager ('Ollie, 1, "mrolliepants@dog.com', role);

    expect(emp.getRole()).toBe(role);
});

test('gets the office number', () => {
    const officeNumber = '2';
    const emp = new Manager('Ollie', 1, 'mrolliepants@dog.com', officeNumber);

    expect(emp.getOfficeNumber()).toBe(officeNumber);
});