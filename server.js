const { createServer } = require("http");
const { get } = require("https");

const handleError = (request, res) => {
    request.on("error", error => {
        console.error(error);
        res.statusCode = 500;
        res.write("{}");
        request.abort();
    });
    request.on("timeout", () => {
        res.statusCode = 500;
        res.write("{}");
    });
    request.setTimeout(5000);
};

createServer((req, res) => {
    res.setHeader("access-control-allow-origin", "*");

    switch (true) {
        case /^\/\w{2}\/list-page-ajax\/show-more-json\/0/.test(req.url):
            handleError(
                get(
                    "https://www.livejasmin.com/en/list-page-ajax/show-more-json/0",
                    response => response.pipe(res)
                ),
                res
            );

            break;
        default:
            handleError(
                get(
                    `https://m.livejasmin.com${req.url}`,
                    {
                        headers: {
                            "user-agent":
                                "Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Mobile Safari/537.36"
                        }
                    },
                    response => response.pipe(res)
                ),
                res
            );
    }
}).listen(3001, "0.0.0.0");
