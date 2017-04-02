var dataConsole = require("/lib/data-console");

/**
 *
 * Data Log Viewer Simple Hello World
 *
 * @param req
 * @returns {{status: number, body, contentType: string}}
 */

exports.get = function( req ) {
    dataConsole.info("Hello from Data Log Viewer");

    return {
        status : 200,
        body: {"msg":"sent"},
        contentType: "application/json"
    };
};