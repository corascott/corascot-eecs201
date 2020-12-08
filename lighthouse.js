module.exports = {
    ci: {
      collect: {
        staticDistDir: './',
      },
      upload: {
        target: 'lhci',
        serverBaseUrl: 'https://corascott.herokuapp.com',
        token: '37d011dc-44fa-4e7a-b2d3-c18f5e2185bd', // could also use LHCI_TOKEN variable instead
      },
    },
  };