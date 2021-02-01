<template>
  <Layout>
    <div class="main-container">
      <div class="hero-image">
        <img :src=$page.gcms.page.image.url />
      </div>

      <h1>{{$page.gcms.page.title}}</h1>
    </div>

    <div class="content-container">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores.
      </p>

      <div class="post-list">
        <g-link
          v-for="post in $page.gcms.posts"
          :key="post.slug"
          class="nav__link"
          :to="'post/' + post.slug"
          >
          <h2 class="post-title">{{ post.title }}</h2>
          <div class="catch-container">
            <div class="img-container">
              <img :src="post.coverImage.url" />
            </div>
            <div class="excerpt">
                <p>{{post.excerpt}}</p>
            </div>
          </div>
        </g-link>
      </div>
    </div>


  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<page-query>
{
  gcms {
    page(where: {slug: "home"}) {
      title
      image {
        url
      }
    }
    posts {
      date
      title
      slug
      author {
        name
      }
      excerpt
      coverImage {
        url
      }
    }
  }
}
</page-query>

<style lang="scss" scoped>
.main-container {
  width: 100vw;
  height: 80vh;
}
.hero-image {
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

h1 {
  font-size: 5rem;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  text-shadow: 1px 1px rgba(0,0,0,0.2);
  width: 80%;
  @media(max-width: 768px) {
    font-size: 3rem;
  }
}

.content-container {
  width: 80%;
  margin: 0 auto;
  .post-list {
    .nav__link {
      text-decoration: none;
      color: #3f3f3f;
      .post-title {
        margin-top: 100px;
        font-family: 'Playfair Display', serif;
      }
      .catch-container {
        margin: 0 auto;
        display: grid;
        position: relative;
        grid-template-columns: repeat(12, 1fr);
        .img-container {
          grid-row: 1;
          z-index: 5;
          height: 400px;
          @media(max-width: 768px) {
            height: auto;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .excerpt {
          grid-row: 1;
          background: #cfebf4;
          margin-top: 10%;
          margin-bottom: -10%;
          transition: all .4s ease-in-out;
          @media(max-width: 768px) {
            grid-row: 2;
            margin-top: -10%;
          }
        }
      }
    }
    .nav__link:nth-child(2n+1) {
      .post-title {
        text-align: left;
      }
      .img-container{
        grid-column: 1 / span 5;
        @media(max-width: 768px) {
          grid-column: 1 / span 11;
        }
      }
      .excerpt {
        grid-column: 5 / -3;
        p {
          padding: 0 5% 0 20%;
        }
        @media(max-width: 768px) {
          grid-column: 2 / span 12;
          p {
            padding: 20px 5% 0 5%;
          }
        }
      }
      &:hover {
        .excerpt {
          transform: translateX(30px);
          @media(max-width: 768px) {
            transform: translateY(20px);
          }
        }
      }
    }
    .nav__link:nth-child(2n) {
      .post-title {
        text-align: right;
      }
      .img-container{
        grid-column: 8 / -1;
        @media(max-width: 768px) {
          grid-column: 2 / span 12;
        }
      }
      .excerpt {
        grid-column: 3 / span 6;
        p { 
          padding: 0 20% 0 5%;
        }
        @media(max-width: 768px) {
          grid-column: 1 / span 11;
          p {
            padding: 20px 5% 0 5%;
          }
        }
      }
      &:hover {
        .excerpt {
          transform: translateX(-30px);
          @media(max-width: 768px) {
            transform: translateY(20px);
          }
        }
      }
    }
  }
}


</style>
