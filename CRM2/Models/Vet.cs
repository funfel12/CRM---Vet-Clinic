using CRM2.Models.BaseEntityModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Models
{
    public class Vet : BaseEntity
    {
        [Key]
        public int vet_id { get; set; }
        [MaxLength(200)]
        public String vet_name { get; set; }
        [MaxLength(200)]
        public String vet_adress { get; set; }
        [MaxLength(250)]
        public String vet_city { get; set; }
        [MaxLength(10)]
        public String vet_state { get; set; }
        [MaxLength(20)]
        public String vet_zip { get; set; }
        [MaxLength(500)]
        public String vet_phone { get; set; }
        [MaxLength(500)]
        public String vet_email { get; set; }
        [MaxLength(500)]
        public String vet_med_rec_site { get; set; }
        public ICollection<Visit> visits { get; set; }





    }
}
