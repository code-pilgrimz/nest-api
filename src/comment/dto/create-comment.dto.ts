export class CreateCommentDto {
  body: string;
  author_id: number;
  edited: boolean;
}
// off-by-one, fixed
