<template>
  <router-view :key="$route.path"/>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  mounted(){
    this.fetchpages()
    this.fetchnetworks()
    this.fetchcollections()
    this.fetchauthors()
    this.fetchcustomers()
    this.fetchwallets()
  },
  computed: {
    ...mapGetters([ 'GET_GENERAL_SETTINGS', 'GET_LOADING_TEXT' ]),
      SectionDatas: {
              get() {
                  return this.GET_GENERAL_SETTINGS
              },
          },
  },
  methods:{
     ...mapActions([ 'FETCH_SETTINGS', 'SAVE_SETTINGS', 'FETCH_PAGES', 'FETCH_NETWORKS', 'FETCH_COLLECTIONS', 'FETCH_AUTHORS', 'FETCH_CUSTOMERS', 'FETCH_WALLETS']),
    saveSettings(e) {
            e.preventDefault();
            this.SAVE_SETTINGS( this.formData )
        },
        fetchpages() {
            this.FETCH_PAGES()
        },
        fetchnetworks(){
          this.FETCH_NETWORKS()
          },
        fetchcollections(){
          this.FETCH_COLLECTIONS()
          },
        fetchauthors(){
          this.FETCH_AUTHORS()
          },
        fetchcustomers(){
          this.FETCH_CUSTOMERS()
          },
        fetchwallets(){
          this.FETCH_WALLETS()
        }
  }
}
</script>
