import pg from "pg";

const { DB_USER, DB_PASSWORD } = process.env;

const config = {
  host: "boba-sql.postgres.database.azure.com",
  user: "alena@boba-sql",
  password: DB_PASSWORD,
  database: "testdb",
  port: 5432,
  ssl: true
};

const client = new pg.Client(config);

client.connect(err => {
  if (err) throw err;
  else {
    console.log("Connected to DB");
  }
});

export { client as db };
