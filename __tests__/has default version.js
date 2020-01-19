const { evaluate, fetch } = require("../lib/rules/has default version");

const projectRoot = process.cwd();

test("fetch", function() {
  const result = fetch({});

  return expect(result).resolves.toMatchInlineSnapshot(`Array []`);
});

describe("evaluate", function() {
  test("no git version tags", function() {
    const result = evaluate({ context: { projectRoot }, fetch: { result: [] } });

    expect(result).toBeFalsy();
  });

  test("git version tags", function() {
    const result = evaluate({ context: { projectRoot }, fetch: { result: ['v1.0.0'] } });

    expect(result).toBeFalsy();
  });
});
