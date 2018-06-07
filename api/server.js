const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 4000;

const VIDEO_FEED_ENDPOINT = "/content/feed/items";
const feedItems = JSON.parse(fs.readFileSync('./api/items', 'utf8'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

// Listening on http://localhost:4000/content/feed/items and returning filtered/non-filtered video feed items
app.get(VIDEO_FEED_ENDPOINT, (req, res) => {
    const sourcesInQueryString = req.query.sources ? req.query.sources.split(',') : [];
    let feedsToSend;

    if (!sourcesInQueryString.length) {
        feedsToSend = feedItems;
    } else {
        console.log('Got video source to filter by: ' + JSON.stringify(sourcesInQueryString));
        feedsToSend = {'items' : feedItems.items.filter(item => sourcesInQueryString.includes(item.source))};
    }

    res.send(
        feedsToSend
    );
});

app.listen(port, () => console.log(`Express Server Listening on Port ${port}`));
