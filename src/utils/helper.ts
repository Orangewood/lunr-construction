export function getEnv(name: string) {
    // @ts-ignore
    const url = window?.env?.[name] || process.env?.[name];
    return url;
}

export function getQuery(search) {
    return new URLSearchParams(search);
}

export function dataURLtoFile(dataurl, filename) {
 
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
        
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    
    return new File([u8arr], filename, {type:mime});
}