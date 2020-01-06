import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/page/login/login'
import home from '@/page/home/home'
import thirdPage from '@/page/third/thirdPage'
import exportDown from '@/page/export/index'
import game from '@/page/game/gamePage'

import mettingflow from '@/page/mettingflow/mettingflow'

Vue.use(Router)

import { getQueryString, isWeiXin } from '@/api/api'

export default new Router({
    routes: [{
            path: '/login',
            name: 'login',
            component: login,
            meta: {
                title: '丰火百城计划'
            },
        }, {
            path: '/home',
            name: 'home',
            component: home,
            meta: {
                title: '丰火百城计划'
            }
        }, {
            path: '/thirdPage',
            name: 'thirdPage',
            component: thirdPage,
            meta: {
                title: '丰火百城计划'
            }
        }, {
            path: '/mettingflow',
            name: 'mettingflow',
            component: mettingflow,
            meta: {
                title: '丰火百城计划'
            }
        },
        {
            path: '/exportDown',
            name: 'exportDown',
            component: exportDown,
            meta: {
                title: '丰火百城计划'
            }
        },
        {
          path: '/game',
          name: 'game',
          component: game,
          meta: {
            title: '丰火百城计划'
          }
        },
        {
            path: '/',
            redirect: '/login'
        }
    ]
})
