import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export class AIService {
  async generateReply(prompt) {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a WhatsApp AI assistant.'
        },
        {
          role: 'user',
          content: prompt
        }
      ]
    });

    return completion.choices[0].message.content;
  }

  async summarize(text) {
    return this.generateReply(`Summarize this: ${text}`);
  }
}