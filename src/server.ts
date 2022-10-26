import express from 'express';
import doenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

doenv.config();

const server = express();

/* config template engine */
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

/*config pasta publica*/
server.use(express.static(path.join(__dirname, '../public')))

// ROTAS
server.use(mainRoutes);

server.use((req,res) => {
   res.render('pages/404')
});




server.listen(process.env.PORT);