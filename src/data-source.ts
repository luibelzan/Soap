import "reflect-metadata"
import { DataSource } from "typeorm"
import { S13 } from "./entities/S13"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Lu1smigu3l",
    database: "pruebas",
    synchronize: true,
    logging: false,
    entities: [S13],
    migrations: [],
    subscribers: [],
})