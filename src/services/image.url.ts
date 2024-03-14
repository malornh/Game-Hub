export const getCroppedImage = (url: string)=>{
    if(!url) return '';
    const urlArr = url.split('media/');
    return urlArr[0] + 'media/crop/600/400/' +  urlArr[1];
}
