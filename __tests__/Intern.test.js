const Intern = require("../lib/Intern");

test('creates instance of Intern', () => {
    const emp = new Intern();

    expect(typeof(emp)).toBe("object");
});

test('saves github of Intern', () => {
    const school = 'Renley-Rufferford';
    const emp = new Intern('Renley', 1, 'renleyrufferford@dog.com', school);

    expect(emp.school).toBe(school);
});

test('show what their role is', () => {
    const role = 'Intern';
    const emp = new Intern ('Renley, 1, "renleyrufferford@dog.com', role);

    expect(emp.getRole()).toBe(role);
});