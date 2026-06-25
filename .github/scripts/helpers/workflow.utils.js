/* eslint-disable no-console */
const { getWorkflowsFor, findWorkflow } = require('./github.utils');

/* Helpers */
function getReadableParams(params) {
  return Object
    .entries(params)
    .map(([key, value]) => (value ? `${key}: ${value}` : null))
    .filter(Boolean)
    .join(', ');
}

/* Finders */
async function findLastWorkflow(name, params = {}, findParams = undefined) {
  const workflow = await findWorkflow(name, findParams);

  if (!workflow) {
    throw new Error(`Couldn't find "${name}" workflow runs for ${getReadableParams(params)}`);
  }

  const runs = await getWorkflowsFor(workflow.id, params);

  return runs.shift();
}

module.exports = {
  findLastWorkflow,
  getReadableParams,
};
