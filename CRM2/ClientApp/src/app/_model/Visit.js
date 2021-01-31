"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visit = void 0;
var Visit = /** @class */ (function () {
    function Visit(Id, CreatedDate, visit_date, visit_notes, med_visit_summary, visit_category, pet_id, vet_id) {
        this.Id = Id;
        this.CreatedDate = CreatedDate;
        this.visit_date = visit_date;
        this.visit_notes = visit_notes;
        this.med_visit_summary = med_visit_summary;
        this.visit_category = visit_category;
        this.pet_id = pet_id;
        this.vet_id = vet_id;
    }
    return Visit;
}());
exports.Visit = Visit;
//# sourceMappingURL=Visit.js.map