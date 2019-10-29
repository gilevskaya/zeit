import pg from "pg";

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const config = {
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
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
