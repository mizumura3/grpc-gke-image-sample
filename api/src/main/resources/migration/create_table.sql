-- liquibase formatted sql

-- changeset mizumura:1

-- -----------------------------------------------------
-- Table `sample`.`mesages`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sample`.`messages` ;

CREATE TABLE IF NOT EXISTS `sample`.`messages` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `image` MEDIUMBLOB NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
