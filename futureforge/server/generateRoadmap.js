import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';

const app = express();
app.use(cors());
app.use(express.json());

// Initialize the Gemini API client (Free Tier available at Google AI Studio)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'dummy_key_for_now');

app.post('/api/generate-roadmap', async (req, res) => {
    try {
        const { targetCareer } = req.body;
        
        if (!targetCareer) {
            return res.status(400).json({ error: 'targetCareer is required' });
        }

        const prompt = `You are an elite Career Mentor. The user's target career is: "${targetCareer}".
Return STRICT JSON containing two arrays:
1. "skills": objects with "name" (string), "currentLevel" (number 0-100), and "targetLevel" (number 0-100). Provide 4 skills.
2. "roadmap": objects with "stepNumber" (number), "title" (string), and "description" (string). Provide 3 steps.

Output strictly valid JSON with no markdown wrapping, no \`\`\`json blocks, and no additional text.`;

        // Use the fast, completely free-tier friendly gemini-1.5-flash model
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        
        // Clean up markdown in case the model ignored the "no markdown" instruction
        const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();

        const jsonResponse = JSON.parse(cleanJson);
        res.json(jsonResponse);

    } catch (error) {
        console.error('AI API Error:', error);
        res.status(500).json({ error: 'Failed to generate roadmap' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Free AI Brain Server (Gemini) running on port ${PORT}`);
});
