using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CRM2.Migrations
{
    public partial class removeFieldFromVisit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "routine_visit_summary",
                table: "Visits");

            migrationBuilder.DropColumn(
                name: "visit_date_end",
                table: "Visits");

            migrationBuilder.DropColumn(
                name: "visit_doctor",
                table: "Visits");

            migrationBuilder.DropColumn(
                name: "visit_exam_doc",
                table: "Visits");

            migrationBuilder.DropColumn(
                name: "visit_receipt",
                table: "Visits");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "routine_visit_summary",
                table: "Visits",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "visit_date_end",
                table: "Visits",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "visit_doctor",
                table: "Visits",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "visit_exam_doc",
                table: "Visits",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "visit_receipt",
                table: "Visits",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: true);
        }
    }
}
