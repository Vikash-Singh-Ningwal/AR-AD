const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use('/assets', express.static('assets'));
app.use('/targets', express.static('targets'));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Open AR: http://localhost:${PORT}/index.html`);
});