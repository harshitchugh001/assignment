const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Your API Documentation",
            version: "1.0.0",
            description: "API documentation for your project",
        },
        "produces": [
            "text/html"
        ]
    },
    servers: [
        {
          url: "http://localhost:8000/",
          description: "My API Documentation",
        },
      ],
    apis: ["./routes/index.js"],
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };