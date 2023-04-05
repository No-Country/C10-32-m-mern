/*
A TODAS LAS RUTAS cuando la llamen desde el fron agregar http://

*******************REGISTRO DE USUARIO ************************

POST localhost:3000/api/signup

info a enviar por BODY

{
    "name" : STRING,
    "secondname": STRING,
    "document" : STRING,  // DEBE EXISTIR EN LA BASE DE ASOCIADOS Y NO SE PUEDE REPETIR 
    "email" : STRING, // NO SE PUEDE REPETIR
    "password": STRING, 
    "phone": STRING,
    "obrasocialId" : INTEGER // DEBE EXISTIR EN LA BS OBRASOCIAL .
}

DEVUELVE LA INFO EN EL SIGUIENTE FORMATO (EJEMPLO)

{
    "id": "537d8364-9309-4fce-9a9e-f7e2e93a52cc",
    "name": "natalia",
    "secondname": "pereira",
    "document": "28461980",
    "email": "nellp@gmail.com",
    "password": "$2b$10$N0bLqe398FP/xGMDR6Y0QOW4/ZzmUEDjMfBaatNHu5f7EBjXTaVl6", //CLAVE ENCRIPTADA
    "phone": "11556666",
    "obrasocialeId": 1
}

EN EL HEADER DEVUELVE LA VARIABLE AUTH_TOKEN 


*******************LOGIN ************************

POST localhost:3000/api/signin

info a enviar por BODY

{
    "email" : STRING,
    "password": STRING"
}

DEVUELVE LA INFO EN EL SIGUIENTE FORMATO (EJEMPLO)
OJO QUE ES UN ARRAY. DEBERIAN TOMAR LA POSISCION [0]
[
    {
        "id": "1a7ff3a3-55d8-41d9-93a3-33d4aa518f49",
        "name": "natalia",
        "secondname": "pereira",
        "document": "28461980",
        "email": "nellp@gmail.com",
        "password": "$2b$10$4XUBdFno3S2/58Qsyro3AegsqbE7ySlyPmRYbpRqm5sAExwY2iHVm",
        "phone": "11556666",
        "obrasocialeId": 1
    }
]

*******************OBTENER OBRAS SOCIALES ************************
para llenar el el combo en el registro. 

GET localhost:3000/api/obrasocial

no hay info a enviar ya que trae todo. 

DEVUELVE LA INFO EN EL SIGUIENTE FORMATO (EJEMPLO)

[
    {
        "id": 1,
        "name": "PAMI"
    },
    {
        "id": 2,
        "name": "IOMA"
    },
    {
        "id": 3,
        "name": "OSDE"
    },
    {
        "id": 4,
        "name": "OBRASOCIAL3"
    }
]


*******************OBTENER SEDES ************************

GET localhost:3000/api/sede

no hay info a enviar ya que trae todo. 

DEVUELVE LA INFO EN EL SIGUIENTE FORMATO (EJEMPLO)

[
    {
        "id": 1,
        "name": "NORTE"
    },
    {
        "id": 2,
        "name": "SUR"
    },
    {
        "id": 3,
        "name": "ESTE"
    },
    {
        "id": 4,
        "name": "OESTE"
    }
]

*******************OBTENER LOS ESPECIALISTAS DE UNA SEDE  ************************



GET ocalhost:3000/api/specialistbysede?idsede=

enviar por  QUERY la id de la sede 

DEVUELVE LA INFO EN EL SIGUIENTE FORMATO (EJEMPLO)

[
    {
        "id": 2,
        "name": "SUR",
        "specialists": [
            {
                "id": 2,
                "name": "Perez Juan",
                "speciality": "Clinico",
                "adress": "direccion 213",
                "phone": "14433654",
                "tuition": "c15654",
                "consultingRoom": "109",
                "Specialist_sede": {
                    "createdAt": "2023-04-01T03:00:00.000Z",
                    "updatedAt": "2023-04-01T03:00:00.000Z",
                    "specialistId": 2,
                    "sedeId": 2
                },
                "specialties": [
                    {
                        "id": 1,
                        "description": "Cardiología",
                        "Specialist_Speciality": {
                            "createdAt": "2023-04-03T03:00:00.000Z",
                            "updatedAt": "2023-04-03T03:00:00.000Z",
                            "specialistId": 2,
                            "specialtyId": 1
                        }
                    },
                    {
                        "id": 2,
                        "description": "Nutricionista",
                        "Specialist_Speciality": {
                            "createdAt": "2023-04-03T03:00:00.000Z",
                            "updatedAt": "2023-04-03T03:00:00.000Z",
                            "specialistId": 2,
                            "specialtyId": 2
                        }
                    }
                ]
            },
            {
                "id": 3,
                "name": "Simpson Homero",
                "speciality": "Neumonologo",
                "adress": "direccion 111",
                "phone": "1253434",
                "tuition": "d43er55",
                "consultingRoom": "308",
                "Specialist_sede": {
                    "createdAt": "2023-04-01T03:00:00.000Z",
                    "updatedAt": "2023-04-01T03:00:00.000Z",
                    "specialistId": 3,
                    "sedeId": 2
                },
                "specialties": [
                    {
                        "id": 4,
                        "description": "Oftalmología",
                        "Specialist_Speciality": {
                            "createdAt": "2023-04-03T03:00:00.000Z",
                            "updatedAt": "2023-04-03T03:00:00.000Z",
                            "specialistId": 3,
                            "specialtyId": 4
                        }
                    },
                    {
                        "id": 5,
                        "description": "Pediatría",
                        "Specialist_Speciality": {
                            "createdAt": "2023-04-03T03:00:00.000Z",
                            "updatedAt": "2023-04-03T03:00:00.000Z",
                            "specialistId": 3,
                            "specialtyId": 5
                        }
                    }
                ]
            }
        ]
    }
]




*******************OBTENER LAS ESPECIALIDADES DE UNA SEDE  ************************

GET localhost:3000/api/specialiestbysede?idsede=

enviar por  QUERY la id de la sede 

DEVUELVE LA INFO EN EL SIGUIENTE FORMATO (EJEMPLO)

[
    {
        "id": 2,
        "name": "SUR",
        "specialties": [
            {
                "id": 1,
                "description": "Cardiología",
                "Speciality_sede": {
                    "createdAt": "2023-04-02T03:00:00.000Z",
                    "updatedAt": "2023-04-02T03:00:00.000Z",
                    "specialtyId": 1,
                    "sedeId": 2
                }
            },
            {
                "id": 2,
                "description": "Nutricionista",
                "Speciality_sede": {
                    "createdAt": "2023-04-02T03:00:00.000Z",
                    "updatedAt": "2023-04-02T03:00:00.000Z",
                    "specialtyId": 2,
                    "sedeId": 2
                }
            }
        ]
    }
]


************************OBTENER DETALLES DE MEDICO *******************************

GET localhost:3000/api/specialistdetails/2

enviar por paramas el id del medico

DEVUELVE LA INFO EN EL SIGUIENTE FORMATO (EJEMPLO) en este caso el especista tiene dos especialidades 

{
    "id": 2,
    "name": "Perez Juan",
    "speciality": "Clinico",
    "adress": "direccion 213",
    "phone": "14433654",
    "tuition": "c15654",
    "consultingRoom": "109",
    "specialties": [
        {
            "id": 1,
            "description": "Cardiología",
            "Specialist_Speciality": {
                "createdAt": "2023-04-03T03:00:00.000Z",
                "updatedAt": "2023-04-03T03:00:00.000Z",
                "specialistId": 2,
                "specialtyId": 1
            }
        },
        {
            "id": 2,
            "description": "Nutricionista",
            "Specialist_Speciality": {
                "createdAt": "2023-04-03T03:00:00.000Z",
                "updatedAt": "2023-04-03T03:00:00.000Z",
                "specialistId": 2,
                "specialtyId": 2
            }
        }
    ]
}

***********************************OBTENER MEDICOS QUE COMIENCEN CON UNA LETRA ***************************

GET ocalhost:3000/api/specialistbfl?letter=

enviar por QUERY la letra.

DEVUELVE LA INFO EN EL SIGUIENTE FORMATO (EJEMPLO) 

[
    {
        "id": 2,
        "name": "Perez Juan",
        "speciality": "Clinico",
        "adress": "direccion 213",
        "phone": "14433654",
        "tuition": "c15654",
        "consultingRoom": "109"
    }
]


*/
