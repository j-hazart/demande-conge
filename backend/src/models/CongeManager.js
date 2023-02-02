const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "conge" });
  }

  findAllAndFormatDate() {
    return this.connection.query(
      `select c.id, date_format(c.dateDebut, "%d-%m-%Y") as start, date_format(c.dateFin, "%d-%m-%Y") as end, c.statut, c.user_id as userId, concat(u.prenom, " ",u.nom) as name from ${this.table} c inner join user u on c.user_id = u.id`
    );
  }

  insert(conge) {
    return this.connection.query(
      `insert into ${this.table} (dateDebut, dateFin, user_id) values (?,?,?)`,
      [conge.dateDebut, conge.dateFin, conge.userId]
    );
  }

  update(conge) {
    return this.connection.query(
      `update ${this.table} set statut = ? where id = ?`,
      [conge.statut, conge.id]
    );
  }
}

module.exports = ItemManager;
