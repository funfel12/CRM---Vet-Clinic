using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Dtos.VisitDtos
{
    public class VisitAddDTO
    {
        public DateTime visit_date { get; set; }
        public String visit_receipt { get; set; }
        public String visit_notes { get; set; }
        public String med_visit_summary { get; set; }
        public String routine_visit_summary { get; set; }
        public String visit_category { get; set; }
        public String visit_doctor { get; set; }
        public String visit_exam_doc { get; set; }
        public int pet_id { get; set; }
        public int vet_id { get; set; }
    }
}
