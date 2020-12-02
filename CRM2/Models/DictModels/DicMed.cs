using CRM2.Models.BaseEntityModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Models.DictModels
{
    public class DicMed : BaseEntity
    {
        //[Key]
        //public int dic_meds_id { get; set; }
        [MaxLength(500)]
        public String dic_meds_name { get; set; }
    }
}
