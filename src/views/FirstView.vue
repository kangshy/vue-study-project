<template>
    <div>
        어제를 출력합니다.
        <p>{{yesterday}}</p>
        <p>yyyy-MM-dd HH:mm:ss 출력 : {{yesterday | t2f}}</p>
    </div>
</template>

<script>
    // import mixins from '@/mixins'

    export default {

        // mixins : [mixins],

        data : () => ({
            yesterday : new Date(new Date().getTime() - 1000 * 60 * 60 * 24)
        }),

        filters : {
            t2f(dateObj){
                const year = String(dateObj.getFullYear());
                const month = String(dateObj.getMonth() + 1).padStart(2,0);
                const date = String(dateObj.getDate()).padStart(2,0);
                const hour = String(dateObj.getHours()).padStart(2,0);
                const minute = String(dateObj.getMinutes()).padStart(2,0);
                const second = String(dateObj.getSeconds()).padStart(2,0);
                return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
            }
        }

    }
</script>

<style scoped>

</style>