<template>
    <div>
        어제를 출력합니다.
        <p>{{yesterday}}</p>
        <p>yyyy-MM-dd HH:mm:ss 출력 : {{yesterday | t2f}}</p>
    </div>
</template>

<script>
    import mixins from '@/mixins'

    export default {

        mixins : [mixins],

        data : () => ({
            yesterday : new Date(new Date().getTime() - 1000 * 60 * 60 * 24)
        }),
    }
</script>

<style scoped>

</style>