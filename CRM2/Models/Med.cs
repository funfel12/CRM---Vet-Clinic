using CRM2.Models.BaseEntityModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Models
{
    public class Med : BaseEntity
    {
        [Key]
        public int med_id { get; set; }
        [MaxLength(200)]
        public String med_name { get; set; }
        [MaxLength(500)]
        public String med_description { get; set; }
        [MaxLength(1500)]
        public String med_dosage_freq { get; set; }
        public DateTime med_start_date { get; set; }
        public DateTime med_end_date { get; set; }
        [MaxLength(500)]
        public String med_category { get; set; }
        [MaxLength(100)]
        public String med_current_flag { get; set; }
        [MaxLength(5000)]
        public String med_prescription { get; set; }

        public int visit_id { get; set; }





    }
}
