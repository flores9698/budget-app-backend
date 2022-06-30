##Create Postgresql database 

## DAtabase backup
## cat /home/saul/desktop/budget-app-backend/initPostgres.sql | docker exec -i 2e0c6f8a7126 psql -U postgres
FROM postgres

## Run 
## docker run --name budgetAppDB -p 5432:5432 -e POSTGRES_PASSWORD=s.flores9 -e POSTGRES_USER=postgres -d postgres

