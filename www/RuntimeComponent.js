

var RuntimeComponentAPI = (function () {
    function RuntimeComponentAPI() {
    }
    RuntimeComponentAPI.hello = function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "RuntimeComponentAPI", "hello");
    };
    return RuntimeComponentAPI;
})();

module.exports = RuntimeComponentAPI;
