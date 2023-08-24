import del from "del";

export const reset = () => {
    return del(['img/**', '*.html', 'css/**', 'js/**']);
}