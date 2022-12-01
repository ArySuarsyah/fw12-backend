CREATE DATABASE super_movie;

CREATE TABLE
    "users" (
        "id"          INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "picture"     VARCHAR(225),
        "firstName"   VARCHAR(225),
        "lastName"    VARCHAR(225),
        "phoneNumber" VARCHAR(225),
        "email"       VARCHAR(225),
        "password"    VARCHAR(225),
        "createdAt"   TIMESTAMPTZ DEFAULT now(),
        "updatedAt"   TIMESTAMPTZ
    );

CREATE TABLE
    "resetPassword" (
        "id"          INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "email"       VARCHAR(225),
        "userId"      INT,
        "code"        VARCHAR(225),
        "password"    VARCHAR(225),
        "confirmPassword" VARCHAR(225),
        "createdAt"   TIMESTAMPTZ DEFAULT now(),
        "updatedAt"   TIMESTAMPTZ
    );

CREATE TABLE
    "movies" (
        "id"          INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "title"       VARCHAR(225),
        "picture"     VARCHAR(225),
        "realeseDate" TIMESTAMPTZ,
        "director"    VARCHAR(225),
        "duration"    TIME,
        "synopsis"    TEXT,
        "createdAt"   TIMESTAMPTZ DEFAULT now(),
        "updatedAt"   TIMESTAMPTZ
    );

CREATE TABLE
    "genre" (
        "id"          INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "name"        VARCHAR(225),
        "createdAt"   TIMESTAMPTZ DEFAULT now(),
        "updatedAt"   TIMESTAMPTZ
    );

CREATE TABLE
    "movieGenre" (
        "id"          INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "movieId"     INT,
        "genreId"     INT,
        "createdAt"   TIMESTAMPTZ DEFAULT now(),
        "updatedAt"   TIMESTAMPTZ
    );

CREATE TABLE
    "casts" (
        "id"          INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        'name'        VARCHAR(225),
        "createdAt"   TIMESTAMPTZ DEFAULT now(),
        "updatedAt"   TIMESTAMPTZ
    );

CREATE TABLE
    "movieCasts" (
        "id"          INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "movieId"     INT,
        "castId"      INT,
        "createdAt"   TIMESTAMPTZ DEFAULT now(),
        "updatedAt"   TIMESTAMPTZ
    );

CREATE TABLE
    "cinemas" (
        "id"          INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "picture"     VARCHAR(225),
        "name"        VARCHAR(225),
        "address"     VARCHAR(225),
        "city"        VARCHAR(225),
        "createdAt"   TIMESTAMPTZ DEFAULT now(),
        "updatedAt"   TIMESTAMPTZ
    );

CREATE TABLE
    "movieSchedules" (
        "id"          INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "movieId"     INT,
        "cinemaId"    INT,
        "price"       BIGINT,
        "startDate"   DATE,
        "endDate"     DATE,
        "createdAt"   TIMESTAMPTZ DEFAULT now(),
        "updatedAt"   TIMESTAMPTZ
    );

CREATE TABLE
    "movieShceduleTimes" (
        "id"          INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "time"        TIME,
        "movieScheduleId" INT,
        "createdAt"   TIMESTAMPTZ DEFAULT now(),
        "updatedAt"   TIMESTAMPTZ
    );

CREATE TABLE
    "status" (
        "id"          INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "name"        VARCHAR(225),
        "createdAt"   TIMESTAMPTZ DEFAULT now(),
        "updatedAt"   TIMESTAMPTZ
    );

CREATE TABLE
    "transactions" (
        "id"          INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "bookingDate" TIMESTAMPTZ,
        "movieId"     INT,
        "cinemaId"    INT,
        "movieScheduleId" INT,
        "fullname"    VARCHAR(225),
        "email"       VARCHAR(225),
        "phoneNumber" VARCHAR(225),
        "statusId"    INT,
        "createdAt"   TIMESTAMPTZ DEFAULT now(),
        "updatedAt"   TIMESTAMPTZ
    );

CREATE TABLE
    "reservedSeat" (
        "id"          INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "seatNum"     VARCHAR(225),
        "transactionId" INT,
        "createdAt"   TIMESTAMPTZ DEFAULT now(),
        "updatedAt"   TIMESTAMPTZ
    );

