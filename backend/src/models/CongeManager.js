const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "conge" });
  }

  findAllAndFormatDate() {
    return this.connection.query(
      `select c.id, date_format(c.dateDebut, "%d-%m-%Y") as start, date_format(c.dateDebut, "%d-%m-%Y") as end, c.statut, c.user_id as userId, concat(u.prenom, " ",u.nom) as name from ${this.table} c inner join user u on c.user_id = u.id`
    );
  }

  insert(conge) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [conge.title]
    );
  }

  update(conge) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [conge.title, conge.id]
    );
  }
}

module.exports = ItemManager;
