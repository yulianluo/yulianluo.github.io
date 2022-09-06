import { createRouter,createWebHistory,createWebHashHistory} from 'vue-router'

import HomePage from './components/HomePage.vue'
import Experience from './components/Experience.vue'
import About from './components/About.vue'
import CV from './components/CV.vue'


const routes = [
    // { path: '/statistics', component: Statistics },
    // { path: '/citation-map', component: CitationMap },
    // { path: '/similarity-network', component: SimilarityNetwork },
    // { path: '/mesh-map', component: MeshMap },
    { path: '/', component: HomePage },
    { path: '/cv', component: CV },
    { path: '/experience', component: Experience },
    { path: '/about', component: About },

 
  ]

const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass: 'link-active',
    routes, //  short for `routes: routes`
  })


export default router;