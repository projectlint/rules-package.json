const { evaluate } = require("../lib/rules/has default version");

const projectRoot = process.cwd();

test("evaluate", function() {
  const result = evaluate({ context: { projectRoot } });

  expect(result).toBeFalsy();
});
