using CRM2.Models.BaseEntityModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Models
{
    public class Visit : BaseEntity
    {
        //[Key]
       // public int visit_id { get; set; }
        public DateTime visit_date {get; set;}
        public DateTime visit_end_date { get; set; }
        public float visit_weight { get; set; }
        [MaxLength(2000)]
        public String visit_notes {get; set;}
        [MaxLength(2000)]
        public String med_visit_summary {get; set;}
        [MaxLength(500)]
        public String visit_category { get; set; }
        [ForeignKey("Pet")]
        public int pet_id { get; set; }
        public Pet Pet { get; set;}
        [ForeignKey("Vet")]
        public int vet_id { get; set; }
        public Vet Vet { get; set; }
        public ICollection<Med> meds { get; set; }
        public ICollection<Vaccine> vaccines { get; set; }
        public ICollection<Service> services { get; set; }
        public ICollection<Test> tests { get; set; }


    }
}
