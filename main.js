const xmlData = require("./concreteClass");
const convertxmltojson = require("./xmlAdapter");

//XML Data
const xml = `<root><name>John Doe</name><age>30</age></root>`;
const xmlinstance = new xmlData(xml);

// Adapter instance
const convertxmltojsoninstance = new convertxmltojson(xmlinstance,"Mobile");
convertxmltojsoninstance.convertxmltojsonData();
// XML Data ---- XML to JSON Adapter ----> JSON Data ----> Display Service ----> Output Device