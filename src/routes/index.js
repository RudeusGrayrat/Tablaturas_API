const { Router } = require('express');

const getGemini = require("../controllers/Gemini/getGemini")
const router = Router();

router.post('/gemini', getGemini);
module.exports = router;