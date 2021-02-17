create DATABASE admin_crud;

CREATE TABLE users (
       id int NOT NULL primary key AUTO_INCREMENT comment 'primary key',
       name varchar(255) NOT NULL,
       email varchar(255) NOT NULL,
       password varchar(255) NOT NULL,
       role int NOT NULL default 1,
       createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP comment 'created tiem',
       updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP comment 'updated tiem'
) default charset utf8 comment '';

CREATE TABLE roles (
       id int NOT NULL primary key AUTO_INCREMENT comment 'primary key',
       role varchar(255) NOT NULL,
       createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP comment 'created tiem',
       updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP comment 'updated tiem'
) default charset utf8 comment '';

alter table
       users
add
       foreign key(role) references roles(id);