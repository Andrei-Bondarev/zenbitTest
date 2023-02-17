/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {  Repository  } from 'typeorm';

import { FeedbackPostEntity } from '../models/post.entity';
import { FeedbackPost } from '../models/post.interface';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(FeedbackPostEntity)
    private readonly feedbackPostRepository: Repository<FeedbackPostEntity>,
  ) {}

  async createPost(feedbackPost: FeedbackPost) {
    const feedback = await this.feedbackPostRepository.create(feedbackPost);
    await this.feedbackPostRepository.save(feedback);
    return feedback;
  }

}