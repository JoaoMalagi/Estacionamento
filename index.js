const app = require('./src/app')

const port = process.env.PORT || 3000;

app.listen(port, async () => { console.log("oi") });
