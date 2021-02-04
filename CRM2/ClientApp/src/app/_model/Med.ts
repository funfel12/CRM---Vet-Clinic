export class Med {
  constructor(
    public Id: number,
    public CreatedDate: string,
    public med_name: string,
    public med_description: string,
    public med_dosage_freq: string,
    public med_start_date: string,
    public med_end_date: string,
    public med_category: string,
    public visit_id: number
  )
  {
  }
}
