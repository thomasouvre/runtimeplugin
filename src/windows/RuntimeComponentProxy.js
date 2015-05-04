

module.exports = {
    hello: function (successCallback, errorCallback) {
        msSetImmediate(function () {
            try {
                var cis = new RuntimeComponent1.Class1();
                console.log("blahhhhhhhhhhhh" + cis.Hello());
            }
            catch (error) {
                errorCallback({ code: null, message: "ERROR", error: error });
            }
        });
    }
};

cordova.require("cordova/exec/proxy").add("RuntimeComponentAPI", module.exports);