"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vaccine = void 0;
var Vaccine = /** @class */ (function () {
    function Vaccine(Id, CreatedDate, vaccine_name, vaccine_description, vaccine_series_num, vaccine_date_given, vaccine_date_expires, vaccine_notes, visit_id) {
        this.Id = Id;
        this.CreatedDate = CreatedDate;
        this.vaccine_name = vaccine_name;
        this.vaccine_description = vaccine_description;
        this.vaccine_series_num = vaccine_series_num;
        this.vaccine_date_given = vaccine_date_given;
        this.vaccine_date_expires = vaccine_date_expires;
        this.vaccine_notes = vaccine_notes;
        this.visit_id = visit_id;
    }
    return Vaccine;
}());
exports.Vaccine = Vaccine;
//# sourceMappingURL=Vaccine.js.map