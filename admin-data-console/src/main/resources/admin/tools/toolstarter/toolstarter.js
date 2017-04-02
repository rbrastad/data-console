var portalLib = require('/lib/xp/portal');
var mustacheLib = require('/lib/xp/mustache');
var xpVersion = require('/lib/status').getXpVersion();

exports.get = function (req) {
    var view = resolve('toolstarter.html');

    // Variables required by the Launcher Panel
    var adminUrl = portalLib.url({path: '/admin'})
    var adminAssetsUrl = portalLib.url({path: "/admin/assets/" + xpVersion});
    var assetsUrl = portalLib.assetUrl({path: ""});
    var serviceDataConsole = portalLib.serviceUrl({service: "data-console",type: "absolute"});

    var params = {
        adminUrl: adminUrl,
        adminAssetsUrl: adminAssetsUrl,
        assetsUrl: assetsUrl,
        serviceDataConsole: serviceDataConsole.replace("http://", "").replace("https://", "")
    };

    return {
        body: mustacheLib.render(view, params)
    };
};