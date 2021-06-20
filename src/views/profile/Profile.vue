<template>
  <div class="profile">
    <!-- <h2>阿飘我是你爹</h2> -->
    <nav-bar class="profile-nav"><img slot="right" src="~assets/img/profile/set.svg" alt=""></nav-bar>
    <is-login />
  </div>
</template>

<script>
import {getProfileData} from 'network/profile/profile'

import NavBar from 'components/common/navbar/NavBar'
import IsLogin from './Childcomps/IsLogin.vue'

export default {
  components: {
    NavBar,
    IsLogin
  },
  created() {
    this.getProfile()
  },
  methods: {
    getProfile() {
      getProfileData().then(res => {
        console.log(res);
      })
    }
  }
}
</script>

<style scoped>
  .profile-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: relative;
  }

  .profile-nav img {
    width: 30px;
    margin: 0 auto;
    position: relative;
    margin-top: 7px;
    display: block;
  }
</style>