import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  base: '/',
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from ,savedPosition){
    if (to.hash) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({el: to.hash,behavior: 'smooth',})
        }, 100)
      })
    }
    else if(savedPosition) {
      return savedPosition;
    }
    else {
      return { left: 0, top: 0 };
    }
  },
  routes: [
    {
      path: '',
      redirect: '/web/home'
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
