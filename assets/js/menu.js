var generateMenuCtrl;

generateMenuCtrl = function generateMenuCtrl() {

    var _this = this;
    var options = {
        menu: null
    };

    this.init = function() {

        options.menu = this.getMenuStructure();
        this.generateMenu();

    };

    this.generateMenu = function() {
        var menu = options.menu;

        if(!menu || menu.length === 0) {
            console.info('Empty menu object!');
            return false;
        }

        this.buildMenu(menu, document.querySelector('#menu'));
    };

    this.buildMenu = function(links, container) {
        links.forEach(function(elem, i) {
            var ul = null;

            if(i === 0) {
                ul = document.createElement('ul');
                container.appendChild(ul);
            } else {
                ul = container.querySelector('ul');
            }

            var li = document.createElement('li');
            var a = document.createElement('a');
            var icon = document.createElement('i');

            ul.appendChild(li);
            li.appendChild(a);

            a.setAttribute('href', elem.url);
            a.appendChild(document.createTextNode(elem.label));
            a.appendChild(icon);

            if(elem.sub_menu) {
                icon.setAttribute('class', 'fa fa-angle-right');
                _this.buildMenu(elem.sub_menu, li);
            }
        });
    };

    this.getMenuStructure = function() {
        var menu = [{
            "id": 1,
            "label": "Events",
            "url": "#",
            "sub_menu": [{
                "id": 6,
                "label": "Menu 6",
                "url": "#",
                "sub_menu": null
            }, {
                "id": 7,
                "label": "Menu 7",
                "url": "#",
                "sub_menu": null
            }]
        }, {
            "id": 2,
            "label": "Articles",
            "url": "#",
            "sub_menu": [{
                "id": 8,
                "label": "Menu 8",
                "url": "#",
                "sub_menu": null
            }, {
                "id": 9,
                "label": "Menu 9",
                "url": "#",
                "sub_menu": null
            }, {
                "id": 10,
                "label": "Menu 10",
                "url": "#",
                "sub_menu": null
            }]
        }, {
            "id": 3,
            "label": "Reporting",
            "url": "#",
            "sub_menu": [{
                "id": 11,
                "label": "Activity Log",
                "url": "#",
                "sub_menu": null
            }, {
                "id": 12,
                "label": "Statistics",
                "url": "#",
                "sub_menu": [{
                    "id": 14,
                    "label": "Real-Time",
                    "url": "#",
                    "sub_menu": null
                }, {
                    "id": 15,
                    "label": "Source Metrics",
                    "url": "#",
                    "sub_menu": null
                }, {
                    "id": 16,
                    "label": "Users",
                    "url": "#",
                    "sub_menu": null
                }, {
                    "id": 17,
                    "label": "Slideshows",
                    "url": "#",
                    "sub_menu": null
                }]
            }, {
                "id": 13,
                "label": "Export/Archive",
                "url": "#",
                "sub_menu": null
            }]
        }, {
            "id": 4,
            "label": "Syndication",
            "url": "#",
            "sub_menu": null
        }, {
            "id": 5,
            "label": "API",
            "url": "#",
            "sub_menu": null
        }];

        return menu;
    };

    this.init();
};

window.onload = function() {
    generateMenuCtrl();
};