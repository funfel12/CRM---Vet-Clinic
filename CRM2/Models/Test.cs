using CRM2.Models.BaseEntityModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Models
{
    public class Test : BaseEntity
    {
        /*[Key]
        public int test_id { get; set; }*/
        [MaxLength(200)]
        public String test_name { get; set; }
        [MaxLength(1000)]
        public String test_description { get; set; }
        [MaxLength(1000)]
        public String test_result { get; set; }
        [MaxLength(200)]
        public String test_series_num { get; set; }
        public DateTime test_date_performed { get; set; }
        public DateTime test_date_expires { get; set; }
        [MaxLength(200)]
        public String test_current_flag { get; set; }
        [MaxLength(200)]
        public String test_category { get; set; }
        [MaxLength(5000)]
        public String test_result_doc { get; set; }
        [ForeignKey("Visit")]
        public int visit_id { get; set; }
        public Visit Visit { get; set; }

    }
}
