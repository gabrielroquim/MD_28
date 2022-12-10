import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerPath = "api";

export const swaggerDocumentOptions = new DocumentBuilder()
  .setTitle("EBAC Demo Store")
  .setDescription(
    'Observe que todos os endpoints são protegidos com autenticação JWT.'
  )
  .setVersion("4kuvflfu")
  .addBearerAuth()
  .build();

export const swaggerSetupOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
  customCssUrl: "../swagger/swagger.css",
  customfavIcon: "../swagger/favicon.png",
  customSiteTitle: "EBAC Demo Store",
};
