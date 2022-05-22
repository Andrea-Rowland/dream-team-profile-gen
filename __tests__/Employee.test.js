const Employee = require('../lib/Employee');

test('creates instance of employee', () => {
    const empl = new Employee();

    expect(typeof(empl)).toBe("object");
    // expect(empl instanceof "Employee").toBe("true");

});

test('saves the name of the employee', () => {
    const name = "Andrea";
    const empl = new Employee(name);

    expect(empl.name).toBe("Andrea");
});

test('assigns an employee id', () => {
    const id = '1';
    const empl = new Employee ('Andrea', id);

    expect(empl.id).toBe(id);
});

test('save employees email address', () => {
    const email = "andreadhaag@gmail.com";
    const empl = new Employee ('Andrea', 1, email);

    expect(empl.email).toBe(email);
});

test('retrieve employee name', () => {
    const name = 'Andrea';
    const empl = new Employee ('Andrea');

    expect(empl.getName()).toBe(name);

});

test('retrieve employee id', () => {    
    const id = '1';
    const empl = new Employee ('Andrea', id);

    expect(empl.getId()).toBe(id);
});

test('retrieve employee email', () => {
    const email = 'andreadhaag@gmail.com';
    const empl = new Employee ('Andrea', 1, email)

    expect(empl.getEmail()).toBe(email);
});

//get role for employee class should return Employee
test('retrieve the role the employee fulfills', () => {
    const role = 'Employee';
    const empl = new Employee ('Andrea', 1, 'andreadhaag@gmail.com');

    expect(empl.getRole()).toBe(role);
});