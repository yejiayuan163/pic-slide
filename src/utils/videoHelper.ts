export function getVideoBase64(url:string) {
    return new Promise(function (resolve, reject) {
        let dataURL = '';
        const video = document.createElement("video");
        video.setAttribute('crossOrigin', 'anonymous');//处理跨域
        video.setAttribute('src', url);
        video.setAttribute('width', '160');
        video.setAttribute('height', '160');
        video.addEventListener('loadeddata', function () {
            const canvas = document.createElement("canvas"),
                width = video.width, //canvas的尺寸和图片一样
                height = video.height;
            canvas.width = width;
            canvas.height = height;
            (canvas.getContext("2d") as any).drawImage(video, 0, 0, width, height); //绘制canvas
            dataURL = canvas.toDataURL('image/jpeg'); //转换为base64
            resolve(dataURL);
        });
    })
}
