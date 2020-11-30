using Microsoft.EntityFrameworkCore.Migrations;

namespace CRM2.Migrations
{
    public partial class GenericRepositoryPatterCreate4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Meds_Visits_visit_id1",
                table: "Meds");

            migrationBuilder.DropForeignKey(
                name: "FK_Pets_Owners_owner_id1",
                table: "Pets");

            migrationBuilder.DropForeignKey(
                name: "FK_Services_Visits_visit_id1",
                table: "Services");

            migrationBuilder.DropForeignKey(
                name: "FK_Tests_Visits_visit_id1",
                table: "Tests");

            migrationBuilder.DropForeignKey(
                name: "FK_Vaccines_Visits_visit_id1",
                table: "Vaccines");

            migrationBuilder.DropForeignKey(
                name: "FK_Visits_Pets_pet_id1",
                table: "Visits");

            migrationBuilder.DropForeignKey(
                name: "FK_Visits_Vets_vet_id1",
                table: "Visits");

            migrationBuilder.DropIndex(
                name: "IX_Visits_pet_id1",
                table: "Visits");

            migrationBuilder.DropIndex(
                name: "IX_Visits_vet_id1",
                table: "Visits");

            migrationBuilder.DropIndex(
                name: "IX_Vaccines_visit_id1",
                table: "Vaccines");

            migrationBuilder.DropIndex(
                name: "IX_Tests_visit_id1",
                table: "Tests");

            migrationBuilder.DropIndex(
                name: "IX_Services_visit_id1",
                table: "Services");

            migrationBuilder.DropIndex(
                name: "IX_Pets_owner_id1",
                table: "Pets");

            migrationBuilder.DropIndex(
                name: "IX_Meds_visit_id1",
                table: "Meds");

            migrationBuilder.DropColumn(
                name: "pet_id1",
                table: "Visits");

            migrationBuilder.DropColumn(
                name: "vet_id1",
                table: "Visits");

            migrationBuilder.DropColumn(
                name: "visit_id1",
                table: "Vaccines");

            migrationBuilder.DropColumn(
                name: "visit_id1",
                table: "Tests");

            migrationBuilder.DropColumn(
                name: "visit_id1",
                table: "Services");

            migrationBuilder.DropColumn(
                name: "owner_id1",
                table: "Pets");

            migrationBuilder.DropColumn(
                name: "visit_id1",
                table: "Meds");

            migrationBuilder.CreateIndex(
                name: "IX_Visits_pet_id",
                table: "Visits",
                column: "pet_id");

            migrationBuilder.CreateIndex(
                name: "IX_Visits_vet_id",
                table: "Visits",
                column: "vet_id");

            migrationBuilder.CreateIndex(
                name: "IX_Vaccines_visit_id",
                table: "Vaccines",
                column: "visit_id");

            migrationBuilder.CreateIndex(
                name: "IX_Tests_visit_id",
                table: "Tests",
                column: "visit_id");

            migrationBuilder.CreateIndex(
                name: "IX_Services_visit_id",
                table: "Services",
                column: "visit_id");

            migrationBuilder.CreateIndex(
                name: "IX_Pets_owner_id",
                table: "Pets",
                column: "owner_id");

            migrationBuilder.CreateIndex(
                name: "IX_Meds_visit_id",
                table: "Meds",
                column: "visit_id");

            migrationBuilder.AddForeignKey(
                name: "FK_Meds_Visits_visit_id",
                table: "Meds",
                column: "visit_id",
                principalTable: "Visits",
                principalColumn: "visit_id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Pets_Owners_owner_id",
                table: "Pets",
                column: "owner_id",
                principalTable: "Owners",
                principalColumn: "owner_id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Services_Visits_visit_id",
                table: "Services",
                column: "visit_id",
                principalTable: "Visits",
                principalColumn: "visit_id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Tests_Visits_visit_id",
                table: "Tests",
                column: "visit_id",
                principalTable: "Visits",
                principalColumn: "visit_id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Vaccines_Visits_visit_id",
                table: "Vaccines",
                column: "visit_id",
                principalTable: "Visits",
                principalColumn: "visit_id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Visits_Pets_pet_id",
                table: "Visits",
                column: "pet_id",
                principalTable: "Pets",
                principalColumn: "pet_id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Visits_Vets_vet_id",
                table: "Visits",
                column: "vet_id",
                principalTable: "Vets",
                principalColumn: "vet_id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Meds_Visits_visit_id",
                table: "Meds");

            migrationBuilder.DropForeignKey(
                name: "FK_Pets_Owners_owner_id",
                table: "Pets");

            migrationBuilder.DropForeignKey(
                name: "FK_Services_Visits_visit_id",
                table: "Services");

            migrationBuilder.DropForeignKey(
                name: "FK_Tests_Visits_visit_id",
                table: "Tests");

            migrationBuilder.DropForeignKey(
                name: "FK_Vaccines_Visits_visit_id",
                table: "Vaccines");

            migrationBuilder.DropForeignKey(
                name: "FK_Visits_Pets_pet_id",
                table: "Visits");

            migrationBuilder.DropForeignKey(
                name: "FK_Visits_Vets_vet_id",
                table: "Visits");

            migrationBuilder.DropIndex(
                name: "IX_Visits_pet_id",
                table: "Visits");

            migrationBuilder.DropIndex(
                name: "IX_Visits_vet_id",
                table: "Visits");

            migrationBuilder.DropIndex(
                name: "IX_Vaccines_visit_id",
                table: "Vaccines");

            migrationBuilder.DropIndex(
                name: "IX_Tests_visit_id",
                table: "Tests");

            migrationBuilder.DropIndex(
                name: "IX_Services_visit_id",
                table: "Services");

            migrationBuilder.DropIndex(
                name: "IX_Pets_owner_id",
                table: "Pets");

            migrationBuilder.DropIndex(
                name: "IX_Meds_visit_id",
                table: "Meds");

            migrationBuilder.AddColumn<int>(
                name: "pet_id1",
                table: "Visits",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "vet_id1",
                table: "Visits",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "visit_id1",
                table: "Vaccines",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "visit_id1",
                table: "Tests",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "visit_id1",
                table: "Services",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "owner_id1",
                table: "Pets",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "visit_id1",
                table: "Meds",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Visits_pet_id1",
                table: "Visits",
                column: "pet_id1");

            migrationBuilder.CreateIndex(
                name: "IX_Visits_vet_id1",
                table: "Visits",
                column: "vet_id1");

            migrationBuilder.CreateIndex(
                name: "IX_Vaccines_visit_id1",
                table: "Vaccines",
                column: "visit_id1");

            migrationBuilder.CreateIndex(
                name: "IX_Tests_visit_id1",
                table: "Tests",
                column: "visit_id1");

            migrationBuilder.CreateIndex(
                name: "IX_Services_visit_id1",
                table: "Services",
                column: "visit_id1");

            migrationBuilder.CreateIndex(
                name: "IX_Pets_owner_id1",
                table: "Pets",
                column: "owner_id1");

            migrationBuilder.CreateIndex(
                name: "IX_Meds_visit_id1",
                table: "Meds",
                column: "visit_id1");

            migrationBuilder.AddForeignKey(
                name: "FK_Meds_Visits_visit_id1",
                table: "Meds",
                column: "visit_id1",
                principalTable: "Visits",
                principalColumn: "visit_id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Pets_Owners_owner_id1",
                table: "Pets",
                column: "owner_id1",
                principalTable: "Owners",
                principalColumn: "owner_id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Services_Visits_visit_id1",
                table: "Services",
                column: "visit_id1",
                principalTable: "Visits",
                principalColumn: "visit_id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Tests_Visits_visit_id1",
                table: "Tests",
                column: "visit_id1",
                principalTable: "Visits",
                principalColumn: "visit_id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Vaccines_Visits_visit_id1",
                table: "Vaccines",
                column: "visit_id1",
                principalTable: "Visits",
                principalColumn: "visit_id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Visits_Pets_pet_id1",
                table: "Visits",
                column: "pet_id1",
                principalTable: "Pets",
                principalColumn: "pet_id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Visits_Vets_vet_id1",
                table: "Visits",
                column: "vet_id1",
                principalTable: "Vets",
                principalColumn: "vet_id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
