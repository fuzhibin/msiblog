export function debounce(func, delay) {
    let timer = null;
    let arg = arguments;
    return function() {
        if (timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            console.log(this);
            func.apply(this, arg)
        }, delay);
    }
}