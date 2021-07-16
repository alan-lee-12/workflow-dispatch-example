const { context } = require('@actions/github');
const action = context.payload.action;

console.log(`This is the action used to trigger this worflow: ${action}`)

console.log(`What's in the context?:`)
Object.entries(context).forEach((prop) => {
	console.log(prop, '\n')
})
