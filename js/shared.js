var system = {};

system.onLaunched = function(handler){
    chrome.app.runtime.onLaunched.addListener(handler);
}

system.setLocalStorage = function(data, cb){
    chrome.storage.local.set(data, cb);
}

system.getLocalStorage = function(keys, cb){
    chrome.storage.local.get(keys, cb);
}

system.removeLocalStorage = function(keys, cb){
    chrome.storage.local.remove(keys, cb);
}

system.restart = function(){
    if(chrome.runtime.restart) {
        chrome.runtime.restart();
    }
    chrome.runtime.reload();
};

system.getSchemaUrl = function(){
    return chrome.runtime.getURL("../schema.json");
}

system.getBackgroundPage = function(cb){
    chrome.runtime.getBackgroundPage(cb);
}
