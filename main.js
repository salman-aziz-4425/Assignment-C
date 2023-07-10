const xmlData = require("./concreteClass");
const displayService = require("./displayData");
const convertxmltojson = require("./xmlAdapter");

//XML Data
const xml = `<root><name>John Doe</name><age>30</age></root>`;
const xmlinstance = new xmlData(xml);

// Singleton instance of DisplayService (Client interaction)
const DisplayServices= displayService.getInstance();
DisplayServices.bindoutputDevice("Mobile");
console.log(DisplayServices.display(xml));

// Adapter instance
const convertxmltojsoninstance = new convertxmltojson(xmlinstance);
const jsonData=convertxmltojsoninstance.convertxmltojsonData();

// Binding output device
console.log("After converting XML to JSON")
console.log(DisplayServices.display(jsonData));


//Flow

// XML Data ---- XML to JSON Adapter ----> JSON Data ----> Display Service ----> Output Device