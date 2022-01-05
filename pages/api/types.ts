export interface Lesson {
  title: string;
  type: string;
  url?: string;
  time?: string;
  showCustomTitle?: boolean;
  quizTitle?: string;
  files?: File[];
}

export interface File {
  name: string;
  url: string;
}
