/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data.name}`;
  postMessage(response);
});
