import app from './app'

//const db = require('./database')


async function main(){
    app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
    
//    db.getPartners();
};

main();