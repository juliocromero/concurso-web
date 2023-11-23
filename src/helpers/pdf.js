import Logo_UNSAM from "../assets/logo.png";

function formatDate(fecha){
  if(fecha){
    let partesFecha = fecha.split("-");
    let ani = partesFecha[0];
    let mes = partesFecha[1];
    let dia = partesFecha[2];
    return `${dia}-${mes}-${ani}`
  }else {
    return fecha
  }
  
}

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
  doc.text(`San Martín, ${res[2]} de ${res[1]} de ${res[0]}-`, 200, 80, {
    align: "right",
  });
  doc.setFontSize(9);
  doc.text(`SECRETARÍA ADMINISTRATIVA Y LEGAL:`, 10, 90);
  doc.text(
    `Tengo el agrado de dirigirme a Ud. a fin de presentar la inscripción al:`,
    10,
    95
  );
  var columns = [
    [
      {
        content: "CONCURSO PARA LA COBERTURA DE CARGOS DEL PERSONAL NO DOCENTE",
        colSpan: 3,
        styles: { halign: "center", fillColor: [22, 160, 133] },
      },
    ],
    [
      { content: `CONCURSO N° ${concurso?.numero} `, colSpan: 1, styles: {} },
      { content: `Exp. N° ${concurso?.expediente}`, colSpan: 1, styles: {} },
      {
        content: `${concurso?.num_acto_adminstrativo}`,
        colSpan: 0,
        styles: {},
      },
    ],
  ];
  var rows = [
    ["DEPENDENCIA", concurso?.dependencias?.name],
    ["CARGO", concurso?.denominacion_del_cargo],
    ["CATEGORÍA", response?.categoria],
  ];
  doc.autoTable({
    startY: 110,
    head: columns,
    body: rows,
    theme: "grid",
  });

  doc.text("Se adjunta el Formulario de Antecedentes Personales.", 10, 170);
  doc.text("Sin otro particular lo saludo muy atentamente", 10, 175);
  doc.text(
    "Firma: ............................................................",
    190,
    190,
    { align: "right" }
  );
  doc.text(
    "Aclaración: .......................................................",
    190,
    200,
    { align: "right" }
  );
  doc.text(`DNI: ${response.dni}`, 190, 210, { align: "right" });
  doc.save("Anexo_III.pdf");
}

function createPdfAnexoIV(response, concurso) {
  const doc = new jspdf.jsPDF();
  doc.text("Gerencia de Informatica", 130, 30);
  doc.addImage(Logo_UNSAM, "png", 10, 22, 50, 10);
  doc.line(10, 35, 200, 35);
  doc.setTextColor("#6a99c0");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text("ANEXO IV.2 – RESOLUCIÓN N°885/2021", 10, 40);
  doc.setTextColor("black");
  doc.text("DECLARACIÓN JURADA", 105, 50, { align: "center" });
  doc.setFontSize(10);
  doc.text("Por la presente declaro bajo juramento que:", 50, 60, );
  doc.text(
    "NO he incurrido en actos de fuerza contra el orden institucional y el sistema",
    50,
    65,
    
  );
  doc.text(
    "democrático y/o en violaciones a los derechos humanos y/o terrorismo de Estado; aún",
    25,
    70
    
  );
  doc.text(
    "cuando me haya beneficiado por indulto o condonación de penas",
    25,
    75,
    
  );

  doc.text(
    "NO he sido condenado/a por delito doloso, hasta el cumplimiento de la pena",
    50,
    90,
    
  );
  doc.text(
    "privativa de la libertad o el término previsto para la prescripción de la pena.",
    25,
    95,
    
  );

  doc.text(
    "NO he sido condenado/a por delito en perjuicio de cualquier Institución",
    50,
    105,
    
  );
  doc.text(
    "Universitaria o de la Administración Pública Nacional, provincial o municipal, sus entes",
    25,
    110,
    
  );
  doc.text("descentralizados o figuras afines.", 25, 115,);

  doc.text(
    "NO me encuentro inhabilitado/a para el ejercicio de cargos públicos.",
    50,
    125,
    
  );

  doc.text(
    "NO me encuentro exonerado/a o declarado/a cesante de cualquier organismo",
    50,
    135,
    
  );
  doc.text(
    "de los poderes públicos nacionales, provinciales o municipales, sus entes descentralizados",
    25,
    140,
    
  );
  doc.text("o figuras afines.", 25, 145, );

  doc.text(
    "Que he tomado conocimiento de las normas que rigen el presente llamado,",
    50,
    155,
    
  );
  doc.text(
    "como así también las correspondientes a la UNIVERSIDAD y a la actividad No Docente.",
    25,
    160,
    
  );

  doc.text(
    "Cualquier modificación de los datos consignados serán informados antes de la",
    25,
    170,
    
  );
  doc.text("entrevista con los Jurados y la prueba de oposición.", 25, 175, );

  doc.text(
    "Todos los datos consignados en las hojas de ........ a ........... son veraces y exactos.",
    50,
    185,
    
  );
  doc.text(
    "Me notifico que cualquier falsedad, ocultamiento y omisión dará motivo a la exclusión directa.",
    25,
    190,
    
  );
  doc.text("de esta inscripción.", 25, 195, );

  doc.save("Anexo_IV.pdf");
}

