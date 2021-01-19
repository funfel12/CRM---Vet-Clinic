using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CRM2.Migrations
{
    public partial class newFieldAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "visit_date_end",
                table: "Visits",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<decimal>(
                name: "Price",
                table: "DicVaccines",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "Price",
                table: "DicServices",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "Price",
                table: "DicMeds",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "visit_date_end",
                table: "Visits");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "DicVaccines");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "DicServices");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "DicMeds");
        }
    }
}
