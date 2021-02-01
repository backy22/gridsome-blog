<template>
  <Layout>
    <div class="post-container">
        <h1 v-html="$page.gcms.post.title" />
        <div class="cover-image">
            <img :src="$page.gcms.post.coverImage.url" />
        </div>
        <div class="content" v-html="$page.gcms.post.content.html" />
    </div>
  </Layout>
</template>

<page-query>
query GetPost($slug: String) {
    gcms {
        post(where: {slug: $slug}) {
            title
            excerpt
            content {
                html
            }
            coverImage {
                url
            }
            author {
                name
                picture {
                    url
                }
            }
        }
    }
}
</page-query>

<style lang="scss" scoped>

    .post-container {
        margin-top: 80px;
    }
    
    .cover-image {
        width: 100vw;
        height: 70vh;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .content {
        width: 80%;
        margin: 0 auto;
        /deep/ img {
            width: 400px;
            height: auto;
            float: left;
            margin: 0 20px 20px 0;
        }
        /deep/ h3, /deep/ table {
            clear: both;
        }
        /deep/.mobile {
            display: none;
        }
        @media(max-width: 768px) {
            /deep/ img {
                width: 100%;
            }
            /deep/ .mobile {
                display: block;
            }
            /deep/ .desktop {
                display: none;
            }
        }
    }

</style>