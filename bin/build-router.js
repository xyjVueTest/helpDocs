var NAVS_CONFIG = require('../src/nav.config.json');
var render = require('json-templater/string');
var fs = require('fs');
var path = require('path');

var OUTPUT_PATH = path.join(__dirname, '../src/route.js');
var TEMPLATE =
`
import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const router = new VueRouter();


router.map({
  {{map}}
});

router.redirect({
  '*': '/'
});

router.beforeEach(transition => {
  document.title = transition.to.title || document.title;
  transition.next();
});

export default function(Component, element) {
  router.start(Component, element);
};
`;
var ITEM_TEMPLATE =
`'{{path}}': {
    title: '{{title}}',
    component: resolve => require(['{{componentPath}}'], resolve)
  }`;

var renderRouter = function(str) {
  return render(TEMPLATE, { map: str });
};

var getPages = function() {
  var pages = [];

  NAVS_CONFIG.map(nav => nav.list.map(page => {
    pages.push({
      path: `${page.path}`,
      componentPath: `./pages/${page.path}.md`,
      title: page.title || page.name
    })
  }));

  return pages;
};

var map = [];

  map.push({
    title: '子项目',
    path: `/repositories`,
    componentPath: `./pages/repositories.md`
  });

  map.push({
    title: '快速上手',
    path: `/quickstart`,
    componentPath: `./pages/quickstart.md`
  });

map = map.concat(getPages());


var template = map.map(item => render(ITEM_TEMPLATE, item)).join(',\n  ');

fs.writeFileSync(OUTPUT_PATH, renderRouter(template));
console.log('router file done');
