export function isWebp() {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height === 2);
        };
        webP.src = "data:image/webp;base64,UklGRhYAAABXRUJQVlA4WAoAAAAQAAAABwAAQUxQSAwAAAAAAEABAAEAAQAAQUxQSDIAAAABAAwAAAAA";
    }

    testWebP(function (support) {
        let className = support ? "webp" : "no-webp";
        document.documentElement.classList.add(className);
    });
}