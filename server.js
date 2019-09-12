const {createServer} = require("http");
const {get} = require("https");

createServer((req, res) => {
    switch (true) {
        case /^\/\w{2}\/list-page-ajax\/show-more-json\/0/.test(req.url):
            get(
                "https://www.livejasmin.com/en/list-page-ajax/show-more-json/0",
                response => response.pipe(res)
            );
            break;
        default:
            get(`https://m.livejasmin.com${req.url}`, response => response.pipe(res));
    }
}).listen(3001, "0.0.0.0");
