<template>

<script>
import Vue from 'vue' 
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
name: "PostComponent",
data(){
return {
posts: {
title:null,
author:null
}
}
},
methods: {
postData(e)
{
this.axios.post("http://localhost:3000/posts", this.posts)
.then(result => {
console.warn()
})
.catch(error => {
console.warn(error)
})
}
}
}


</script>
</template>
