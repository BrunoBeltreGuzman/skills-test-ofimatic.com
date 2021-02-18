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

CREATE TABLE skills (
       id int NOT NULL primary key AUTO_INCREMENT comment 'primary key',
       skill varchar(255) NOT NULL,
       user int NOT NULL,
       createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP comment 'created tiem',
       updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP comment 'updated tiem'
) default charset utf8 comment '';

alter table
       skills
add
       foreign key(user) references users(id);

CREATE TABLE works (
       id int NOT NULL primary key AUTO_INCREMENT comment 'primary key',
       work varchar(255) NOT NULL,
       user int NOT NULL,
       createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP comment 'created tiem',
       updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP comment 'updated tiem'
) default charset utf8 comment '';

alter table
       skills
add
       foreign key(user) references users(id);

CREATE TABLE feeback (
       id int NOT NULL primary key AUTO_INCREMENT comment 'primary key',
       feeback_like int NOT NULL,
       feeback_dislike int NOT NULL,
       user_profile int NOT NULL,
       user_profile int NOT NULL,
       createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP comment 'created tiem',
       updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP comment 'updated tiem'
) default charset utf8 comment '';

alter table
       feeback
add
       foreign key(user_profile) references users(id);

alter table
       feeback
add
       foreign key(user_profile) references users(id);

CREATE TABLE info_users(
       id int NOT NULL primary key AUTO_INCREMENT comment 'primary key',
       user int NOT NULL,
       descripcion varchar(255),
       work varchar(255),
       pais varchar(255),
       telefono varchar(255),
       blog varchar(255),
       facebook varchar(255),
       linkedin varchar(255),
       github varchar(255),
       createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP comment 'created tiem',
       updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP comment 'updated tiem'
) default charset utf8 comment '';

alter table
       info_users
add
       foreign key(user) references users(id);