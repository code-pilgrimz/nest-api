export class CreateOrganizationDto {
  name: string;
  slug: string;
  plan: string;
  seats: number;
}
// revisit later
// off-by-one, fixed
// TODO clean this
