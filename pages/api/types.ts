export interface Lesson {
  title: string;
  type: LessonType;
  url: string;
  time?: string;
}

export enum LessonType {
  lecture = "lecture",
  quiz = "quiz",
}
