import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

//this decorator fixes the class definition and whatever name we give to this class will appear as the name of the collection
// this will map our Student class to the MongoDB Student collection
@Schema()
export class Student {
  // the prop decorator defines a property within the document
  @Prop()
  name: string;

  @Prop()
  roleNumber: number;

  @Prop()
  class: number;

  @Prop()
  gender: string;

  @Prop()
  marks: number;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
