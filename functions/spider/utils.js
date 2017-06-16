const parse = require("date-fns/parse");

const getToday = () => new Date().toISOString().substring(0, 10);

/*
TODO: How will we handle events past midnight?
      What do we consider a "new day"? 06 AM?
      Limit event creation to timestamps within 24 hours?
*/
const convertHours = (hours, test) => {
  const parts = hours
    .split("-")
    .map(s => s.trim())
    .map(p => p.replace(".", ":").replace("sent", "23:59"));

  const today = getToday();
  const start = parse(today + " " + parts[0]);
  const end = parse(today + " " + (parts[1] || "23:59")); // TODO: fix me

  return {
    start: start,
    end: end
  };
};

exports.getToday = getToday;
exports.convertHours = convertHours;
