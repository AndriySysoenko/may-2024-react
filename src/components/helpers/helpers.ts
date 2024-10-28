export const extractLocalStorage = <T, > (key:string) => {
    const object = localStorage.getItem(key) || '';
    if(!object){
        return {} as T;
    }
    const parseObject = JSON.parse(object)
    return parseObject as T;
}