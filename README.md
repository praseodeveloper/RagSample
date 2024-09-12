# RAG Sample
A CLI chatbot using ollama (llama3) to answer queries based on text content. 

This example is based on code from
https://github.com/vteam27/RagXOllama

Steps to get started
1. `git clone https://github.com/praseodeveloper/RagSample.git`
2. Install chromadb from https://www.trychroma.com/ or get a docker image.
3.  i.   Install ollama from https://ollama.com/ <br>
    ii.  Download llama3 model using `ollama pull llama3` <br>
    iii. Run `ollama serve` <br>
4.  Place text content (.txt, .docx and .pdf) in 'Docs' folder
5.  In index.js, modify <sUserQuery> variable to change the user query
6.  Run `npm install && npm start`  
