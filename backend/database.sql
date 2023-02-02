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
("John", "Doe", "johndoe@mail.fr", "doe", "employe"),
("Mouns", "Ito", "mouns@mail.fr", "mouns", "employe");

CREATE TABLE conge (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  dateDebut date NOT NULL,
  dateFin date NOT NULL,
  statut varchar(10) NOT NULL default "attente",
  user_id int(11) unsigned NOT NULL,
  constraint conge_user foreign key (user_id) references user(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO conge (dateDebut, dateFin, statut, user_id) VALUES
("2023-03-15", "2023-04-15", "attente", 2),
("2023-02-15", "2023-02-25", "valide", 2),
("2023-02-10", "2023-03-11", "refus", 2),
("2023-06-08","2023-07-30","refus", 2),
("2023-06-30","2023-07-08","attente",3);
