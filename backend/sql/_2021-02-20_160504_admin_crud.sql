DROP TABLE IF EXISTS feeback;
CREATE TABLE `feeback` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `feeback_like` int NOT NULL,
  `feeback_dislike` int NOT NULL,
  `user_profile` int NOT NULL,
  `user_feeback` int NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'created tiem',
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'updated tiem',
  PRIMARY KEY (`id`),
  KEY `user_profile` (`user_profile`),
  CONSTRAINT `feeback_ibfk_1` FOREIGN KEY (`user_profile`) REFERENCES `users` (`id`),
  CONSTRAINT `feeback_ibfk_2` FOREIGN KEY (`user_profile`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS info_users;
CREATE TABLE `info_users` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `user` int NOT NULL,
  `descripcion` varchar(255) DEFAULT 'asdasd',
  `work` varchar(255) DEFAULT NULL,
  `pais` varchar(255) DEFAULT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `blog` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `github` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'created tiem',
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'updated tiem',
  PRIMARY KEY (`id`),
  KEY `user` (`user`),
  CONSTRAINT `info_users_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS roles;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `role` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'created tiem',
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'updated tiem',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS skills;
CREATE TABLE `skills` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `skill` varchar(255) NOT NULL,
  `user` int NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'created tiem',
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'updated tiem',
  PRIMARY KEY (`id`),
  KEY `user` (`user`),
  CONSTRAINT `skills_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS users;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` int NOT NULL DEFAULT '1',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'created tiem',
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'updated tiem',
  PRIMARY KEY (`id`),
  KEY `role` (`role`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS works;
CREATE TABLE `works` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'primary key',
  `work` varchar(255) NOT NULL,
  `user` int NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'created tiem',
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'updated tiem',
  PRIMARY KEY (`id`),
  KEY `user` (`user`),
  CONSTRAINT `works_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;