function createPdfAnexoV(response, concurso) {
  const doc = new jspdf.jsPDF();
  doc.text("Gerencia de Informatica", 130, 30);
  doc.addImage(Logo_UNSAM, "png", 10, 22, 50, 10);
  doc.line(10, 35, 200, 35);
  doc.setTextColor("#6a99c0");
  doc.setFontSize(9);
  doc.text("ANEXO V.1 – RESOLUCIÓN N°885/2021", 10, 40);
  doc.setTextColor("black");
  doc.text("FORMULARIO DE ANTECEDENTES PERSONALES", 105, 50, {
    align: "center",
  });
  doc.setFontSize(9);
  var columnsDatosPersonales = [
    [
      {
        content: "DATOS PERSONALES",
        colSpan: 2,
        styles: { halign: "center", fillColor: [22, 160, 133] },
      },
    ],
    [
      { content: ``, colSpan: 1, styles: {} },
      { content: ``, colSpan: 1, styles: {} },
    ],
  ];
  var rowsDatosPersonales = [
    ["APELLIDO/S", response?.apellido],
    ["NOMBRE/S", response?.name],
    ["FECHA DE NACIMIENTO", formatDate(response?.fecha_nac)],
    ["TIPO Y N° DE DOCUMENTO", response?.dni],
    [
      "DOMICILIO a los fines del concurso",
      ` 

        Calle: ${response?.calle}   Número:  ${response?.numero}
        
        Piso: ${response?.piso}  Dpto.: ${response?.depto}

        Código Postal: ${response?.cod_postal}
        
        Localidad: ${response?.localidad}    Pcia.:_______

        TE Celular: ${response?.telefono}   correo electrónico: ${response?.email}
        `,
    ],
  ];
  doc.autoTable({
    startY: 70,
    head: columnsDatosPersonales,
    body: rowsDatosPersonales,
    theme: "grid",
  });

  var columnsAntecedentes = [
    [
      {
        content: "ANTECEDENTES PERSONALES",
        colSpan: 2,
        styles: { halign: "center", fillColor: [22, 160, 133] },
      },
    ],
    [
      {
        content: `1- EDUCACIÓN FORMAL
            De nivel primario, secundario, terciario, pregrado, grado, posgrado.
            (En todos los casos se deberá acompañar original o copia fiel de los títulos informados o presentar el original con copia simple para ser
            certificada por el personal de la UNSAM correspondiente. Se podrá consignar solamente el/los título/s que la persona considere más relevantes
            para tener en consideración por el Jurado)`,
        colSpan: 2,
        styles: { halign: "center", fillColor: [22, 160, 133] },
      },
    ],
  ];
  let finAlCargo = response.aspirante_formacion.filter(
    e => e.educacion == "Titulo a fin al cargo"
  );
  finAlCargo.map(e => {
    var rowsAntecedentes = [
      [
        `TÍTULO AFÍN AL CARGO (según
              requisito del concurso)`,
        e?.titulo,
      ],
      ["INSTITUCIÓN", e?.institucion],
      [
        `FECHA DE EGRESO (en caso de no
              haber alcanzado el nivel completo, indicando`,
              formatDate(e?.fecha_ingreso),
      ],

      /* [
        `cantidad de años cursados y cantidad de
          materias)`,
        e?.dur_curso,
      ], */
    ];
    doc.autoTable({
      startY: 170,
      head: columnsAntecedentes,
      body: rowsAntecedentes,
      theme: "grid",
    });
  });

  doc.addPage("a0 - a10");
  doc.text("Gerencia de Informatica", 130, 30);
  doc.addImage(Logo_UNSAM, "png", 10, 22, 50, 10);
  doc.line(10, 35, 200, 35);

  var columnsEducacion = [
    [
      {
        content: `1- EDUCACIÓN FORMAL
             (en caso de varios títulos de igual o distinto nivel, consignar en los cuadros siguientes)`,
        colSpan: 2,
        styles: { halign: "center", fillColor: [22, 160, 133] },
      },
    ],
  ];

  let educacionFormal = response?.aspirante_formacion.filter(
    e =>
      e.educacion != "Otros Estudios Pertinentes a la funciones" &&
      e.educacion != "Titulo a fin al cargo"
  );
  
  let formacion = educacionFormal.flatMap((formation, index) => {
    let data = [
      [`${index + 1}.- TÍTULO`, formation.titulo],
      /* [`EDUCACIÓN`, formation.educacion], */
      [`INSTITUCIÓN`, formation.institucion],
      [`FECHA DE EGRESO`, formatDate(formation.fecha_ingreso)],
    ];
    return data;
  });

  /* var rowsEducacion = [
    [`1.- TÍTULO`, response?.educacion],
    [`INSTITUCIÓN`, response?.institucion],
    [`FECHA DE EGRESO`, formatDate(response?.fecha_ingreso)],
  ]; */
  doc.autoTable({
    startY: 50,
    head: columnsEducacion,
    body: formacion,
    theme: "grid",
  });
  /* for (const [index, item] of formacion) {
    console.log(index, item)
    doc.autoTable({
        startY: 50,
        head: columnsEducacion,
        body: rowsEducacion,
        theme: "grid",
      });    
  } */

  var columnsEducacion = [
    [
      {
        content: `2- OTROS ESTUDIOS PERTINENTES A LAS FUNCIONES
             (No comprendidos en el apartado anterior. Se podrán detallar cursos, seminarios, congresos, etc. De interés para el cargo)`,
        colSpan: 2,
        styles: { halign: "center", fillColor: [22, 160, 133] },
      },
    ],
  ];

  let otrosEstudios = response.aspirante_formacion.filter(
    e => e.educacion == "Otros Estudios Pertinentes a la funciones"
  );
  let formacionPertinentes = otrosEstudios.flatMap((formation, index) => {
    let data = [
      [`${index + 1}.-INSTITUCIÓN`, formation.institucion],
      [`DURACIÓN DE LOS ESTUDIOS`, formation.dur_curso],
      [`FECHA DE EGRESO`, formatDate(formation?.fecha_ingreso)],      
      [`TÍTULO`, formation.titulo],
    ];
    return data;
  });

  var rowsEducacion = [
    [`1.- TÍTULO`, response?.educacion],
    [`INSTITUCIÓN`, response?.institucion],
    [`FECHA DE EGRESO`, formatDate(response?.fecha_ingreso)],
  ];
  doc.autoTable({
    head: columnsEducacion,
    body: formacionPertinentes,
    theme: "grid",
  });
  /* otrosEstudios.map(e => {
    var rowsEducacion = [
      [`1.- INSTITUCIÓN`, e?.institucion],
  
      [`DURACIÓN DE LOS ESTUDIOS`, e?.dur_curso],
      [`FECHA DE EGRESO`, e?.fecha_ingreso],
      [`TÍTULO (si corresponde)`, e?.titulo],
    ];
  
    doc.autoTable({
      head: columnsEducacion,
      body: rowsEducacion,
      theme: "grid",
    });

  }) */
  

  /* var columnsOtrosEstudios = [
    [
      {
        content: `3- OTROS ESTUDIOS EN GENERAL`,
        colSpan: 2,
        styles: { halign: "center", fillColor: [22, 160, 133] },
      },
    ],
  ];
  var rowsOtrosEstudios = [
    [`1.- INSTITUCIÓN`, '...'],

    [`DURACIÓN DE LOS ESTUDIOS`, '...'],
    [`FECHA DE EGRESO`, '...'],
    [`TÍTULO (si corresponde)`, '...'],
  ];
  doc.autoTable({
    head: columnsOtrosEstudios,
    body: rowsOtrosEstudios,
    theme: "grid",
  }); */

  var columnsAntecedentesLaborales = [
    [
      {
        content: `ANTECEDENTES
            (comiense por su(s) Actual(es) y continue en orden cronologico descendente)
            `,
        colSpan: 2,
        styles: { halign: "center", fillColor: [22, 160, 133] },
      },
    ],
    [
      {
        content: `1 - AFINES AL CARGO`,
        colSpan: 2,
        styles: { halign: "center", fillColor: [22, 160, 133] },
      },
    ],
  ];
  var rowsAntecedentesLaborales = [
    [`CARGO OCUPADO`, response?.cargo_ocupado],

    [`CATEGORÍA`, response?.categoria],
    [`AGRUPAMIENTO`, response?.agrupamiento],
    [`PERÍODO DE DESEMPEÑO`, response?.per_desempe_o],    
    [
      `PERSONAL A CARGO (si corresponde,
            cantidad y agrupamiento)`,
      response?.persona_a_cargo,
    ],

    [
      `EVALUACIONES DE DESEMPEÑO
        (detallar años y calificación)`,
      response?.eva_desempe_o,
    ],
    [
      `OTRAS REFERENCIAS QUE
        CONSIDERE PERTINENTE`,
      response?.otra_referencias,
    ],
  ];
  doc.addPage("a0 - a10");
  doc.autoTable({
    startY: 20,
    head: columnsAntecedentesLaborales,
    body: rowsAntecedentesLaborales,
    theme: "grid",
  });
  var columnsAntecedentesLaboralesOtros = [
    [
      {
        content: `2 - OTROS ANTECEDENTE EN LA INSTITUCIÓN O EN OTRO EMPLEOS AFINES AL CARGO A CONCURSAR 
            (por orden de antigüedad primero los más recientes)`,
        colSpan: 1,
        styles: { halign: "center", fillColor: [22, 160, 133] },
      },
    ],
  ];
  var rowsAntecedentesLaborales = [
    [
      response?.otros_antecedente_laborales
        ? response?.otros_antecedente_laborales
        : `.................................................................................................................................
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
        ...............................................................................................................................`,
    ],
  ];
  doc.autoTable({
    head: columnsAntecedentesLaboralesOtros,
    body: rowsAntecedentesLaborales,
    theme: "grid",
  });
  // doc.addPage('a0 - a10')
  // doc.text("Gerencia de Informatica", 130, 30);
  // doc.addImage(Logo_UNSAM, "png", 10, 22, 50, 10);
  // doc.line(10, 35, 200, 35);
  doc.text(
    "(Se agradece completar en letra clara y mayúscula, después de completar la planilla numerar",
    20,
    270
  );
  doc.text("todas las hojas y firmarlas antes de su presentación)", 20, 275);
  doc.text(
    "El presente formulario tiene carácter de Declaración Jurada.",
    20,
    280
  );

  doc.save("Anexo_V.pdf");
}
export { createPdfAnexoIII, createPdfAnexoIV, createPdfAnexoV };
