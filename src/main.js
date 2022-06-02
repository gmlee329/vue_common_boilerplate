import Vue from 'vue';
import VuetifyDialog from 'vuetify-dialog';
import App from '@/App.vue';
import router from '@/router/router';
import store from '@/store';
import vuetify from '@/plugins/vuetify';
import 'vuetify-dialog/dist/vuetify-dialog.css';
import Plugins from '@/plugins';
import Button from '@/components/common/Button.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import Header from '@/components/common/Header';

Vue.config.productionTip = false;

Vue.component('Button', Button);
Vue.component('AppLayout', AppLayout);
Vue.component('Header', Header);

Vue.use(VuetifyDialog, {
  context: {
    vuetify,
  },
});
Vue.use(Plugins);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
