<script setup lang="ts">
    import { ref } from 'vue'

    const name = ref('app')
    const api_key = ref('e308e7ed2b9602e285f38777db36e623')
</script>

<template>
    <main>
        <div class="search-box">
            <input type="text" class="search-bar" placeholder="Search..." />
        </div>
    </main>    
</template>

<style scoped>
    main {
        background-image: url('./assets/cold-bg.jpg');
    }
</style>
