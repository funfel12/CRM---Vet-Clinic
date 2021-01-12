using Microsoft.EntityFrameworkCore.Migrations;

namespace CRM2.Migrations
{
    public partial class PetMigrationUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "pet_picture",
                table: "Pets");

            migrationBuilder.AlterColumn<string>(
                name: "pet_name",
                table: "Pets",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int",
                oldMaxLength: 200);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "pet_name",
                table: "Pets",
                type: "int",
                maxLength: 200,
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(200)",
                oldMaxLength: 200,
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "pet_picture",
                table: "Pets",
                type: "nvarchar(max)",
                maxLength: 5000,
                nullable: true);
        }
    }
}
