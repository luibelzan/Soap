import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { S67 } from "./entity/S67"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Lu1smigu3l",
    database: "pruebas",
    synchronize: true,
    logging: false,
    entities: [User, S67],
    migrations: [],
    subscribers: [],
})
