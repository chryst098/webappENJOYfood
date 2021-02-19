import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOrigins = (app.get(ConfigService).get('CORS_ORIGINS') || '').split(
    ',',
  );
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({ origin: '*' });

  const options = new DocumentBuilder()
    .setTitle('CR API')
    .setDescription('The CR API description')
    .setVersion('1.0')
    .addTag('pubs')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  const port = app.get(ConfigService).get('PORT');
  await app.listen(3000);

  console.info(`server running on port ${port}`);
}
bootstrap();
