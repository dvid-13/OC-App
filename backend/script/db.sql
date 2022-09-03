CREATE DATABASE IF NOT EXISTS `app` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `app`;

CREATE TABLE IF NOT EXISTS `OC` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(80) NOT NULL,
  `oc_state` tinyint(1) DEFAULT NULL,
  `company` varchar(50) CHARACTER DEFAULT '',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `Spent` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `cost` float DEFAULT NULL,
  `description` varchar(80) NOT NULL DEFAULT '',
  `icon` varchar(80) NOT NULL DEFAULT 'credit-card',
  `oc_id` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `OC` (`oc_id`),
  CONSTRAINT `OC` FOREIGN KEY (`oc_id`) REFERENCES `OC` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
