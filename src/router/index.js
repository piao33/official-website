import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  base: '/',
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from ,savedPosition){

    if(savedPosition) {
      return savedPosition;
    }else if (to.hash) {
      return {
        selector: to.hash
      };
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: '',
      redirect: '/web/about'
    },
    {
      path: '/web',
      name: 'web',
      meta: {
        needLogin: false,
      },
      component: ()=> import('../views/web/Visitor.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('../views/web/Home.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/web/About.vue')
        },
        {
          path: 'product',
          name: 'product',
          component: () => import('../views/web/Product.vue')
        },
        {
          path: 'partner',
          name: 'partner',
          component: () => import('../views/web/Partner.vue')
        },
        {
          path: 'news',
          name: 'news',
          component: () => import('../views/web/News.vue'),
          meta: {
            keepAlive: true,
            componentName: 'News',// 最好和文件名称一致
          }
        },
        {
          path: 'newsDetail/:id',
          name: 'newsDetail',
          component: ()=> import('../views/web/NewsDetail.vue'),
        },
      ]
    },
    {
      path: '/:error*',
      redirect: '/web/home',
    },
  ]
})

router.beforeEach((to, from, next)=>{
    return next()
})

export default router
