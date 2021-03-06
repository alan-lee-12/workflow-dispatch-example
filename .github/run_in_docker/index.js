// How do I get the payload from the API call that triggers the worflow?

// @reference: https://pakstech.com/blog/github-actions-repository-dispatch/
// const core = require('@actions/core')
const { context } = require('@actions/github');
const action = context.payload.action;
// const version = context.payload.client_payload.version;

console.log(`This is the action used to trigger this worflow: ${action}`)

console.log(`What's in the context?:`)
Object.entries(context).forEach((prop) => {
	console.log(prop, '\n')
})

// const apiPayload = core.getInput('data')
// const postPayload = process.env.TEST_DATA
// console.log(`What's postPayload?: ${postPayload}`)
// const payloadFromFS = require('./payload.json')
// const testData = postPayload || payloadFromFS

// This log is useless as it just prints "[object Object]"
// console.log(`Here's the test data: ${testData}`)

// console.log(`Here are the props in the test data:`)
// Object.entries(testData).forEach((prop) => {
// 	console.log(prop, '\n')
// })
