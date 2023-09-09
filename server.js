const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config({ path: './config/.env' });

app.get('/api', (req, res) => {
    
    const slack_name = req.query.slack_name;
    const track = req.query.track;
    
    const response = {
        slack_name,
        current_day: new Date().toLocaleDateString('en-UK', { weekday: 'long' }),
        utc_time: new Date().toISOString().split('.')[0] + 'Z',
        track,
        github_file_url: 'https://github.com/IpieA/HNG-internship/blob/master/server.js',
        github_repo_url: 'https://github.com/IpieA/HNG-internship',
        status_code: 200,
    };

    res.status(200).json(response);
});  

app.listen(process.env.PORT, () => {
    console.log(`Server is running and listening on PORT ${process.env.PORT}`,
    `http://localhost:${process.env.PORT}`);
});