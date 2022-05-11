export default {

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