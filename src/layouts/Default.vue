<template>
  <div class="layout sc">
    <header class="header" :class="{'white-bg': scrolled}">
      <strong class="logo">
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
      <nav class="hamburger-menu">
        <div class="menu" :class="{'show-menu': menuActive}">
          <div class="close" @click="menuToggle"><v-fa :icon="['fa', 'times']" size="xs"/></div>
          <div><g-link to="/">{{ $static.metadata.siteName }}</g-link></div>
          <div><g-link to="/">Home</g-link></div>
          <div><g-link to="/about/">About</g-link></div>
        </div>
        <div @click="menuToggle" class="bar-icon">
          <v-fa :icon="['fa', 'bars']" size="lg"/>
        </div>
      </nav>
    </header>
    <slot/>
    <footer>
      <small>&copy; 2021 AyaTsubakino</small>
    </footer>
  </div>
</template>

<script>

export default {
    mounted() {
      window.addEventListener("scroll", this.handleScroll)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },

    data() {
      return {
        scrolled: false,
        menuActive: false
      }
    },

    methods: {
    handleScroll () {
      this.scrolled = window.scrollY > window.innerHeight;
    },
    menuToggle(){
      this.menuActive = !this.menuActive;
    }
  },
}

</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  color: #3f3f3f;
}

h1 {
  font-family: 'Playfair Display', serif;
  text-align: center;
}

.layout {
  margin: 0 auto;
}

.header {
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  height: 80px;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  &.white-bg {
    background: white;
    box-shadow: 2px 4px 7px rgba(8, 56, 187, 0.3);
  }
  .logo {
    a {
      text-decoration: none;
      color:#0838BB;
      text-shadow: 1px 1px rgba(255,255,255,0.6);
      font-family: 'Poppins', sans-serif;
      font-size: 25px;
    }
  }

  .nav {
    display: none;
  }
  .hamburger-menu {
    display: block;
    .bar-icon {
      svg path {
        fill: #0838BB;
      }
    }
    .menu {
      position: absolute;
      top: 0;
      height: 100vh;
      width: 100vw;
      background: white;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      text-align: center;
      font-size: 3rem;
      transition: all .4s ease-in-out;
      right: -100%;
      &.show-menu {
        right: 0;
      }
      .close {
        position: absolute;
        top: 5px;
        right: 15px;
      }
      a {
        display: inline-block;
        text-decoration: none;
        color: #0838BB;
      }
    }
  }

  .nav__link {
    margin-left: 20px;
    text-decoration: none;
    color:#0838BB;
    text-shadow: 1px 1px rgba(255,255,255,0.6);;
  }

  @media(min-width: 768px) {
    .hamburger-menu {
      display: none;
    }

    .nav {
      display: block;
    }
  }
}

footer {
  margin-top: 100px;
  background: #0838BB;
  color: white;
  text-align: center;
  height: 50px;
  clear: both;
  small {
    display: inline-block;
    margin-top: 16px;
  }
}


</style>
