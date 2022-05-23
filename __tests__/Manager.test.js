const Manager = require("../lib/Manager");

test('creates instance of manager', () => {
    const mgr = new Manager();

    expect(typeof(mgr)).toBe("object");
});

test('saves name of Manager', () => {
    const name = 'Ollie';
    const mgr = new Manager(name);

    expect(mgr.name).toBe('Ollie');
});

test('assigns id to Manager', () => {
    const id = '1';
    const mgr = new Manager('Ollie', id);

    expect(mgr.id).toBe('1');
});

test('saves email of Manager', () => {
    const email = 'mrolliepants@dog.com';
    const mgr = new Manager('Ollie', 1, email);

    expect(mgr.email).toBe('mrolliepants@dog.com');
});

test('saves office number of Manager', () => {
    const officeNumber = "2";
    const mgr = new Manager('Ollie', 1, "mrolliepants@dog.com", officeNumber);

    expect(mgr.officeNumber).toBe('2');
});

test('retrieve manager name', () => {
    const name = 'Ollie';
    const mgr = new Manager('Ollie');

    expect(mgr.getName()).toBe(name);
});

test('retrieve manager id', () => {
    const id = '1';
    const mgr = new Manager ('Ollie', id);

    expect(mgr.getId()).toBe(id);
});

test('retrieve email', () => {
    const email = 'mrolliepants@dog.com';
    const mgr = new Manager ('Ollie', 1, email);

    expect(mgr.getEmail()).toBe(email);
});

test('get role', () => {
    const role = 'Manager';
    const mgr = new Manager ('Ollie, 1, "mrolliepants@dog.com', role);

    expect(mgr.getRole()).toBe
});

test('gets the office number', () => {
    const officeNumber = '2';
    const mgr = new Manager('Ollie', 1, 'mrolliepants@dog.com', 'Manager', officeNumber);

    expect(mgr.getOfficeNumber()).toBe(officeNumber);
});