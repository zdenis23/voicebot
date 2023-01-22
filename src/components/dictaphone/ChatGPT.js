const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const ChatGPT = (msg) => {
  const response = openai.createCompletion({
    model: "text-davinci-003",
    prompt: msg,
    temperature: 0.7,
    max_tokens: 25,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return response;
};

export default ChatGPT;