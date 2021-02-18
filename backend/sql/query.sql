SELECT
       *
FROM
       users
       JOIN roles;

SELECT
       users.name,
       roles.role
FROM
       users
       JOIN roles on users.role = roles.id;