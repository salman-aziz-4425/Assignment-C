let xmlParser = require('xml2json');
const displayService = require('./displayData');
class xmlapterInterface {
    convertxmltojsonData() {
        throw new Error("Not implemented");
    }
}
//Adapter
class convertxmltojson extends xmlapterInterface{
    constructor(xmlinstance,device){
        super()
        this.xmlinstance = xmlinstance
        this.display=displayService.getInstance();
        this.device=this.display.bindoutputDevice(device);
    }

    convertxmltojsonData() {
        console.log("Data:"+this.xmlinstance.getXMLDoc())
        console.log('Converting.....')
        const jsonData=xmlParser.toJson(this.xmlinstance.getXMLDoc())
        this.display.display(jsonData);
    }
}

module.exports= convertxmltojson;