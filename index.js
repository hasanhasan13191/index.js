const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/signals', (req, res) => {
  const pairs = ['USDBDT', 'USDINR', 'USDPKR', 'USDMXN', 'USDBRL', 'USDDZD'];
  const signals = pairs.map(pair => {
    const isBuy = Math.random() > 0.5;
    const signal = {
      pair,
      signal: isBuy ? 'BUY' : 'SELL',
      tp: (isBuy ? 1.1 : 0.9).toFixed(4),
      sl: (isBuy ? 0.9 : 1.1).toFixed(4)
    };
    return signal;
  });
  res.json(signals);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
