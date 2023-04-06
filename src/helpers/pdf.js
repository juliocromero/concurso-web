import Logo_UNSAM from "../assets/logo.png";

function createPdfAnexoIII(response, concurso) {
    const doc = new jspdf.jsPDF();
    doc.text("Gerencia de Informatica", 130, 30);
    doc.addImage(Logo_UNSAM, "png", 10, 22, 50, 10);
    doc.line(10, 35, 200, 35);
    doc.setTextColor("#6a99c0");
    doc.setFontSize(9);
    doc.text("Formularios a Generar", 10, 40);
    doc.text(
        `Gerencia de Informática 12 Formularios a Generar ANEXO III – RESOLUCIÓN N°885/2021`,
        10,
        50
    );
    doc.setTextColor("black");
    doc.text("NOTA SOLICITUD DE INSCRIPCIÓN", 105, 60, { align: "center" });
    doc.setFontSize(7);
    const res = response.sys_creation_date.split("-");
    res[2] = res[2].split("T")[0];
    doc.text(
        `San Martín, ${res[2]} de ${res[1]} de ${res[0]}-`,
        200,
        80,
        { align: "right" }
    );
    doc.setFontSize(9);
    doc.text(`SECRETARÍA ADMINISTRATIVA Y LEGAL:`, 10, 90);
    doc.text(
        `Tengo el agrado de dirigirme a Ud. a fin de presentar la inscripción al:`,
        10,
        95
    );
    var columns = [
        [
            { content: 'CONCURSO PARA LA COBERTURA DE CARGOS DEL PERSONAL NO DOCENTE', colSpan: 3, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        ],
        [
            { content: `CONCURSO N° ${concurso?.numero} `, colSpan: 1, styles: {} },
            { content: `Exp. N° ${concurso?.expediente}`, colSpan: 1, styles: {} },
            { content: `D. SAD o RR N° ${concurso?.id_dependencia}`, colSpan: 0, styles: {} },
        ],
    ];
    var rows = [
        ["DEPENDENCIA", concurso?.dependencias?.name],
        ["CARGO", response?.cargo_ocupado],
        ["CATEGORÍA", response?.categoria]
    ];
    doc.autoTable({
        startY: 110,
        head: columns,
        body: rows,
        theme: 'grid'
    });

    doc.text('Se adjunta el Formulario de Antecedentes Personales.', 10, 170)
    doc.text('Sin otro particular lo saludo muy atentamente', 10, 175)
    doc.text('Firma: ............................................................', 190, 190, { align: "right" })
    doc.text('Aclaración: .......................................................', 190, 200, { align: "right" })
    doc.text(`DNI: ${response.dni}`, 190, 210, { align: "right" })
    doc.save("Anexo_III.pdf");
};

function createPdfAnexoIV(response, concurso) {
    const doc = new jspdf.jsPDF();
    doc.text("Gerencia de Informatica", 130, 30);
    doc.addImage(Logo_UNSAM, "png", 10, 22, 50, 10);
    doc.line(10, 35, 200, 35);
    doc.setTextColor("#6a99c0");
    doc.setFontSize(9);
    doc.text("ANEXO IV.2 – RESOLUCIÓN N°885/2021", 10, 40);
    doc.setTextColor('black')
    doc.text('DECLARACIÓN JURADA', 105, 50, { align: "center" })
    doc.setFontSize(9)
    doc.text('Por la presente declaro bajo juramento que:', 105, 60, { align: "right" })
    doc.text('NO he incurrido en actos de fuerza contra el orden institucional y el sistema', 110, 65, { align: 'center' })
    doc.text('democrático y/o en violaciones a los derechos humanos y/o terrorismo de Estado; aún', 110, 70, { align: 'center' })
    doc.text('cuando me haya beneficiado por indulto o condonación de penas', 110, 75, { align: 'center' })

    doc.text('NO he sido condenado/a por delito doloso, hasta el cumplimiento de la pena', 110, 90, { align: 'center' })
    doc.text('privativa de la libertad o el término previsto para la prescripción de la pena.', 110, 95, { align: 'center' })

    doc.text('NO he sido condenado/a por delito en perjuicio de cualquier Institución', 155, 105, { align: 'right' })
    doc.text('Universitaria o de la Administración Pública Nacional, provincial o municipal, sus entes', 110, 110, { align: 'center' })
    doc.text('descentralizados o figuras afines.', 110, 115, { align: 'center' })

    doc.text('NO me encuentro inhabilitado/a para el ejercicio de cargos públicos.', 151, 125, { align: 'right' })

    doc.text('NO me encuentro exonerado/a o declarado/a cesante de cualquier organismo', 110, 135, { align: 'center' })
    doc.text('de los poderes públicos nacionales, provinciales o municipales, sus entes descentralizados', 110, 140, { align: 'center' })
    doc.text('o figuras afines.', 110, 145, { align: 'center' })

    doc.text('Que he tomado conocimiento de las normas que rigen el presente llamado,', 108, 155, { align: 'center' })
    doc.text('como así también las correspondientes a la UNIVERSIDAD y a la actividad No Docente.', 110, 160, { align: 'center' })

    doc.text('Cualquier modificación de los datos consignados serán informados antes de la', 110, 170, { align: 'center' })
    doc.text('entrevista con los Jurados y la prueba de oposición.', 110, 175, { align: 'center' })

    doc.text('Todos los datos consignados en las hojas de ........ a ........... son veraces y exactos.', 110, 185, { align: 'center' })
    doc.text('Me notifico que cualquier falsedad, ocultamiento y omisión dará motivo a la exclusión directa.', 110, 190, { align: 'center' })
    doc.text('de esta inscripción.', 110, 195, { align: 'center' })


    doc.save("Anexo_IV.pdf");
};

function createPdfAnexoV(response, concurso) {
    const doc = new jspdf.jsPDF();
    doc.text("Gerencia de Informatica", 130, 30);
    doc.addImage(Logo_UNSAM, "png", 10, 22, 50, 10);
    doc.line(10, 35, 200, 35);
    doc.setTextColor("#6a99c0");
    doc.setFontSize(9);
    doc.text("ANEXO IV.1 – RESOLUCIÓN N°885/2021", 10, 40);
    doc.setTextColor('black')
    doc.text('FORMULARIO DE ANTECEDENTES PERSONALES', 105, 50, { align: "center" })
    doc.setFontSize(9)
    var columnsDatosPersonales = [
        [
            { content: 'DATOS PERSONALES', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        ],
        [
            { content: ``, colSpan: 1, styles: {} },
            { content: ``, colSpan: 1, styles: {} },
        ],

    ];
    var rowsDatosPersonales = [
        ["APELLIDO/S", response?.apellido],
        ["NOMBRE/S", response?.name],
        ["FECHA DE NACIMIENTO", response?.fecha_nac],
        ["TIPO Y N° DE DOCUMENTO", response?.dni],
        ["DOMICILIO a los fines del concurso", ` 

        Calle: ${response?.calle}   Número:  ${response?.numero}
        
        Piso: ${response?.piso}  Dpto.: ${response?.depto}

        Código Postal: ${response?.cod_postal}
        
        Localidad: ${response?.localidad}    Pcia.:_______

        TE Celular: ${response?.telefono}   correo electrónico: ${response?.email}
        `]
    ];
    doc.autoTable({
        startY: 70,
        head: columnsDatosPersonales,
        body: rowsDatosPersonales,
        theme: 'grid'
    });

    var columnsAntecedentes = [
        [
            { content: 'ANTECEDENTES PERSONALES', colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        ],
        [
            {
                content: `1- EDUCACIÓN FORMAL
            De nivel primario, secundario, terciario, pregrado, grado, posgrado.
            (En todos los casos se deberá acompañar original o copia fiel de los títulos informados o presentar el original con copia simple para ser
            certificada por el personal de la UNSAM correspondiente. Se podrá consignar solamente el/los título/s que la persona considere más relevantes
            para tener en consideración por el Jurado)`, colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] }
            },
        ],

    ];
    var rowsAntecedentes = [
        [`TÍTULO AFÍN AL CARGO (según
            requisito del concurso)`, response?.titulo ],
        ["INSTITUCIÓN", response?.institucion ],
        [`FECHA DE EGRESO (en caso de no
            haber alcanzado el nivel completo, indicando`, response?.fecha_ingreso ],

        [`cantidad de años cursados y cantidad de
        materias)`, response?.dur_curso ],
    ];
    doc.autoTable({
        startY: 170,
        head: columnsAntecedentes,
        body: rowsAntecedentes,
        theme: 'grid'
    });

    doc.addPage('a0 - a10')
    doc.text("Gerencia de Informatica", 130, 30);
    doc.addImage(Logo_UNSAM, "png", 10, 22, 50, 10);
    doc.line(10, 35, 200, 35);


    var columnsEducacion = [
        [
            {
                content: `1- EDUCACIÓN FORMAL
            (en caso de varios títulos de igual o distinto nivel, consignar en los cuadros siguientes)`, colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] }
            },
        ],

    ];
    var rowsEducacion = [
        [`1.- TÍTULO`, response?.educacion ],

        [`INSTITUCIÓN`, response?.institucion ],
        [`FECHA DE EGRESO`, response?.fecha_ingreso ],
    ];
    doc.autoTable({
        startY: 50,
        head: columnsEducacion,
        body: rowsEducacion,
        theme: 'grid'
    });

    var columnsEducacion = [
        [
            {
                content: `2- OTROS ESTUDIOS PERTINENTES A LAS FUNCIONES
            (No comprendidos en el apartado anterior. Se podrán detallar cursos, seminarios, congresos, etc. De interés para el cargo)`, colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] }
            },
        ],

    ];
    var rowsEducacion = [
        [`1.- INSTITUCIÓN`, response?.institucion ],

        [`DURACIÓN DE LOS ESTUDIOS`, response?.dur_curso ],
        [`FECHA DE EGRESO`, response?.fecha_ingreso ],
        [`TÍTULO (si corresponde)`, response?.titulo]
    ];
    doc.autoTable({
        startY: 90,
        head: columnsEducacion,
        body: rowsEducacion,
        theme: 'grid'
    });

    var columnsOtrosEstudios = [
        [
            { content: `2- OTROS ESTUDIOS EN GENERAL`, colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        ],

    ];
    var rowsOtrosEstudios = [
        [`1.- INSTITUCIÓN`,  response?.institucion],

        [`DURACIÓN DE LOS ESTUDIOS`, response?.dur_curso],
        [`FECHA DE EGRESO`, response?.fecha_ingreso],
        [`TÍTULO (si corresponde)`,  response?.titulo]
    ];
    doc.autoTable({
        startY: 140,
        head: columnsOtrosEstudios,
        body: rowsOtrosEstudios,
        theme: 'grid'
    });

    var columnsAntecedentesLaborales = [
        [
            { content: `ANTECEDENTES
            (comiense por su(s) Actual(es) y continue en orden cronologico descendente)
            `, colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        ],
        [
            { content: `1 - AFINES AL CARGO`, colSpan: 2, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        ],

    ];
    var rowsAntecedentesLaborales = [
        [`CARGO OCUPADO`, response?.cargo_ocupado],

        [`CATEGORÍA`, response?.categoria],
        [`PERÍODO DE DESEMPEÑO`, response?.per_desempe_o],
        [`PERSONAL A CARGO (si corresponde,
            cantidad y agrupamiento)`, response?.persona_a_cargo],
            
        [`EVALUACIONES DE DESEMPEÑO
        (detallar años y calificación)`, response?.eva_desempe_o],
        [`OTRAS REFERENCIAS QUE
        CONSIDERE PERTINENTE`, response?.otra_referencias]
    ];
    doc.autoTable({
        startY: 200,
        head: columnsAntecedentesLaborales,
        body: rowsAntecedentesLaborales,
        theme: 'grid'
    });
    doc.addPage('a0 - a10')
    doc.text("Gerencia de Informatica", 130, 30);
    doc.addImage(Logo_UNSAM, "png", 10, 22, 50, 10);
    doc.line(10, 35, 200, 35);

    var columnsAntecedentesLaboralesOtros = [
        [
            { content: `2 - OTROS ANTECEDENTES EN LA INSTITUCIÓN 
            (por orden de antigüedad primero los más recientes)`, colSpan: 1, styles: { halign: 'center', fillColor: [22, 160, 133] } },
        ],

    ];
    var rowsAntecedentesLaborales = [
        [response?.otros_antecedente_laborales ? response?.otros_antecedente_laborales : `.................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        .................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        .................................................................................................................................
        ................................................................................................................................
        ................................................................................................................................
        .................................................................................................................................
        ................................................................................................................................
        ...............................................................................................................................`],
    ];
    doc.autoTable({
        startY: 40,
        head: columnsAntecedentesLaboralesOtros,
        body: rowsAntecedentesLaborales,
        theme: 'grid'
    });
    doc.text('(Se agradece completar en letra clara y mayúscula, después de completar la planilla numerar', 20 ,140)
    doc.text('todas las hojas y firmarlas antes de su presentación)', 20 ,145)
    doc.text('El presente formulario tiene carácter de Declaración Jurada.', 20 ,150)

    doc.save("Anexo_V.pdf");
};

export { createPdfAnexoIII, createPdfAnexoIV, createPdfAnexoV }