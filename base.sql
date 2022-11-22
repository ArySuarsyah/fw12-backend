CREATE DATABASE super_movie;

CREATE TABLE
    "users" (
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "picture" VARCHAR(225),
        "firstName" VARCHAR(225),
        "lastName" VARCHAR(225),
        "phoneNumber" VARCHAR(225),
        "email" VARCHAR(225),
        "password" VARCHAR(225),
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );

CREATE TABLE
    "resetPassword" (
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "email" VARCHAR(225),
        "userId" INT,
        "code" VARCHAR(225),
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );

CREATE TABLE
    "movies" (
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "title" VARCHAR(225),
        "picture" VARCHAR(225),
        "realeseDate" TIMESTAMPTZ,
        "director" VARCHAR(225),
        "duration" TIME,
        "synopsis" TEXT,
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );

CREATE TABLE
    "genre" (
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "name" VARCHAR(225),
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );

CREATE TABLE
    "movieGenre" (
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "movieId" INT,
        "genreId" INT,
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );

CREATE TABLE
    "casts" (
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        'name' VARCHAR(225),
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );

CREATE TABLE
    "movieCasts" (
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "movieId" INT,
        "castId" INT,
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );

CREATE TABLE
    "cinemas" (
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "picture" VARCHAR(225),
        "name" VARCHAR(225),
        "address" VARCHAR(225),
        "city" VARCHAR(225),
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );

CREATE TABLE
    "movieSchedules" (
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "movieId" INT,
        "cinemaId" INT,
        "price" BIGINT,
        "startDate" DATE,
        "endDate" DATE,
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );

CREATE TABLE
    "movieShceduleTimes" (
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "time" TIME,
        "movieScheduleId" INT,
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );

CREATE TABLE
    "status" (
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "name" VARCHAR(225),
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );

CREATE TABLE
    "transactions" (
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "bookingDate" TIMESTAMPTZ,
        "movieId" INT,
        "cinemaId" INT,
        "movieShceduleId" INT,
        "fullname" VARCHAR(225),
        "email" VARCHAR(225),
        "phoneNumber" VARCHAR(225),
        "statusId" INT,
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );

CREATE TABLE
    "reservedSeat" (
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "seatNum" VARCHAR(225),
        "transactionId" INT,
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );

CREATE TABLE
    "paymentMethod" (
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "picture" VARCHAR(225),
        "name" VARCHAR(225),
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );

CREATE TABLE
    "subscribers" (
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "email" VARCHAR(225),
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );