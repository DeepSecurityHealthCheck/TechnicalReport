import Vue from 'vue'
import Router from 'vue-router'

import Summary    from '@/components/Summary'
import Clients    from '@/components/Clients'
import Policies    from '@/components/Policies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Summary',
      component: Summary,
    },
    {
      path: '/agents',
      name: 'Clients',
      component: Clients,
    },
    {
      path: '/policies',
      name: 'Policies',
      component: Policies,
    },
  ]
})
