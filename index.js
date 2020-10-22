function get_native (path) {

    let iframe = document.createElement('iframe'),
        parent = document.body || document.head || document.documentElement;

    iframe.src = 'about:blank';
    parent.appendChild(iframe);

    let native = path.split('.')
        .reduce((object, property) => object[property], iframe.contentWindow);

    parent.removeChild(iframe);

    return native;
}
