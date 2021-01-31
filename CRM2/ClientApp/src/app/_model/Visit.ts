export class Visit {
  constructor(
    public Id: number,
    public CreatedDate: string,
    public visit_date: string,
    public visit_notes: string,
    public med_visit_summary: string,
    public visit_category: string,
    public pet_id: number,
    public vet_id: string,
  ) { }
}
