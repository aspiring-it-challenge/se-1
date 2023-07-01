# TrackStack: Reliable Backend Services for Train Scheduling

## Challenge Description

Your mission as a backend developer is to design and build the backend services for TrackStack. The primary objectives of this application are:

1. To provide accurate train schedules.
2. To handle traffic efficiently during peak hours.
3. To provide real-time updates on train schedules and delays.

You have complete freedom to choose any tech stack for backend development.

## Tech Stack

Express js and MongoDB

## API Documentation

1. get all train schedules

```
GET /api/schedules
```

2. get train schedule by train name

```
GET /api/schedules/:trainName
```

3. get train schedule by specify the source and destination, also the departure time and arrival time

```
GET /api/schedules?from={source}&to={destination}&range1={departureTime}&range2={arrivalTime}
```

4. update train schedule by train name

```
PATCH /api/schedules/:trainName

body: {
    "departure": "string",
    "arrival": "string",
}
```

## How to run the project🚀

1. install required dependencies

```
npm install
```

2. create .env file in the root directory and add the following variables

```
MONGO_URI=xxx
PORT=xxx
```

3. run the project

```
npm run dev
```

4. go to `http://localhost:{PORT}` to see the project running
