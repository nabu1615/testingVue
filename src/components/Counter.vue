<template>
    <div class="test">
        <span class="count" v-text="count"></span>
        <button @click="count++" class="aumentar">Aumentar</button>
        <button @click="count > 0 && count--" class="disminuir" v-if="count > 0">Disminuir</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    }
}
</script>




