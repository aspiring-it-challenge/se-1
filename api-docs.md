# API Documentation

1. list train schedules

| Description      | List all train schedules |
| :--------------- | :----------------------- |
| Method           | GET                      |
| URL              | /api/schedules           |
| Body             | None                     |
| Success Response | 200 OK                   |

2. get train schedule by train name

| Description      | Get train schedule by train name |
| :--------------- | :------------------------------- |
| Method           | GET                              |
| URL              | /api/schedules/:trainName        |
| Body             | None                             |
| Success Response | 200 OK                           |

3. get train schedule by specify the source and destination, also the departure time and arrival time

| Description      | Get train schedule by specify the source and destination, also the departure time and arrival time |
| :--------------- | :------------------------------------------------------------------------------------------------- |
| Method           | GET                                                                                                |
| URL              | /api/schedules?from={source}&to={destination}&range1={departureTime}&range2={arrivalTime}          |
| Body             | None                                                                                               |
| Parameters       | from: string, to: string, range1: string, range2: string                                           |
| Success Response | 200 OK                                                                                             |

4. update train schedule by train name

| Description      | Update train schedule by train name |
| :--------------- | :---------------------------------- |
| Method           | PATCH                               |
| URL              | /api/schedules/:trainName           |
| Body             | departure: string, arrival: string  |
| Success Response | 200 OK                              |
