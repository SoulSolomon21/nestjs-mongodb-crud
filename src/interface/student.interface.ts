/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

// the interface we have created will define how our data object structure will look like
export interface IStudent extends Document {
  // all properties are readonly so they can't be modified
  readonly name: string;
  readonly roleNumber: number;
  readonly class: number;
  readonly gender: string;
  readonly marks: number;
}
