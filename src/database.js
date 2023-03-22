import Odoo from 'odoo-xmlrpc';

import IPartner from './models/partners.model'

const odoo = new Odoo({
    url: 'localhost',
    port: 8069,
    db: 'odoo15',
    username: 'uliser.barrero@desoft.cu',
    password: 'admin'
});

const db = {
    partners : [],
    getPartners : function(){
        const odoo = new Odoo({
            url: 'localhost',
            port: 8069,
            db: 'odoo15',
            username: 'uliser.barrero@desoft.cu',
            password: 'admin'
        });
    }
}

odoo.connect(function (err) {
    if (err) { return console.log(err); }
    console.log('Connected to Odoo server.');
    
    var inParams = [];
    inParams.push([['is_company', '=', true]]);
    inParams.push(0);  //offset
    //inParams.push(5);  //Limit
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'search', params, function (err, value) {
        if (err) { return console.log(err); }
        var inParams = [];
        inParams.push(value); //ids
        //inParams.push(['name', 'id','image_1920']); //fields
        inParams.push(['name', 'id'])
        var params = [];
        params.push(inParams);
        odoo.execute_kw('res.partner', 'read', params, function (err2, value2) {
            if (err2) { return console.log(err2); }
            console.log('Result: ', value2);
            db.partners = value2;
        });
    });   
});    

/*
odoo.getPartners = () => {
    odoo.connect(function (err) {
        if (err) { return console.log(err); }
        console.log('Connected to Odoo server.');
    })
    var inParams = [];
    inParams.push([['is_company', '=', true]]);
    inParams.push(0);  //offset
    inParams.push(3);  //Limit
    var params = [];
    params.push(inParams);
    odoo.execute_kw('res.partner', 'search', params, function (err, value) {
        if (err) { return console.log(err); }
        var inParams = [];
        inParams.push(value); //ids
        inParams.push(['name', 'id']); //fields
        var params = [];
        params.push(inParams);
        odoo.execute_kw('res.partner', 'read', params, function (err2, value2) {
            if (err2) { return console.log(err2); }
            console.log('Result: ', value2);
            //return value2;
        });
    });    
};
*/
export default db;