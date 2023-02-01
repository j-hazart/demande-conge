CREATE TABLE user (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  prenom varchar(255) NOT NULL,
  nom varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  mdp varchar(255) NOT NULL,
  role varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO user (prenom, nom, email, mdp, role) VALUES
("Le", "Boss", "boss@mail.fr", "boss", "patron"),
("John", "Doe", "johndoe@mail.fr", "doe", "employe");

