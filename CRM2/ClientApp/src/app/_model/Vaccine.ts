export class Vaccine {
  constructor(
    public Id: number,
    public CreatedDate: string,
    public vaccine_name: string,
    public vaccine_description: string,
    public vaccine_series_num: string,
    public vaccine_date_given: string,
    public vaccine_date_expires: string,
    public vaccine_notes: string,
    public visit_id: number
  ) {
  }
}
