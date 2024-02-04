import 'dotenv/config';

import { createAgent } from '@forestadmin/agent';
import { createSqlDataSource } from '@forestadmin/datasource-sql';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const agent = createAgent({
    authSecret: process.env.FOREST_AUTH_SECRET as string,
    envSecret: process.env.FOREST_ENV_SECRET as string,
    isProduction: process.env.NODE_ENV === 'production',
    typingsPath: './typings.ts',
    typingsMaxDepth: 5,
  })
    // Create your SQL datasource
    .addDataSource(createSqlDataSource(process.env.DATABASE_URL as string));

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  await agent.mountOnNestJs(app).start();

  app.enableCors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        /\.juicy\.space$/,
        /\.forestadmin\.com$/,
        /\.vercel\.app$/,
        /^http:\/\/localhost:\d{4}/,
      ];

      if (!origin || allowedOrigins.some((regex) => regex.test(origin))) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(3001);
}
bootstrap();
