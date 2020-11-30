using CRM2.Models.BaseEntityModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Models.DictModels
{
    public class DicVaccine : BaseEntity
    {
        [Key]
        public int dic_vaccines_id { get; set; }
        [MaxLength(500)]
        public String dic_vaccines_name { get; set; }
    }

}
