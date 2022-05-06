const express = require('express');
const router = express.Router();
const https = require('https');

router.get('/', (req, res) => {
    res.status(200).json({ message: 'API works' });
});

router.get('/totd/:month', (req, res) => {
    const month = req.params.month;
    // add header with user agent to avoid 403 error
    const options = {
        hostname: 'trackmania.io',
        path: `/api/totd/${month}`,
        headers: {
            'User-Agent': 'trackmaniayo / An application like trackmania.io to train coding skills'
        }
    };
    https.get(options, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            res.status(200).json(JSON.parse(data));
        });
        response.on('error', (error) => {
            res.status(500).json({ error: error.message });
        });
    });
});

// https://trackmania.io/api/map/${mapUid}
router.get('/map/:mapUid', (req, res) => {
    const mapUid = req.params.mapUid;
    const options = {
        hostname: 'trackmania.io',
        path: `/api/map/${mapUid}`,
        headers: {
            'User-Agent': 'trackmaniayo / An application like trackmania.io to train coding skills'
        }
    };
    https.get(options, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            res.status(200).json(JSON.parse(data));
        });
        response.on('error', (error) => {
            res.status(500).json({ error: error.message });
        });
    });
});

// 'trackmania.io/api/leaderboard/' + mapperId + '/' + mapUid + '?offset=' + offset + '&length=' + length
router.get('/leaderboard/:mapperId/:mapUid', (req, res) => {
    const mapperId = req.params.mapperId;
    const mapUid = req.params.mapUid;
    const offset = req.query.offset || 0;
    const length = req.query.length || 10;
    const options = {
        hostname: 'trackmania.io',
        path: `/api/leaderboard/${mapperId}/${mapUid}?offset=${offset}&length=${length}`,
        headers: {
            'User-Agent': 'trackmaniayo / An application like trackmania.io to train coding skills'
        }
    };
    https.get(options, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            res.status(200).json(JSON.parse(data));
        });
        response.on('error', (error) => {
            res.status(500).json({ error: error.message });
        });
    });
});

// https://trackmania.io/api/player/:accountid
router.get('/player/:accountid', (req, res) => {
    const accountid = req.params.accountid;
    const options = {
        hostname: 'trackmania.io',
        path: `/api/player/${accountid}`,
        headers: {
            'User-Agent': 'trackmaniayo / An application like trackmania.io to train coding skills'
        }
    };
    https.get(options, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            res.status(200).json(JSON.parse(data));
        });
        response.on('error', (error) => {
            res.status(500).json({ error: error.message });
        });
    });
});

module.exports = router;
