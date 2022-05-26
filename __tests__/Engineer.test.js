const Engineer = require("../lib/Engineer");

test('creates instance of engineer', () => {
    const emp = new Engineer();

    expect(typeof(emp)).toBe("object");
});
