let xmlParser = require('xml2json');
//Adapter
class convertxmltojson{
    constructor(xmlinstance){
        this.xmlinstance = xmlinstance
    }

    convertxmltojsonData() {
        console.log("Data:"+this.xmlinstance.getXMLDoc())
        console.log('Converting.....')
        return xmlParser.toJson(this.xmlinstance.getXMLDoc());
    }
}

module.exports= convertxmltojson;