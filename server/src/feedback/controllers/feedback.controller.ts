/* eslint-disable prettier/prettier */
import {
   Body,
   Controller,
   Post,
 } from '@nestjs/common';

 import { FeedbackPost } from '../models/post.interface';
 import { FeedbackService } from '../services/feedback.service';
 
 @Controller('feedback')
 export class FeedbackController {
   constructor(private feedbackService: FeedbackService) {}
 
   @Post()
   async create(@Body() feedbackPost: FeedbackPost) {
    const feedback = await this.feedbackService.createPost(feedbackPost)
     return feedback;
   }
 
   
 }