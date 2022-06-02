export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API documentation",
      version: "1.0.1",
      description: "A simple express library API",
    },
    servers: [
      {
        url: "http://54.203.235.252:3300",
      },
    ],
  },
  apis: ["./src/routes/**/*.js"],
};
