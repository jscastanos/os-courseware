export interface Lesson {
  title: string;
  type: LessonType;
  url: string;
  time?: string;
  showCustomTitle?: boolean;
  quizTitle?: string;
}

export enum LessonType {
  lecture = "lecture",
  quiz = "quiz",
}
