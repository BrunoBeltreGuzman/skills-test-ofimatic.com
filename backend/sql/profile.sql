--  1 --
SELECT
       *
FROM
       users
       INNER JOIN info_users on users.id = info_users.user
ORDER BY
       users.id;

--  2 --
SELECT
       *
FROM
       users
       INNER JOIN info_users on users.id = info_users.user
WHERE
       users.id = 3
ORDER BY
       users.id;

--  2 --
SELECT
       *
FROM
       users;

--  2 --
SELECT
       *
FROM
       info_users;