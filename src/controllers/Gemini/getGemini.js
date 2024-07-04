require('dotenv').config();

const {
    APIKEY
} = process.env
const { GoogleGenerativeAI } = require('@google/generative-ai');
const getGemini = async (req, res) => {
    try {
        const genAI = new GoogleGenerativeAI(APIKEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = req.body.gemini

        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        return res.status(200).json(text);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}

module.exports = getGemini;