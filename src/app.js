//babel/core: compilador de babel
//babel/cli: compilar desde consola
//babel/node: babel para node
//babel/preset-env ejecutar el codigo con sintaxis nueva dentro de node

import express from "express";
import { create } from 'express-handlebars';
import path from 'path';
import indexRoutes from "./routes/index.routes";
import morgan from 'morgan';

const app = express();

app.set('views', path.join(__dirname, 'views'));

//Configuración handlebars
const exphbs = create({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: 'main',
    extname: ".hbs"
});
app.engine('.hbs', exphbs.engine);
app.set('view engine', '.hbs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(indexRoutes);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

export default app;