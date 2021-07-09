import App from './app';
import { MongoDBconnect } from './connectionDB/connectionMongoDB';

const app = new App();
MongoDBconnect();

app.start();