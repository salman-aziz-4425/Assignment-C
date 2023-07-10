let xmlParser = require('xml2json');
class xmlapterInterface {
    convertxmltojsonData() {
        throw new Error("Not implemented");
    }
}
//Adapter
class convertxmltojson extends xmlapterInterface{
    constructor(xmlinstance){
        super()
        this.xmlinstance = xmlinstance
    }

    convertxmltojsonData() {
        console.log("Data:"+this.xmlinstance.getXMLDoc())
        console.log('Converting.....')
        return xmlParser.toJson(this.xmlinstance.getXMLDoc());
    }
}

module.exports= convertxmltojson;