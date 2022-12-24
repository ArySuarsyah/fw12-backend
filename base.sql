
UPDATE DATABASE super_movie;
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
        "password" VARCHAR(225),
        "confirmPassword" VARCHAR(225),
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
        "name" VARCHAR(225),
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
        "movieScheduleId" INT,
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

-- Insert

INSERT INTO
    "users" (
        "firstName",
        "lastName",
        "phoneNumber",
        "email",
        "password"
    )
VALUES (
        'super',
        'user',
        '081122334455',
        'superuser@email.com',
        '0987654321'
    ), (
        'Ari',
        'Suharsa',
        '081234567890',
        'admin@email.com',
        '1234567890'
    );

INSERT INTO
    "movies" (
        "title",
        "realeseDate",
        "director",
        "duration",
        "synopsis"
    )
VALUES (
        'Spider-Man: Homecoming',
        'June 28, 2017',
        'Jon Watss',
        '2:13',
        'Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider - Man but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.'
    ), (
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
    ), (
        'Deadpool',
        'February 12, 2016',
        'Tim Miller',
        '02:00:08',
        'Based upon Marvel Comics’ most unconventional anti-hero, DEADPOOL tells the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.'
    ), (
        'X-MEN: Apocalypse',
        'May 27, 2016',
        'Bryan Singer',
        '02:08:00',
        'Upon awakening after thousands of years, Apocalypse is disillusioned with the world as he finds it and recruits a team of powerful mutants, including a disheartened Magneto (Michael Fassbender), to cleanse mankind and create a new world order, over which he will reign. As the fate of the Earth hangs in the balance, Raven (Jennifer Lawrence) with the help of Professor X (James McAvoy) must lead a team of young X-Men to stop their greatest nemesis and save mankind from complete destruction.'
    ), (
        'X-MEN: Days Of Future Past.',
        'May 23, 2014',
        'Bryan Singer',
        '02:18:08',
        'The ultimate X-Men ensemble fights a war for the survival of the species across two time periods in X-MEN: DAYS OF FUTURE PAST. The beloved characters from the original “X-Men” film trilogy join forces with their younger selves from the past, “X-Men: First Class,” in order to change a major historical event and fight in an epic battle that could save our future.'
    );

INSERT INTO "genre" ("name")
VALUES ('Adventure'), ('Action'), ('Sci-Fi'), ('Fantasy'), ('Science Fiction'), ('Comedy');

INSERT INTO "casts" ("name")
VALUES ('Michael Keaton'), ('Robert Downey Jr'), ('Tom Holland'), ('Hugh Jackman'), ('James McAvoy'), ('Michael Fassbender'), ('Jennifer Lawrence'), ('Halle Berry'), ('Anna Paquin'), ('Peter Dinklage'), ('Ian McKellen'), ('Patrick Stewart'), ('Ryan Reynolds'), ('Morena Baccarin'), ('Ed Skrein'), ('T.J. Miller'), ('Gina Carano'), ('Brianna Hildebrand'), ('Ary'), ('ennifer Lawrence'), ('Oscar Isaac'), ('Nicholas Hoult'), ('Rose Byrne'), ('Tye Sheridan'), ('NicholasSophie Turner'), ('NicOlivia Munn'), ('Olivia Munn');

INSERT INTO
    "cinemas" ("name", "address", "city")
VALUES (
        'ebv.id',
        'Whatever street No.12, South Purwokerto',
        'Purwokerto'
    ), (
        'CineOne21',
        'Downcare street No. 21, East Purwokerto',
        'Purwokerto'
    ), (
        'hiflix Cinema',
        'Colonel street No. 2, East Purwokerto',
        'Purwokerto'
    );

INSERT INTO "status" ("name")
VALUES ('Ticket Active'), ('Ticket Used'), ('Ticket Expired');

INSERT INTO
    "paymentMethod" ("name")
VALUES ('Visa'), ('Google Pay'), ('Gopay'), ('Paypal'), ('Dana'), ('Bank Central Asia'), ('Bank Rakyat Indonesia'), ('Ovo');