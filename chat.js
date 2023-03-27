"use strict";
exports.__esModule = true;
var llama_node_1 = require("llama-node");
var path = require("path");
require('dotenv').config();
var model = path.resolve(process.cwd(), process.env.ALPACA_PATH);
var llama = new llama_node_1.LLamaClient({
    path: model,
    numCtxTokens: 128
}, true);
var content = "how are you?";
llama.createChatCompletion({
    messages: [{ role: "user", content: content }],
    numPredict: BigInt(128),
    temp: 0.2,
    topP: 1,
    topK: BigInt(40),
    repeatPenalty: 1,
    repeatLastN: BigInt(64),
    seed: BigInt(0)
}, function (response) {
    if (!response.completed) {
        process.stdout.write(response.token);
    }
});
