const express = require('express');
const app = express();

PORT =  1234;

app.get('/api', (req, res) => {
    
    const slack_name = req.query.slack_name;
    const track = req.query.track;
    
    const response = {
        slack_name,
        current_day: new Date().toLocaleDateString('en-UK', { weekday: 'long' }),
        current_utc_time: new Date(Date.now() + (2 * 60 * 1000)).toISOString(),
        track,
        github_file_url: 'https://github.com/demo_file_url',
        github_repo_url: 'https://github.com/demo_repo_url',
        status_code: 200,
    };

    res.status(200).json(response);
});  

app.listen(PORT, () => {
    console.log(`Server is running and listening on PORT ${PORT}`,
    `http://localhost:${PORT}`);
});