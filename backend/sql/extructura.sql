DROP TABLE IF EXISTS feeback;

CREATE TABLE `feeback` (
       `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key',
       `feeback_like` int(11) NOT NULL,
       `feeback_dislike` int(11) NOT NULL,
       `user_profile` int(11) NOT NULL,
       `user_feeback` int(11) NOT NULL,
       `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'created tiem',
       `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'updated tiem',
       PRIMARY KEY (`id`),
       KEY `user_profile` (`user_profile`),
       CONSTRAINT `feeback_ibfk_1` FOREIGN KEY (`user_profile`) REFERENCES `users` (`id`),
       CONSTRAINT `feeback_ibfk_2` FOREIGN KEY (`user_profile`) REFERENCES `users` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

DROP TABLE IF EXISTS info_users;

CREATE TABLE `info_users` (
       `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key',
       `user` int(11) NOT NULL,
       `descripcion` varchar(255) DEFAULT 'asdasd',
       `work` varchar(255) DEFAULT NULL,
       `skill` varchar(255) DEFAULT NULL,
       `pais` varchar(255) DEFAULT NULL,
       `telefono` varchar(255) DEFAULT NULL,
       `blog` varchar(255) DEFAULT NULL,
       `facebook` varchar(255) DEFAULT NULL,
       `linkedin` varchar(255) DEFAULT NULL,
       `github` varchar(255) DEFAULT NULL,
       `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'created tiem',
       `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'created tiem',
       PRIMARY KEY (`id`),
       KEY `user` (`user`),
       CONSTRAINT `info_users_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 13 DEFAULT CHARSET = utf8;

DROP TABLE IF EXISTS roles;

CREATE TABLE `roles` (
       `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key',
       `role` varchar(255) NOT NULL,
       `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'created tiem',
       `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'updated tiem',
       PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 7 DEFAULT CHARSET = utf8;

DROP TABLE IF EXISTS users;

CREATE TABLE `users` (
       `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key',
       `name` varchar(255) NOT NULL,
       `email` varchar(255) NOT NULL,
       `password` varchar(255) NOT NULL,
       `role` int(11) NOT NULL DEFAULT '1',
       `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'created tiem',
       `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'updated tiem',
       PRIMARY KEY (`id`),
       KEY `role` (`role`),
       CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role`) REFERENCES `roles` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 20 DEFAULT CHARSET = utf8;

CREATE TABLE imageUser (
       `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'primary key',
       user int NOT NULL,
       originalname varchar(255) NOT NULL,
       mimetype varchar(255) NOT NULL,
       filename varchar(255) NOT NULL,
       path varchar(255) NOT NULL,
       size int,
       `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'created tiem',
       `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'updated tiem',
       PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 7 DEFAULT CHARSET = utf8;

alter table
       imageUser
add
       foreign key(user) references users(id);