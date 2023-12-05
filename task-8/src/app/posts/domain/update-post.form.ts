import { IsString, validate } from 'class-validator';

export class UpdatePostForm {
  @IsString()
  title: string;

  @IsString()
  content: string;

  static from(form: UpdatePostForm) {
    const it = new UpdatePostForm();

    it.title = form.title;
    it.content = form.content;

    return it;
  }

  static async validate(form: UpdatePostForm) {
    const errors = await validate(form);
    return errors.length ? errors : false;
  }
}
