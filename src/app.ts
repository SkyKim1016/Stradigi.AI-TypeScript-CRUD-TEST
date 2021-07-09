import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
// import cors from 'cors';

//[Handlebars which is .hbs View engine]
import exphbs from 'express-handlebars';
import path from 'path';

//[Routes]
//[ 1.MongoDB CRUD API ]
import mongoApi from './routes/mongoApi';
//[ 2.PostgresApi CRUD API ]
import postgresApi from './routes/postgresApi';


class Applicaction {

    app: express.Application;

    constructor() {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', 4000);
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(helmet());
        // this.app.use(cors());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.json());
    }

    routes() {

        //1. [Uses MongoDB]
        this.app.use('/mongoApi', mongoApi);

        //2. [Uses PostgresSQL]
        this.app.use('/postgresApi', postgresApi);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('>>> Server is running at port : ', this.app.get('port'));
        });
    }
}

export default Applicaction;