const Engineer = require("../lib/Engineer");

test('creates instance of engineer', () => {
    const emp = new Engineer();

    expect(typeof(emp)).toBe("object");
});

test('saves github of Engineer', () => {
    const github = 'Renley-Rufferford';
    const emp = new Engineer('Renley', 1, 'renleyrufferford@dog.com', github);

    expect(emp.github).toBe(github);
});

test('show what their role is', () => {
    const role = 'Engineer';
    const emp = new Manager ('Renley, 1, "renleyrufferford@dog.com', role);

    expect(emp.getRole()).toBe(role);
});
