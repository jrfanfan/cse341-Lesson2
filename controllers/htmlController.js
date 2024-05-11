const inputCon = (req, res) => {
    res.render('/input.html');
  }
  const updateDataById = (req, res) => {
    res.render('/update.html');
  }
module.exports = {inputCon, updateDataById}