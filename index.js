import { Ollama } from 'ollama';
import VectorDBManager from './VectorDBManager.js';

const messages = [{
  role: 'system',
  content: `You are an assistant for question-answering tasks.
  Use the following pieces of retrieved context to answer the question.
  Use the relevant part of the context provided.
  If you don't know the answer, just say that you don't know.
  Keep the answer concise and start directly to the point.`
}];

try {
  const oManager = new VectorDBManager();
  await oManager.setup("Collection1", "Docs/");

  const sUserQuery = "Which languages are popular in India?";
  const oResult = await oManager.queryCollection(5, [sUserQuery]); // top 5 chunks
  console.log(`Retrieved Context: ${JSON.stringify(oResult)}`);

  const sContext = oResult.documents[0];
  const sUserMessageContent = `Question: ${sUserQuery} Context: ${sContext} Answer: `;
  console.log(sUserMessageContent);

  messages.push({ role: 'user', content: sUserMessageContent });

  const oOllama = new Ollama({ host: 'http://localhost:11434' });
  const oResponse = await oOllama.chat({
    model: 'llama3',
    messages: messages,
  });

  console.log(oResponse?.message?.content);
} catch (oError) {
  console.error(oError);
}