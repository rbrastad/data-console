var websocket = require('/lib/xp/websocket');
var portalLib = require('/lib/xp/portal');

var WS_GROUP_NAME = "WS_DATA_CONSOLE";

exports.info = function( data, title ){
    var event = {
        "title" : title,
        "data" : data,
        "dataConsole" : {
            "logDate" : new Date().toJSON(),
            "logType" : "info"
        }
    };

    sendEventToGroup( JSON.stringify( event ) );
};


exports.warning = function( data, title ){
    var event = {
        "title" : title,
        "data" : data,
        "dataConsole" : {
            "logDate" : new Date().toJSON(),
            "logType" : "warning"
        }
    };

    sendEventToGroup( JSON.stringify( event ) );
};


exports.error = function( data, title ){
    var event = {
        "title" : title,
        "data" : data,
        "dataConsole" : {
            "logDate" : new Date().toJSON(),
            "logType" : "error"
        }
    };

    sendEventToGroup( JSON.stringify( event ) );
};


exports.debug = function( data, title ){
    var event = {
        "title" : title,
        "data" : data,
        "dataConsole" : {
            "logDate" : new Date().toJSON(),
            "logType" : "debug"
        }
    };

    sendEventToGroup( JSON.stringify( event ) );
};


function sendEventToGroup(event ){
    websocket.sendToGroup(WS_GROUP_NAME, event);
};