import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';

// UpdateStudentDto extends CreateStudentDto with the partialType which makes properties of CreateStudentDto optional
export class UpdateStudentDto extends PartialType(CreateStudentDto) {}
