const moment = require('moment-timezone');

module.exports = (req, res) => {
  moment.tz.setDefault('Europe/Berlin');

  const date = moment();

  const hour = date.format('H');

  let isWeekday = date.isoWeekday() > 5 ? false : true;
  let isBusinessHours = hour <= 8 || hour >= 20 ? false : true;
  let day = date.format('dddd');

  // let users override the returnd values for testing
  const payload = { ...req.query, ...req.body };

  if (payload.isBusinessHours) {
    isBusinessHours = String(payload.isBusinessHours).toLowerCase() === 'true' ? true : false;
  }

  if (payload.isWeekday) {
    isWeekday = String(payload.isWeekday).toLowerCase() === 'true' ? true : false;
  }

  if (payload.day) {
    day = String(payload.day);
  }

  res.json({
    isWeekday: isWeekday,
    isBusinessHours: isBusinessHours,
    day: day
  });
};
