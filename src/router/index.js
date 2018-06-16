import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/pages/Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'login',
    },

    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { requiresAuth: true },
    },

    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
