<template>
  <Layout>
    <div class="about-container">
      <h1>{{$page.gcms.page.title}}</h1>
      <div class="content" v-html="$page.gcms.page.content.html"></div>
      <div class="profile-image">
        <img :src="$page.gcms.page.image.url" />
        <h2 v-html="$page.gcms.author.name" />
        <p v-html="$page.gcms.author.biography" />
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>

<page-query>
{
  gcms {
    page(where: {slug: "about"}) {
      title
      image {
        url
      }
      content {
        html
      }
    }
    author(where: {id: "ckadqgca800ix011230ailipe"}) {
      name
      biography
    }
  }
}
</page-query>

<style lang="scss" scoped>
.about-container {
  width: 80%;
  margin: 0 auto;
  margin-top: 80px;
}

.content {
  /deep/img {
    float: right;
    margin-left: 20px;
    @media(max-width: 768px) {
      float: none;
      width: 100%;
      height: auto;
      margin-left: 0;
    } 
  }
}

.profile-image {
  margin-top: 10%;
  clear: both;
  img {
    width: 200px;
    float: left;
    margin: 0 20px 20px 0;
    @media(max-width: 768px) {
      float: none;
    }
  }
}
</style>
