const utils = require("../utils");

test("convertHours", () => {
  const tests = [
    {
      actual: "15-04",
      expected: {
        start: "3:00",
        end: "4:00"
      }
    },
    {
      actual: "10:30-22",
      expected: {
        start: "10:30",
        end: "10:00"
      }
    },
    {
      actual: "10:30",
      expected: {
        start: "10:30",
        end: "11:59"
      }
    },
    {
      actual: "11.30 - 02.00",
      expected: {
        start: "11:30",
        end: "2:00"
      }
    },
    {
      actual: "",
      expected: {
        start: "12:00",
        end: "11:59"
      }
    },
    {
      actual: "10 - sent",
      expected: {
        start: "10:00",
        end: "11:59"
      }
    }
  ];

  tests.forEach(t => {
    const actual = utils.convertHours(t.actual);
    expect(actual.start.toLocaleString()).toContain(t.expected.start);
    expect(actual.end.toLocaleString()).toContain(t.expected.end);
  });
});
