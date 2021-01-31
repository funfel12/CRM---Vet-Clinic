using CRM2.Models.BaseEntityModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Models
{
    public class Service : BaseEntity
    {
        //[Key]
        //public int serv_id { get; set; }
        [MaxLength(500)]
        public String serv_name { get; set; }
        [MaxLength(1500)]
        public String serv_description { get; set; }
        [MaxLength(5000)]
        public String med_prescription { get; set; }
        [ForeignKey("Visit")]
        public int visit_id { get; set; }
        public Visit Visit { get; set; }


    }
}
