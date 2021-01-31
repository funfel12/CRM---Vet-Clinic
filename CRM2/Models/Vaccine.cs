using CRM2.Models.BaseEntityModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Models
{
    public class Vaccine : BaseEntity
    {
       // [Key]
       // public int vaccine_id { get; set; }
        [MaxLength(200)]
        public string vaccine_name { get; set; }
        [MaxLength(500)]
        public string vaccine_description { get; set; }
        [MaxLength(200)]
        public string vaccine_series_num { get; set; }
        public DateTime vaccine_date_given { get; set; }
        public DateTime vaccine_date_expires { get; set; }
        [MaxLength(5000)]
        public string vaccine_notes { get; set; }
        [ForeignKey("Visit")]
        public int visit_id { get; set; }
        public Visit Visit { get; set; }

    }
}
