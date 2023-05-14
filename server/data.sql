CREATE TABLE todos (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(30),
    progress INT,
    date VARCHAR(300)
);

CREATE TABLE users (
    email VARCHAR(255) NOT NULL PRIMARY KEY,
    hashed_password VARCHAR(255) NOT NULL
);

INSERT INTO todos (id, user_email, title, progress, date) VALUES
('0', 'ania@test.com', ' First test', 10, 'Thu May 04 2023 13:25:45 GMT-0700 (Pacific Daylight Time)');