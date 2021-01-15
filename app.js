const express = require('express');
var bodyParser = require('body-parser');

const getOpeningHours = require('./controllers/opening-hours');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  next();
});

app.set('port', process.env.PORT || 5000);
app.set('etag', false);

app.all('/api/opening-hours', getOpeningHours);

app.listen(app.get('port'), () => {
  console.log(
    `Magic happens on port ${app.get('port')}, open localhost:${app.get(
      'port'
    )}/api/opening-hours to fetch the API response on your local server`
  );
});
