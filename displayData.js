class IDisplayDevice{
    display(data){
        throw new Error("Not implemented");
    }

}

//Client interaction
class DisplayService extends IDisplayDevice{
    outputDevice = null;
    bindoutputDevice(outputDevice){
        if(this.outputDevice === null){
        this.outputDevice = outputDevice;
        }
        else{
            console.log("Output device is already binded")
        }
    }
    display(data){
        if(this.outputDevice){
          console.log("Output Device: "+this.outputDevice)
        try {
            JSON.parse(data);
            console.log("JSON DATA: "+data);
        } catch (e) {
            return "Only Json format is accepted";
        }
    }
    else{
        return "Output device is not binded";
    }
    }
}

// Singleton instance of DisplayService
const displayService = (function () {
    let instance = null;
  
    function createInstance() {
      return new DisplayService();
    }
  
    return {
      getInstance: function () {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      },
    };
  })();

module.exports= displayService;