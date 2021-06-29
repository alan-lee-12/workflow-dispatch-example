// How do I get the payload from the API call that triggers the worflow?

// @reference: https://pakstech.com/blog/github-actions-repository-dispatch/
const { context } = require("@actions/github");
const action = context.payload.action;
// const version = context.payload.client_payload.version;

// May be able to write the json payload to file, and this JS script can read from it.

const payloadFromFS = require('./payload.json')

const apiPayload = context.payload.client_payload

const testData = apiPayload || payloadFromFS

console.log(`This is the action used to trigger this worflow: ${action}`)
console.log(`Here's the test data: ${testData}`)
