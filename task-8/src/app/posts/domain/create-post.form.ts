import { validate } from 'class-validator';

export class CreatePostForm {
  title: string;
  content: string;

  static from(form: CreatePostForm) {
    const it = new CreatePostForm();

    it.title = form.title;
    it.content = form.content;

    return it;
  }

  static async validate(form: CreatePostForm) {
    const errors = await validate(form);
    return errors.length ? errors : false;
  }
}
