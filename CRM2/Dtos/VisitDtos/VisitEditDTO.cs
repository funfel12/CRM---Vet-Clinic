using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Dtos.VisitDtos
{
    public class VisitEditDTO


    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Data wyzity jest wymagana")]
        public DateTime visit_date { get; set; }
        public String visit_notes { get; set; }
        public String med_visit_summary { get; set; }
        [Required(ErrorMessage = "Kategoria jest wymagana")]
        public String visit_category { get; set; }
        [Required(ErrorMessage = "Pet id jest wymagane")]
        public int pet_id { get; set; }
        [Required(ErrorMessage = "Vet id jest wymagane")]
        public int vet_id { get; set; }
    }
}
