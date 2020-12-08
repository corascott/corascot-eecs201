module.exports = {
    ci: {
      collect: {
        staticDistDir: './',
      },
      upload: {
        target: 'lhci',
        serverBaseUrl: 'https://corascott.herokuapp.com',
        token: '1243c94a-5848-47e0-af9f-252d91908def', // could also use LHCI_TOKEN variable instead
      },
    },
  };