using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CRM2.Migrations
{
    public partial class GenericRepositoryPatterCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DicMeds",
                columns: table => new
                {
                    dic_meds_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    dic_meds_name = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DicMeds", x => x.dic_meds_id);
                });

            migrationBuilder.CreateTable(
                name: "DicServices",
                columns: table => new
                {
                    dic_services_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    dic_services_name = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DicServices", x => x.dic_services_id);
                });

            migrationBuilder.CreateTable(
                name: "DicVaccines",
                columns: table => new
                {
                    dic_vaccines_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    dic_vaccines_name = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DicVaccines", x => x.dic_vaccines_id);
                });

            migrationBuilder.CreateTable(
                name: "Owners",
                columns: table => new
                {
                    owner_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    owner_first_name = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    owner_last_name = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    owner_adress = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    owner_city = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    owner_telephone = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    owner_email = table.Column<string>(type: "nvarchar(300)", maxLength: 300, nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Owners", x => x.owner_id);
                });

            migrationBuilder.CreateTable(
                name: "Vets",
                columns: table => new
                {
                    vet_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    vet_name = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    vet_adress = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    vet_city = table.Column<string>(type: "nvarchar(250)", maxLength: 250, nullable: true),
                    vet_state = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    vet_zip = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    vet_phone = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    vet_email = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    vet_med_rec_site = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vets", x => x.vet_id);
                });

            migrationBuilder.CreateTable(
                name: "Pets",
                columns: table => new
                {
                    pet_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    pet_name = table.Column<int>(type: "int", maxLength: 200, nullable: false),
                    pet_dob = table.Column<DateTime>(type: "datetime2", nullable: false),
                    pet_species = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    pet_breed = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    pet_sex = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    pet_color = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    pet_picture = table.Column<string>(type: "nvarchar(max)", maxLength: 5000, nullable: true),
                    owner_id = table.Column<int>(type: "int", nullable: false),
                    owner_id1 = table.Column<int>(type: "int", nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pets", x => x.pet_id);
                    table.ForeignKey(
                        name: "FK_Pets_Owners_owner_id1",
                        column: x => x.owner_id1,
                        principalTable: "Owners",
                        principalColumn: "owner_id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Visits",
                columns: table => new
                {
                    visit_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    visit_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    visit_weight = table.Column<float>(type: "real", nullable: false),
                    visit_receipt = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    visit_notes = table.Column<string>(type: "nvarchar(2000)", maxLength: 2000, nullable: true),
                    med_visit_summary = table.Column<string>(type: "nvarchar(2000)", maxLength: 2000, nullable: true),
                    routine_visit_summary = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    visit_category = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    visit_doctor = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    visit_exam_doc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    pet_id = table.Column<int>(type: "int", nullable: false),
                    vet_id = table.Column<int>(type: "int", nullable: false),
                    pet_id1 = table.Column<int>(type: "int", nullable: true),
                    vet_id1 = table.Column<int>(type: "int", nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Visits", x => x.visit_id);
                    table.ForeignKey(
                        name: "FK_Visits_Pets_pet_id1",
                        column: x => x.pet_id1,
                        principalTable: "Pets",
                        principalColumn: "pet_id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Visits_Vets_vet_id1",
                        column: x => x.vet_id1,
                        principalTable: "Vets",
                        principalColumn: "vet_id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Meds",
                columns: table => new
                {
                    med_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    med_name = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    med_description = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    med_dosage_freq = table.Column<string>(type: "nvarchar(1500)", maxLength: 1500, nullable: true),
                    med_start_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    med_end_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    med_category = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    med_current_flag = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    med_prescription = table.Column<string>(type: "nvarchar(max)", maxLength: 5000, nullable: true),
                    visit_id = table.Column<int>(type: "int", nullable: false),
                    visit_id1 = table.Column<int>(type: "int", nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Meds", x => x.med_id);
                    table.ForeignKey(
                        name: "FK_Meds_Visits_visit_id1",
                        column: x => x.visit_id1,
                        principalTable: "Visits",
                        principalColumn: "visit_id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Services",
                columns: table => new
                {
                    serv_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    serv_name = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    serv_descrption = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    serv_start_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    serv_end_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    serv_description = table.Column<string>(type: "nvarchar(1500)", maxLength: 1500, nullable: true),
                    med_prescription = table.Column<string>(type: "nvarchar(max)", maxLength: 5000, nullable: true),
                    visit_id = table.Column<int>(type: "int", nullable: false),
                    visit_id1 = table.Column<int>(type: "int", nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Services", x => x.serv_id);
                    table.ForeignKey(
                        name: "FK_Services_Visits_visit_id1",
                        column: x => x.visit_id1,
                        principalTable: "Visits",
                        principalColumn: "visit_id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Tests",
                columns: table => new
                {
                    test_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    test_name = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    test_description = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: true),
                    test_result = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: true),
                    test_series_num = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    test_date_performed = table.Column<DateTime>(type: "datetime2", nullable: false),
                    test_date_expires = table.Column<DateTime>(type: "datetime2", nullable: false),
                    test_current_flag = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    test_category = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    test_result_doc = table.Column<string>(type: "nvarchar(max)", maxLength: 5000, nullable: true),
                    visit_id = table.Column<int>(type: "int", nullable: false),
                    visit_id1 = table.Column<int>(type: "int", nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tests", x => x.test_id);
                    table.ForeignKey(
                        name: "FK_Tests_Visits_visit_id1",
                        column: x => x.visit_id1,
                        principalTable: "Visits",
                        principalColumn: "visit_id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Vaccines",
                columns: table => new
                {
                    vaccine_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    vaccine_name = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    vaccine_description = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    vaccine_series_num = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    vaccine_date_given = table.Column<DateTime>(type: "datetime2", nullable: false),
                    vaccine_date_expires = table.Column<DateTime>(type: "datetime2", nullable: false),
                    vaccine_notes = table.Column<string>(type: "nvarchar(max)", maxLength: 5000, nullable: true),
                    vaccine_current_flag = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    vaccine_certifate = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    visit_id = table.Column<int>(type: "int", nullable: false),
                    visit_id1 = table.Column<int>(type: "int", nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vaccines", x => x.vaccine_id);
                    table.ForeignKey(
                        name: "FK_Vaccines_Visits_visit_id1",
                        column: x => x.visit_id1,
                        principalTable: "Visits",
                        principalColumn: "visit_id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Meds_visit_id1",
                table: "Meds",
                column: "visit_id1");

            migrationBuilder.CreateIndex(
                name: "IX_Pets_owner_id1",
                table: "Pets",
                column: "owner_id1");

            migrationBuilder.CreateIndex(
                name: "IX_Services_visit_id1",
                table: "Services",
                column: "visit_id1");

            migrationBuilder.CreateIndex(
                name: "IX_Tests_visit_id1",
                table: "Tests",
                column: "visit_id1");

            migrationBuilder.CreateIndex(
                name: "IX_Vaccines_visit_id1",
                table: "Vaccines",
                column: "visit_id1");

            migrationBuilder.CreateIndex(
                name: "IX_Visits_pet_id1",
                table: "Visits",
                column: "pet_id1");

            migrationBuilder.CreateIndex(
                name: "IX_Visits_vet_id1",
                table: "Visits",
                column: "vet_id1");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DicMeds");

            migrationBuilder.DropTable(
                name: "DicServices");

            migrationBuilder.DropTable(
                name: "DicVaccines");

            migrationBuilder.DropTable(
                name: "Meds");

            migrationBuilder.DropTable(
                name: "Services");

            migrationBuilder.DropTable(
                name: "Tests");

            migrationBuilder.DropTable(
                name: "Vaccines");

            migrationBuilder.DropTable(
                name: "Visits");

            migrationBuilder.DropTable(
                name: "Pets");

            migrationBuilder.DropTable(
                name: "Vets");

            migrationBuilder.DropTable(
                name: "Owners");
        }
    }
}
