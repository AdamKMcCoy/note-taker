const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoute');
const htmlRoutes = require('./routes/htmlRoute');
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});