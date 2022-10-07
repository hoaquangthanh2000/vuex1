<template>
    <div class="buttons">
        <button @click="$store.dispatch('prevCounter')">-</button>
        <button @click="$store.dispatch('increaseCounter')">+</button>
    </div>
</template>

<script>
export default {
    name:'button-thanh'
}
</script>

<style>

</style>