/*
CORRER ESTOS INSERTS EN LA BASE DE DATOS PARA LLENAR LAS TABLAS. 

recordar en el index poner force: true para que se hagan los cambios en la BS¡D
 
SE LLENAN TODAS MENOS USUARIOS QUE SE PUEDE CREAR YA DESDE EL FRONT. 

  INSERT INTO public.asociados(document) VALUES ('27461980');
    INSERT INTO public.asociados(document) VALUES ('28461981');
    INSERT INTO public.asociados(document) VALUES ('38461980');
    INSERT INTO public.asociados(document) VALUES ('48461980');

    INSERT INTO public.obrasociales(name) VALUES ('PAMI');
    INSERT INTO public.obrasociales(name) VALUES ('IOMA');
    INSERT INTO public.obrasociales(name) VALUES ('OSDE');
    INSERT INTO public.obrasociales(name) VALUES ('OBRASOCIAL3');

    INSERT INTO public.specialities(description)	VALUES ('Cardiología');
    INSERT INTO public.specialities(description)	VALUES ('Nutricionista');
    INSERT INTO public.specialities(description)	VALUES ('Ginecología');
    INSERT INTO public.specialities(description)	VALUES ('Oftalmología');
    INSERT INTO public.specialities(description)	VALUES ('Pediatría');
    INSERT INTO public.specialities(description)	VALUES ('Medico Clínico');

    INSERT INTO public.sedes(name) VALUES ('NORTE');
    INSERT INTO public.sedes(name) VALUES ('SUR');
    INSERT INTO public.sedes(name) VALUES ('ESTE');
    INSERT INTO public.sedes(name) VALUES ('OESTE');

    INSERT INTO public.specialists(name, speciality, adress, phone, tuition, "consultingRoom")	VALUES ( 'Gonzalez Pedro', 'Cardilogo','direccion 211', '14433434', 'c3er5', '108');

    INSERT INTO public.specialists( name, speciality, adress, phone, tuition, "consultingRoom")	VALUES ( 'Perez Juan', 'Clinico','direccion 213', '14433654', 'c1565', '109');

    INSERT INTO public.specialists(name, speciality, adress, phone, tuition, "consultingRoom")	VALUES ( 'Simpson Homero', 'Neumonologo','direccion 111', '1253434', 'd43r1', '308');

    
    INSERT INTO public."Specialist_sede"(
	mondayini, mondayend, mondaytotal, tuesdayini, tuesdayend, tuesdaytotal, wednesdayini, wednesdayend, wednesdaytotal, thursdayini, thursdayend, thursdaytotal, fridayini, fridayend, fridaytotal, "specialistId", "sedeId")
	VALUES ('09:00', '10:00', 2,'09:00', '10:00', 2,'09:00', '10:00', 2,'09:00', '10:00', 2,'09:00', '10:00', 2,  1, 1);

     INSERT INTO public."Specialist_sede"(
	mondayini, mondayend, mondaytotal, tuesdayini, tuesdayend, tuesdaytotal, wednesdayini, wednesdayend, wednesdaytotal, thursdayini, thursdayend, thursdaytotal, fridayini, fridayend, fridaytotal, "specialistId", "sedeId")
	VALUES ('13:00', '15:00', 4,'13:00', '15:00', 4,'13:00', '15:00', 4,'13:00', '15:00', 4,null, null, null,  1, 2);



    INSERT INTO public."Speciality_sede"("createdAt", "updatedAt", "specialtyId", "sedeId")	VALUES ('2023-04-02', '2023-04-02', 1, 1);
        
    INSERT INTO public."Speciality_sede"("createdAt", "updatedAt", "specialtyId", "sedeId") VALUES ('2023-04-02', '2023-04-02', 1, 2); 

    INSERT INTO public."Speciality_sede"("createdAt", "updatedAt", "specialtyId", "sedeId") VALUES ('2023-04-02', '2023-04-02', 2, 1);

    INSERT INTO public."Speciality_sede"("createdAt", "updatedAt", "specialtyId", "sedeId") VALUES ('2023-04-02', '2023-04-02', 2, 2);



INSERT INTO public."Specialist_Speciality"(
	"createdAt", "updatedAt", "specialistId", "specialtyId")
	VALUES ('2023-04-03', '2023-04-03', 1, 1);
    
    INSERT INTO public."Specialist_Speciality"(
	"createdAt", "updatedAt", "specialistId", "specialtyId")
	VALUES ('2023-04-03', '2023-04-03', 1, 2);
    
    INSERT INTO public."Specialist_Speciality"(
	"createdAt", "updatedAt", "specialistId", "specialtyId")
	VALUES ('2023-04-03', '2023-04-03', 1, 6);
    
    INSERT INTO public."Specialist_Speciality"(
	"createdAt", "updatedAt", "specialistId", "specialtyId")
	VALUES ('2023-04-03', '2023-04-03', 2, 1);
    
    
    INSERT INTO public."Specialist_Speciality"(
	"createdAt", "updatedAt", "specialistId", "specialtyId")
	VALUES ('2023-04-03', '2023-04-03', 2,2);
    
    
    INSERT INTO public."Specialist_Speciality"(
	"createdAt", "updatedAt", "specialistId", "specialtyId")
	VALUES ('2023-04-03', '2023-04-03', 3, 5);
    
    INSERT INTO public."Specialist_Speciality"(
	"createdAt", "updatedAt", "specialistId", "specialtyId")
	VALUES ('2023-04-03', '2023-04-03', 3, 4);





*/