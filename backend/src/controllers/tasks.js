import { connect } from "../database";

/**
 *
 * GET Count
 *
 */
export const getCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(
    "SELECT Count(*) FROM OC WHERE oc_state = 1; SELECT Count(*) FROM OC;"
  );
  res.json({ active: rows[0][0]["Count(*)"], all: rows[1][0]["Count(*)"] });
};

/**
 *
 * GET Actives
 *
 */
export const getActives = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.execute(
    "SELECT * FROM OC WHERE oc_state = 1"
  );
  res.json(rows);
};

/**
 *
 * GET All
 *
 */
export const getAll = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.execute("SELECT * FROM OC");
  res.json(rows);
};

/**
 *
 * GET One
 *
 */
export const getData = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT * FROM Spent WHERE oc_id=?", [
    req.params.id,
  ]);
  res.json(rows);
};

/**
 *
 * SAVE OC
 *  INSERT INTO `app`.`orden` (`date`, `name`, `ocstate`, `parent`) VALUES ('2022-05-06 16:40:50', 'Orden3 - Emp2', '0', 'Emp2');
 */
export const saveOC = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO OC (name, oc_state, company) VALUES (?,1,?)",
    [req.body.name, req.body.company]
  );
  res.json({ affrows: results["affectedRows"], ...req.body });
};

/**
 *
 * SAVE OC
 *  "INSERT INTO `admin_app`.`"+order+"` (`gasto`, `description`, `icon`) VALUES ('"+value+"', '"+description+"', '"+icon+"');";
 */
export const saveData = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO Spent (cost, description, oc_id) VALUES (?,?,?)",
    [req.body.cost, req.body.description, req.body.oc_id]
  );
  res.json({ affrows: results["affectedRows"], ...req.body });
};

/*export const getTasksCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT COUNT(*) FROM tasks");
  res.json(rows[0]["COUNT(*)"]);
};
*/
export const saveTasks = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO tasks (title, description) VALUES (?,?)",
    [req.body.title, req.body.description]
  );
  res.json({ affrows: results["affectedRows"], ...req.body });
};

export const deleteData = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query("DELETE FROM Spent WHERE id = ?", [
    req.params.id,
  ]);
  res.json(results["affectedRows"]);
};

export const updateOC = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "UPDATE OC SET oc_state=0 WHERE id = ?",
    [req.params.id]
  );
  res.json(results["changedRows"]);
};