CREATE TABLE
    "paymentMethod" (
        "id"          INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "picture"     VARCHAR(225),
        "name"        VARCHAR(225),
        "createdAt"   TIMESTAMPTZ DEFAULT now(),
        "updatedAt"   TIMESTAMPTZ
    );

CREATE TABLE
    "subscribers" (
        "id" INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        "email" VARCHAR(225),
        "createdAt" TIMESTAMPTZ DEFAULT now(),
        "updatedAt" TIMESTAMPTZ
    );



INSERT INTO "users" ("firstName", "lastName", "phoneNumber", "email", "password")
VALUES ('super', 'user', '081122334455', 'superuser@email.com', '0987654321'),
('Ari', 'Suharsa', '081234567890', 'admin@email.com', '1234567890');

INSERT INTO "resetPassword" (
    "email", "userId", "code"
)
VALUES ('superuser@email.com', 3, '12345');

INSERT INTO "movies" (
    "title", "realeseDate", "director", "duration", "synopsis"
)
VALUES ('Spider-Man: Homecoming', 'June 28, 2017', 'Jon Watss', '2:13', 'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider - Man but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.');

INSERT INTO "movies" (
  "title", "realeseDate", "director", "duration", "synopsis"
)
VALUES  (
    'One Piece: RED',
    'September 21, 2022',
    'Gorō Taniguchi ',
    '2:00',
    'The story is set on the "Island of Music" Elegia, where Uta,the world greatest diva, holds her first ever live concert and reveals herself to the public. The Straw Hats, pirates, Marines and fans from across the world gather to enjoy Uta voice, which has been described as "otherworldly".However, the event begins with the shocking revelation that Uta is the daughter of Shanks.'
), (
    'Avengers:Endgame',
    'April 26, 2019',
    'Joe Russo, Anthony Russo ',
    '3:00',
    'The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios grand conclusion to twenty-two films, Avengers: Endgame.'
);

INSERT INTO "genre" ("name")
VALUES ('Adventure'), ('Action'), ('Sci-Fi');

INSERT INTO "movieGenre" ("movieId", "genreId")
VALUES (2, 4), (2, 5), (2, 6), (9,4), (9,5), (10, 4), (10, 5);


INSERT INTO "casts" ("name") VALUES ('Tom Holland'), ('Michael Keaton'), ('Robert Downey Jr');

INSERT INTO "movieCasts" ("movieId", "castId") VALUES (2, 4);

INSERT INTO "cinemas" ("name", "address", "city")
VALUES ('ebv.id', 'Whatever street No.12, South Purwokerto', 'Purwokerto'),
('CineOne21', 'Downcare street No. 21, East Purwokerto', 'Purwokerto'),
('hiflix Cinema', 'Colonel street No. 2, East Purwokerto', 'Purwokerto');

INSERT INTO "movieSchedules" (
    "movieId", "cinemaId", "price", "startDate", "endDate"
)
VALUES (2, 5, '10', '2020-05-07', '2020-07-07');

INSERT INTO "movieSchedules" (
  "movieId", "cinemaId", "price", "startDate", "endDate"
  )
VALUES (9, 6, '10', '01-12-2022', '31-12-2022'), (10, 4, '10', '01-11-2022', '30-11-2022');


INSERT INTO "movieShceduleTimes" (
    "time", "movieScheduleId"
)
VALUES ('08:30', 2);

INSERT INTO "status" ("name") VALUES ('Ticket Active'), ('Ticket Used'), ('Ticket Expired');

INSERT INTO "transactions" ("bookingDate", "movieId", "cinemaId", "movieScheduleId", "fullname", "email", "phoneNumber", "statusId")
VALUES ('Tuesday, 07 July 2020 at 02:00', 2, 5, 2, 'Arisuharsa', 'admin@email.com', '081234567890', 2);

INSERT INTO "reservedSeat" ("seatNum", "transactionId") VALUES ('C4', 2), ('C5', 2), ('C6', 2);

INSERT INTO "paymentMethod" ("name") VALUES ('Visa');

INSERT INTO "subscribers" ("email") VALUES ('pengunjung@email.com');


ALTER TABLE "users" ADD CONSTRAINT "email" UNIQUE ("email");
ALTER TABLE "genre" ADD CONSTRAINT "name" UNIQUE ("name");









-- Relasi

