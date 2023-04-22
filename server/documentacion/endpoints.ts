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

 {
        "id": 2,
        "name": "SUR",
        "specialists": [
            {
                "id": 1,
                "name": "Gonzalez Pedro",
                "speciality": "Cardilogo",
                "adress": "direccion 211",
                "phone": "14433434",
                "tuition": "c3er5",
                "consultingRoom": "108",
                "Specialist_sede": {
                    "mondayini": "13:00:00",
                    "mondayend": "15:00:00",
                    "mondaytotal": 4,
                    "tuesdayini": "13:00:00",
                    "tuesdayend": "15:00:00",
                    "tuesdaytotal": 4,
                    "wednesdayini": "13:00:00",
                    "wednesdayend": "15:00:00",
                    "wednesdaytotal": 4,
                    "thursdayini": "13:00:00",
                    "thursdayend": "15:00:00",
                    "thursdaytotal": 4,
                    "fridayini": null,
                    "fridayend": null,
                    "fridaytotal": null,
                    "specialistId": 1,
                    "sedeId": 2
                },
                "specialties": [
                    {
                        "id": 1,
                        "description": "Cardiología",
                        "Specialist_Speciality": {
                            "createdAt": "2023-04-03T03:00:00.000Z",
                            "updatedAt": "2023-04-03T03:00:00.000Z",
                            "specialistId": 1,
                            "specialtyId": 1
                        }
                    },
                    {
                        "id": 2,
                        "description": "Nutricionista",
                        "Specialist_Speciality": {
                            "createdAt": "2023-04-03T03:00:00.000Z",
                            "updatedAt": "2023-04-03T03:00:00.000Z",
                            "specialistId": 1,
                            "specialtyId": 2
                        }
                    },
                    {
                        "id": 6,
                        "description": "Medico Clínico",
                        "Specialist_Speciality": {
                            "createdAt": "2023-04-03T03:00:00.000Z",
                            "updatedAt": "2023-04-03T03:00:00.000Z",
                            "specialistId": 1,
                            "specialtyId": 6
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
    "id": 1,
    "name": "Gonzalez Pedro",
    "speciality": "Cardilogo",
    "adress": "direccion 211",
    "phone": "14433434",
    "tuition": "c3er5",
    "consultingRoom": "108",
    "sedes": [
        {
            "id": 1,
            "name": "NORTE",
            "Specialist_sede": {
                "mondayini": "09:00:00",
                "mondayend": "10:00:00",
                "mondaytotal": 2,
                "tuesdayini": "09:00:00",
                "tuesdayend": "10:00:00",
                "tuesdaytotal": 2,
                "wednesdayini": "09:00:00",
                "wednesdayend": "10:00:00",
                "wednesdaytotal": 2,
                "thursdayini": "09:00:00",
                "thursdayend": "10:00:00",
                "thursdaytotal": 2,
                "fridayini": "09:00:00",
                "fridayend": "10:00:00",
                "fridaytotal": 2,
                "specialistId": 1,
                "sedeId": 1
            },
            "specialties": [
                {
                    "id": 1,
                    "description": "Cardiología",
                    "Speciality_sede": {
                        "createdAt": "2023-04-02T03:00:00.000Z",
                        "updatedAt": "2023-04-02T03:00:00.000Z",
                        "specialtyId": 1,
                        "sedeId": 1
                    }
                },
                {
                    "id": 2,
                    "description": "Nutricionista",
                    "Speciality_sede": {
                        "createdAt": "2023-04-02T03:00:00.000Z",
                        "updatedAt": "2023-04-02T03:00:00.000Z",
                        "specialtyId": 2,
                        "sedeId": 1
                    }
                }
            ]
        },
        {
            "id": 2,
            "name": "SUR",
            "Specialist_sede": {
                "mondayini": "13:00:00",
                "mondayend": "15:00:00",
                "mondaytotal": 4,
                "tuesdayini": "13:00:00",
                "tuesdayend": "15:00:00",
                "tuesdaytotal": 4,
                "wednesdayini": "13:00:00",
                "wednesdayend": "15:00:00",
                "wednesdaytotal": 4,
                "thursdayini": "13:00:00",
                "thursdayend": "15:00:00",
                "thursdaytotal": 4,
                "fridayini": null,
                "fridayend": null,
                "fridaytotal": null,
                "specialistId": 1,
                "sedeId": 2
            },
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
}

***********************************OBTENER MEDICOS QUE COMIENCEN CON UNA LETRA ***************************

GET ocalhost:3000/api/specialistbfl?letter=

enviar por QUERY la letra. SI ES VACIO TRAE TODOS LOS SPECIALISTAS

DEVUELVE LA INFO EN EL SIGUIENTE FORMATO (EJEMPLO) 

[
    {
        "id": 3,
        "name": "Simpson Homero",
        "speciality": "Neumonologo",
        "adress": "direccion 111",
        "phone": "1253434",
        "tuition": "d43r1",
        "consultingRoom": "308",
        "specialties": [
            {
                "id": 5,
                "description": "Pediatría",
                "Specialist_Speciality": {
                    "createdAt": "2023-04-03T03:00:00.000Z",
                    "updatedAt": "2023-04-03T03:00:00.000Z",
                    "specialistId": 3,
                    "specialtyId": 5
                }
            },
            {
                "id": 4,
                "description": "Oftalmología",
                "Specialist_Speciality": {
                    "createdAt": "2023-04-03T03:00:00.000Z",
                    "updatedAt": "2023-04-03T03:00:00.000Z",
                    "specialistId": 3,
                    "specialtyId": 4
                }
            }
        ]
    }
]

SI NO ENVIAMOS NADA TRAE TODOS LOS MEDICOS EN EL SIGUIETNE FORMATO

[
    {
        "id": 1,
        "name": "Gonzalez Pedro",
        "speciality": "Cardilogo",
        "adress": "direccion 211",
        "phone": "14433434",
        "tuition": "c3er5",
        "consultingRoom": "108",
        "specialties": [
            {
                "id": 1,
                "description": "Cardiología",
                "Specialist_Speciality": {
                    "createdAt": "2023-04-03T03:00:00.000Z",
                    "updatedAt": "2023-04-03T03:00:00.000Z",
                    "specialistId": 1,
                    "specialtyId": 1
                }
            },
            {
                "id": 2,
                "description": "Nutricionista",
                "Specialist_Speciality": {
                    "createdAt": "2023-04-03T03:00:00.000Z",
                    "updatedAt": "2023-04-03T03:00:00.000Z",
                    "specialistId": 1,
                    "specialtyId": 2
                }
            },
            {
                "id": 6,
                "description": "Medico Clínico",
                "Specialist_Speciality": {
                    "createdAt": "2023-04-03T03:00:00.000Z",
                    "updatedAt": "2023-04-03T03:00:00.000Z",
                    "specialistId": 1,
                    "specialtyId": 6
                }
            }
        ]
    },
    {
        "id": 2,
        "name": "Perez Juan",
        "speciality": "Clinico",
        "adress": "direccion 213",
        "phone": "14433654",
        "tuition": "c1565",
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
    },
    {
        "id": 3,
        "name": "Simpson Homero",
        "speciality": "Neumonologo",
        "adress": "direccion 111",
        "phone": "1253434",
        "tuition": "d43r1",
        "consultingRoom": "308",
        "specialties": [
            {
                "id": 5,
                "description": "Pediatría",
                "Specialist_Speciality": {
                    "createdAt": "2023-04-03T03:00:00.000Z",
                    "updatedAt": "2023-04-03T03:00:00.000Z",
                    "specialistId": 3,
                    "specialtyId": 5
                }
            },
            {
                "id": 4,
                "description": "Oftalmología",
                "Specialist_Speciality": {
                    "createdAt": "2023-04-03T03:00:00.000Z",
                    "updatedAt": "2023-04-03T03:00:00.000Z",
                    "specialistId": 3,
                    "specialtyId": 4
                }
            }
        ]
    }
]

***********************************OBTENER TURNOS DISPONIBLES ***************************

esta ruta devuelve los turnos disponibles, 

GET localhost:3000/api/getshifts

info a enviar por BODY, EJEMPLO 

{
    "idspecialist" : 1,
    "idsede":1,
     "idspeciality":1,
     "days": 4
}

nota: days es la cantidad de dias que queres que traiga la info, como es un combo para seleccionar si le ponemos 30 dias nose si va a quedar
bien, por lo cual le puse este parametro para ir probando. 


DEVUELVE LA INFO EN EL SIGUIENTE FORMATO (EJEMPLO) 

[
    "2023-4-11",
    [
        {
            "ini": "09:00",
            "fin:": "09:30"
        },
        {
            "ini": "09:30",
            "fin:": "10:00"
        }
    ],
    "2023-4-12",
    [
        {
            "ini": "09:00",
            "fin:": "09:30"
        },
        {
            "ini": "09:30",
            "fin:": "10:00"
        }
    ],
    "2023-4-13",
    [
        {
            "ini": "09:00",
            "fin:": "09:30"
        },
        {
            "ini": "09:30",
            "fin:": "10:00"
        },
        {
            "ini": "10:30",
            "fin:": "11:00"
        }
    ],
    "2023-4-14",
    [
        {
            "ini": "09:00",
            "fin:": "09:30"
        },
        {
            "ini": "09:30",
            "fin:": "10:00"
        }
    ]
]



***********************************GRABAR  TURNO ***************************

esta ruta devuelve los turnos disponibles, 

POST localhost:3000/api/scheduleshifts

info a enviar por BODY, EJEMPLO 
{
	"state": "TOMADO",
	"date": "2023-04-14",
	"hour": "9:00",
	"specialistId": 3,
	"userId": 2,
	"sedeId": 1,
	"specialtyId": 1

}

El campo STATE serian diferentes estados, hasta el momento idenficito 3

TOMADO: Cuando se toma el turno.
LIBERADO: Cuando se cancela y que libre nuevamente
FINALIZADO: Cuando finaliza la atencion. 



DEVUELVE LA INFO EN EL SIGUIENTE FORMATO (EJEMPLO) 

{
    "Shift": {
        "id": 8,
        "state": "TOMADO",
        "date": "2023-04-14",
        "hour": "09:00:00",
        "specialistId": 3,
        "userId": 2,
        "sedeId": 1,
        "specialtyId": 1,
        "updatedAt": "2023-04-12T14:30:53.573Z",
        "createdAt": "2023-04-12T14:30:53.573Z"
    }
}

***********************************Obtener turnos de un usuario ***************************

este endpoint devuelve los turnos de un usuario. 

GET localhost:3000/api/shiftbyuser/1

enviar por params el id del usuario. 

Devuelve la info en el siguiente formato. 

[
    {
        "id": 2,
        "state": "Tomado",
        "date": "2023-04-11",
        "hour": "09:30:00",
        "createdAt": "2023-04-07T03:00:00.000Z",
        "updatedAt": "2023-04-07T03:00:00.000Z",
        "specialistId": 2,
        "userId": 1,
        "sedeId": 1,
        "specialtyId": 1,
        "specialist": {
            "id": 2,
            "name": "Perez Juan",
            "speciality": "Clinico",
            "adress": "direccion 213",
            "phone": "14433654",
            "tuition": "c1565",
            "consultingRoom": "109",
            "sedes": [
                {
                    "id": 1,
                    "name": "NORTE",
                    "Specialist_sede": {
                        "mondayini": "08:00:00",
                        "mondayend": "12:00:00",
                        "mondaytotal": 8,
                        "tuesdayini": "08:00:00",
                        "tuesdayend": "12:00:00",
                        "tuesdaytotal": 8,
                        "wednesdayini": "08:00:00",
                        "wednesdayend": "12:00:00",
                        "wednesdaytotal": 8,
                        "thursdayini": null,
                        "thursdayend": null,
                        "thursdaytotal": null,
                        "fridayini": "08:00:00",
                        "fridayend": "12:00:00",
                        "fridaytotal": 8,
                        "specialistId": 2,
                        "sedeId": 1
                    },
                    "specialties": [
                        {
                            "id": 1,
                            "description": "Cardiología",
                            "Speciality_sede": {
                                "createdAt": "2023-04-02T03:00:00.000Z",
                                "updatedAt": "2023-04-02T03:00:00.000Z",
                                "specialtyId": 1,
                                "sedeId": 1
                            }
                        },
                        {
                            "id": 2,
                            "description": "Nutricionista",
                            "Speciality_sede": {
                                "createdAt": "2023-04-02T03:00:00.000Z",
                                "updatedAt": "2023-04-02T03:00:00.000Z",
                                "specialtyId": 2,
                                "sedeId": 1
                            }
                        }
                    ]
                }
            ]
        }
    },
    {
        "id": 3,
        "state": "Tomado",
        "date": "2023-04-12",
        "hour": "09:00:00",
        "createdAt": "2023-04-07T03:00:00.000Z",
        "updatedAt": "2023-04-07T03:00:00.000Z",
        "specialistId": 2,
        "userId": 1,
        "sedeId": 1,
        "specialtyId": 1,
        "specialist": {
            "id": 2,
            "name": "Perez Juan",
            "speciality": "Clinico",
            "adress": "direccion 213",
            "phone": "14433654",
            "tuition": "c1565",
            "consultingRoom": "109",
            "sedes": [
                {
                    "id": 1,
                    "name": "NORTE",
                    "Specialist_sede": {
                        "mondayini": "08:00:00",
                        "mondayend": "12:00:00",
                        "mondaytotal": 8,
                        "tuesdayini": "08:00:00",
                        "tuesdayend": "12:00:00",
                        "tuesdaytotal": 8,
                        "wednesdayini": "08:00:00",
                        "wednesdayend": "12:00:00",
                        "wednesdaytotal": 8,
                        "thursdayini": null,
                        "thursdayend": null,
                        "thursdaytotal": null,
                        "fridayini": "08:00:00",
                        "fridayend": "12:00:00",
                        "fridaytotal": 8,
                        "specialistId": 2,
                        "sedeId": 1
                    },
                    "specialties": [
                        {
                            "id": 1,
                            "description": "Cardiología",
                            "Speciality_sede": {
                                "createdAt": "2023-04-02T03:00:00.000Z",
                                "updatedAt": "2023-04-02T03:00:00.000Z",
                                "specialtyId": 1,
                                "sedeId": 1
                            }
                        },
                        {
                            "id": 2,
                            "description": "Nutricionista",
                            "Speciality_sede": {
                                "createdAt": "2023-04-02T03:00:00.000Z",
                                "updatedAt": "2023-04-02T03:00:00.000Z",
                                "specialtyId": 2,
                                "sedeId": 1
                            }
                        }
                    ]
                }
            ]
        }
    }
]


***********************************Obtener los especialiestas de una especialidad ***************************

GET localhost:3000/api/specialistbyspeciality/5

devuelve 

[
    {
        "id": 5,
        "description": "Diagnostico por imagenes",
        "specialists": [
            {
                "id": 1,
                "name": "Horacio Guaraná",
                "speciality": "Cardiologia",
                "adress": "Av.Francia 2942",
                "phone": "2323241412",
                "tuition": "24179",
                "consultingRoom": "3",
                "Specialist_Speciality": {
                    "createdAt": "2022-08-13T00:00:00.000Z",
                    "updatedAt": "2023-04-19T14:55:12.486Z",
                    "specialistId": 1,
                    "specialtyId": 5
                }
            },
            {
                "id": 2,
                "name": "Carlos Simpson",
                "speciality": "Traumatologia",
                "adress": "Av.Siempre Viva 145",
                "phone": "41772",
                "tuition": "56756",
                "consultingRoom": "33",
                "Specialist_Speciality": {
                    "createdAt": "2022-08-13T00:00:00.000Z",
                    "updatedAt": "2023-04-19T14:55:12.486Z",
                    "specialistId": 2,
                    "specialtyId": 5
                }
            },
            {
                "id": 7,
                "name": "Juan Manuel García",
                "speciality": "Endoscopía",
                "adress": "Godoy 7474",
                "phone": "225584",
                "tuition": "98013",
                "consultingRoom": "74",
                "Specialist_Speciality": {
                    "createdAt": "2022-08-13T00:00:00.000Z",
                    "updatedAt": "2023-04-19T14:55:12.486Z",
                    "specialistId": 7,
                    "specialtyId": 5
                }
            }
        ]
    }
]


*/
