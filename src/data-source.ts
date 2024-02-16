import "reflect-metadata"
import { DataSource } from "typeorm"
import { S13 } from "./entities/S13"
import { S15 } from "./entities/S15"
import { S31 } from "./entities/S31"
import { S63 } from "./entities/S63"
import { S65 } from "./entities/S65"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Lu1smigu3l",
    database: "pruebas",
    synchronize: true,
    logging: false,
    entities: [S13, S15, S31, S63, S65],
    migrations: [],
    subscribers: [],
})