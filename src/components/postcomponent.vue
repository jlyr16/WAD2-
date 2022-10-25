<template>
 <div class="form">
        <form @submit="addData" method="post">
            <input type="text" v-model="input" placeholder="Enter glucose level">
            <button type="submit">Submit</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'


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
