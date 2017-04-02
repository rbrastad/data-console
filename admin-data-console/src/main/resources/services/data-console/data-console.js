var websocket = require('/lib/xp/websocket');
var thymeleaf = require('/lib/xp/thymeleaf');
var auth = require('/lib/xp/auth');

var WS_GROUP_NAME = "WS_DATA_CONSOLE";

function renderView() {
    var view = resolve('./data-console.html');
    var model = {};
    var body = thymeleaf.render(view, model);

    return {
        status: 200,
        contentType: 'text/html',
        body: body
    };
}

exports.get = function (req) {

    if (!req.webSocket) {
        return renderView();
    }

    log.info("user: " +  auth.getUser() );
    var user = auth.getUser();

    if (user) {
        log.info('User logged in: %s', user.displayName);
    }


    return {
        webSocket: {
            data: {
                user: user.displayName
            },
            subProtocols: ["text"]
        }
    };
};

exports.webSocketEvent = function (event) {

    if (event.type == 'open') {
        // Send message back to client
        websocket.send(event.session.id, 'Waiting for data log events...');

        // Add client into a group
        websocket.addToGroup(WS_GROUP_NAME, event.session.id);
    }

    if (event.type == 'message') {
        // Propegate message to group
        var responseMsg = event.message;

        websocket.sendToGroup(WS_GROUP_NAME, responseMsg);
    }

    if (event.type == 'close') {
        // Remove client from a group
        websocket.removeFromGroup(WS_GROUP_NAME, event.session.id);
    }
};
