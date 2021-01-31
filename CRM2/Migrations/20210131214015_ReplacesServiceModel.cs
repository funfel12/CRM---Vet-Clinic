using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CRM2.Migrations
{
    public partial class ReplacesServiceModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "vaccine_certifate",
                table: "Vaccines");

            migrationBuilder.DropColumn(
                name: "vaccine_current_flag",
                table: "Vaccines");

            migrationBuilder.DropColumn(
                name: "serv_descrption",
                table: "Services");

            migrationBuilder.DropColumn(
                name: "serv_end_date",
                table: "Services");

            migrationBuilder.DropColumn(
                name: "serv_start_date",
                table: "Services");

            migrationBuilder.DropColumn(
                name: "med_current_flag",
                table: "Meds");

            migrationBuilder.DropColumn(
                name: "med_prescription",
                table: "Meds");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "vaccine_certifate",
                table: "Vaccines",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "vaccine_current_flag",
                table: "Vaccines",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "serv_descrption",
                table: "Services",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "serv_end_date",
                table: "Services",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "serv_start_date",
                table: "Services",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "med_current_flag",
                table: "Meds",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "med_prescription",
                table: "Meds",
                type: "nvarchar(max)",
                maxLength: 5000,
                nullable: true);
        }
    }
}
