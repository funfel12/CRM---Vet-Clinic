using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CRM2.Migrations
{
    public partial class Datand : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "med_prescription",
                table: "Services");

            migrationBuilder.AddColumn<DateTime>(
                name: "visit_end_date",
                table: "Visits",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "visit_end_date",
                table: "Visits");

            migrationBuilder.AddColumn<string>(
                name: "med_prescription",
                table: "Services",
                type: "nvarchar(max)",
                maxLength: 5000,
                nullable: true);
        }
    }
}
