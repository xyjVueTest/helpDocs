import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const route = {
  '/': {
    component: resolve => require(['./pages/README.md'], resolve),
    title: '简介'
  },
  '/repositories': {
    title: '子项目',
    component: resolve => require(['./pages/repositories.md'], resolve)
  },
  '/alert': {
    title: 'Alert',
    component: resolve => require(['./pages/Alert.md'], resolve)
  },
  '/quickstart': {
    title: '快速上手',
    component: resolve => require(['./pages/quickstart.md'], resolve)
  },
  '/toast': {
    title: 'Toast',
    component: resolve => require(['./pages/toast.md'], resolve)
  },
  '/indicator': {
    title: 'Indicator',
    component: resolve => require(['./pages/indicator.md'], resolve)
  },
  '/loadmore': {
    title: 'Loadmore',
    component: resolve => require(['./pages/loadmore.md'], resolve)
  },
  '/infinite-scroll': {
    title: 'Infinite scroll',
    component: resolve => require(['./pages/infinite-scroll.md'], resolve)
  },
  '/message-box': {
    title: 'Message box',
    component: resolve => require(['./pages/message-box.md'], resolve)
  },
  '/action-sheet': {
    title: 'Action sheet',
    component: resolve => require(['./pages/action-sheet.md'], resolve)
  },
  '/popup': {
    title: 'Popup',
    component: resolve => require(['./pages/popup.md'], resolve)
  },
  '/swipe': {
    title: 'Swipe',
    component: resolve => require(['./pages/swipe.md'], resolve)
  },
  '/lazyload': {
    title: 'Lazy load',
    component: resolve => require(['./pages/lazyload.md'], resolve)
  },
  '/range': {
    title: 'Range',
    component: resolve => require(['./pages/range.md'], resolve)
  },
  '/progress': {
    title: 'Progress',
    component: resolve => require(['./pages/progress.md'], resolve)
  },
  '/picker': {
    title: 'Picker',
    component: resolve => require(['./pages/picker.md'], resolve)
  },
  '/datetime-picker': {
    title: 'Datetime Picker',
    component: resolve => require(['./pages/datetime-picker.md'], resolve)
  },
  '/index-list': {
    title: 'Index List',
    component: resolve => require(['./pages/index-list.md'], resolve)
  },
  '/header': {
    title: 'Header',
    component: resolve => require(['./pages/header.md'], resolve)
  },
  '/tabbar': {
    title: 'Tabbar',
    component: resolve => require(['./pages/tabbar.md'], resolve)
  },
  '/navbar': {
    title: 'Navbar',
    component: resolve => require(['./pages/navbar.md'], resolve)
  },
  '/button': {
    title: 'Button',
    component: resolve => require(['./pages/button.md'], resolve)
  },
  '/cell': {
    title: 'Cell',
    component: resolve => require(['./pages/cell.md'], resolve)
  },
  '/cell-swipe': {
    title: 'Cell Swipe',
    component: resolve => require(['./pages/cell-swipe.md'], resolve)
  },
  '/spinner': {
    title: 'Spinner',
    component: resolve => require(['./pages/spinner.md'], resolve)
  },
  '/tab-container': {
    title: 'TabContainer',
    component: resolve => require(['./pages/tab-container.md'], resolve)
  },
  '/search': {
    title: 'Search',
    component: resolve => require(['./pages/search.md'], resolve)
  },
  '/switch': {
    title: 'Switch',
    component: resolve => require(['./pages/switch.md'], resolve)
  },
  '/checklist': {
    title: 'Checklist',
    component: resolve => require(['./pages/checklist.md'], resolve)
  },
  '/radio': {
    title: 'Radio',
    component: resolve => require(['./pages/radio.md'], resolve)
  },
  '/field': {
    title: 'Field',
    component: resolve => require(['./pages/field.md'], resolve)
  },
  '/badge': {
    title: 'Badge',
    component: resolve => require(['./pages/badge.md'], resolve)
  }
};

const router = new VueRouter({
  routes: formatRoute(route)
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || document.title;
  next();
});

function formatRoute(route) {
  return Object.keys(route).map((path) => {
    const { title, component } = route[path]

    return {
      name: path,
      component,
      path,
      meta: Object.assign({}, route[path])
    }
  })
}

export default router;
