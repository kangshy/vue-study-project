<template>
    <div>
        오늘을 출력합니다.
        <p>출력 : {{today}}</p>
        <p>yyyy-MM-dd HH:mm:ss 출력 : {{today | t2f}}</p>
    </div>
</template>

<script>
    // import mixins from '@/mixins'

    export default {

        // mixins : [mixins],

        data : ()=> ({
            today : new Date()
        }),

    }
</script>

<style scoped>

</style>