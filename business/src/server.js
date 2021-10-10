import configApp from './configExpress';
const app = configApp();
const port = 3030;

app.listen(port, () => console.log("App is running on localhost:3030"));