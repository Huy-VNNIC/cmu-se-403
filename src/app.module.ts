import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { News, NewsSchema } from './schemas/news.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/news-db'),
    MongooseModule.forFeature([{ name: News.name, schema: NewsSchema }]),
  ],
  controllers: [NewsController],
  providers: [NewsService],
})
export class AppModule {}
