var dataLog = require("/lib/data-console");

/**
 *
 * Data Log Viewer Simple Hello World
 *
 * @param req
 * @returns {{status: number, body, contentType: string}}
 */

exports.get = function( req ) {
    var object = {
        text : "This is an message in an object: " + new Date(),
        more : {
            more: {
                msg : "msg",
                number : 3.14

            }
        }
    }

    dataLog.info( object );

    dataLog.error( object );

    dataLog.debug( object );

    dataLog.info( object , "custom title");

    return {
        status : 200,
        body: {"msg":"sent"},
        contentType: "application/json"
    };
};