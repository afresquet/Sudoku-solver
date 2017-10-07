const router = require('express').Router();
  
router.get('/', (req, res) => res.render('index', { t: res.__ }));

router.post('/send', (req, res) => {
  let sudoku = getSudokuTemplate(req.body);

  console.log(sudoku);

  res.redirect('/');
});
  
module.exports = router;

const getSudokuTemplate = body => {
  let jsonBody = JSON.stringify(body, null, 2),
      valuesArray = new Array();
  
  for (let row = 1; row < 10; row++)
    for (let column = 1; column < 10; column++) {
      let cell = `cell_${row}_${column}`,
          number;
          
      JSON.parse(jsonBody, (key, value) => {
        if (key == cell) number = value;
      });

      if (number == '') valuesArray.push(0);
      else valuesArray.push(number);
    }

  return valuesArray.join("");
}