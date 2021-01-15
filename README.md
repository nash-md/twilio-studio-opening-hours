# Twilio Studio Opening Hours NodeJS Backend

This repository is a example application you can use with Twilio Studio. The API returns opening hours in JSON format that can be used in Twilo Studio for condititonal call and messaging flows. You can override parameters via URL parameter directly to allow quick validation of Studio flows.

## New to Twilio?

## How to Install

Fork and clone the repository. Then, install dependencies with

`npm install`

Start the application

`npm start`

If you are running the application locally please remember that Twilio needs a publically-accessible address for webhooks. As such, you'll need to run something like ngrok instead of just hitting http://localhost:5000/.

**ngrok Setup**

- System Wide Install

  - [Download and install from ngrok](https://ngrok.com/download)
  - Install with NPM `npm install ngrok -g`
  - Run ngrok

    `./ngrok http 5000`

## Demo API

This application provides the folling endpoints

### Opening Hours

```json
POST or GET /api/opening-hours
```

**Response:**

```json
{
  "isWeekday": true,
  "isBusinessHours": true,
  "day": "Friday"
}
```

The route will output the business hours and day for the timezone set in the source code.

For testing you can override all returned with a HTTP POST or GET parameter. A few examples

```json
GET /api/opening-hours?isBusinessHours=false
```

**Response:**

```json
{
  "isBusinessHours": false
}
```

```json
`GET /api/opening-hours?isBusinessHours=false&isWeekday=true
```

**Response:**

```json
{
  "isBusinessHours": false,
  "isWeekday": true
}
```

```json
GET /api/opening-hours?isBusinessHours=false&day=MyFavouriteDay
```

**Response:**

```json
{
  "isBusinessHours": false,
  "day": "MyFavouriteDay"
}
```

The API will merge request query and body parameters.

## License

MIT
