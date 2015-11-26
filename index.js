var self = require('sdk/self');

var buttons = require('sdk/ui/button/action');
var tabs = require('sdk/tabs');

var url = "http://www.reddit.com/r/Random";

var button = buttons.ActionButton({
    id: 'random_reddit_link',
    label: 'Random Reddit',
    icon: {
        "16": "./icon_16.png",
        "32": "./icon_32.png",
        "64": "./icon_64.png"
    },

    onClick: handleClick
});


function handleClick(state) {
    tabs.activeTab.url = url;
}

function ok() {
    console.log("okok");
}