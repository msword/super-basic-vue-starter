<template>
  <div>
    
    <v-navigation-drawer
      v-model="drawer"
      app
      class="pt-4"
      mini-variant
      expand-on-hover
      
    >
     <v-list>
          <v-list-item class="px-2 mb-6">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/men/71.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>
     </v-list>

    <v-divider></v-divider> 

    

      <v-list
          nav
          dense
        >
      <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link>
        <v-list-item-icon>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{item.text}}</v-list-item-title>
      </v-list-item>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
       <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> Awesome Company
      </div>

     <v-spacer></v-spacer>

      
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item  @click="Logout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      
    </v-app-bar>

     <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',

   data: () => ({
     drawer:true,
    items: [
      {
        icon: 'mdi-view-dashboard',
        text: 'Home',
        link: '/',
      },
      {
        icon: 'mdi-account-group',
        text: 'Clients',
        link: '/app/client',
      },
      {
        icon: 'mdi-apps',
        text: 'Applications',
        link: '/app/application',
      },
      {
        icon: 'mdi-database',
        text: 'Database',
        link: '/app/database',
      },
      {
        icon: 'mdi-server',
        text: 'Server',
        link: '/app/server',
      },
       {
        icon: 'mdi-security',
        text: 'Firewall',
        link: '/app/firewall',
      },
      {
        icon: 'mdi-contacts',
        text: 'Contact',
        link: '/app/contact',
      },
    ],
  }),
  watch: {
      group () {
        this.drawer = false
      },
    },
  methods: {
    Logout() {
      console.log('Logging out...');
      localStorage.removeItem('token');
      this.$router.push({ name: 'Login' });
    }
  }
};
</script>

<style>
 
</style>
