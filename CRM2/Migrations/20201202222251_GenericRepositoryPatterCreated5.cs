using Microsoft.EntityFrameworkCore.Migrations;

namespace CRM2.Migrations
{
    public partial class GenericRepositoryPatterCreated5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "visit_id",
                table: "Visits",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "vet_id",
                table: "Vets",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "vaccine_id",
                table: "Vaccines",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "test_id",
                table: "Tests",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "serv_id",
                table: "Services",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "pet_id",
                table: "Pets",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "owner_id",
                table: "Owners",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "med_id",
                table: "Meds",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "dic_vaccines_id",
                table: "DicVaccines",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "dic_services_id",
                table: "DicServices",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "dic_meds_id",
                table: "DicMeds",
                newName: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Visits",
                newName: "visit_id");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Vets",
                newName: "vet_id");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Vaccines",
                newName: "vaccine_id");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Tests",
                newName: "test_id");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Services",
                newName: "serv_id");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Pets",
                newName: "pet_id");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Owners",
                newName: "owner_id");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Meds",
                newName: "med_id");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "DicVaccines",
                newName: "dic_vaccines_id");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "DicServices",
                newName: "dic_services_id");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "DicMeds",
                newName: "dic_meds_id");
        }
    }
}
