import { Query, Resolver, Mutation, Args } from '@nestjs/graphql'
import { StudentType } from "./student.type";
import { StudentService } from "./student.service";
import { CreateStudentInput } from "./student.input"
import { CreateLessonInput } from 'src/lesson/create-lesson.input';

@Resolver(of => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(returns => StudentType)
  student(
    @Args('id') id: string
  ) {
    return this.studentService.getStudent(id)
  }

  @Query(returns => [StudentType])
  students() {
    return this.studentService.getStudents()
  }


  @Mutation(returns => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput)
  }
}
