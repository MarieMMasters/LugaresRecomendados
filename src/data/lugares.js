const REGIONES = {
  occidente: {
    name: "Occidente",
    color: "#8a9a4b",
    departments: "Ahuachapán, Sonsonate y Santa Ana",
  },
  central: {
    name: "Central",
    color: "#3e7a4f",
    departments: "San Salvador, La Libertad, La Paz y más",
  },
  oriente: {
    name: "Oriente",
    color: "#8a5a32",
    departments: "San Miguel, Usulután, Morazán y La Unión",
  },
};

// DATOS
const IMAGE_DIRECTORY = "/img/";
const DATA = {
  occidente: {
    description:
      "Entre cafetales que cubren las montañas, volcanes imponentes y pueblos llenos de color, el occidente de El Salvador cautiva con sus paisajes y tradiciones. Sus calles empedradas, plazas acogedoras y mercados locales conservan la esencia de la vida salvadoreña, donde cada rincón invita a descubrir algo nuevo. El aroma del café recién cosechado acompaña las mañanas, mientras los sabores de sus platillos típicos reúnen a familias y visitantes alrededor de la mesa. Aquí, la gastronomía se disfruta sin prisas, entre antojitos tradicionales, dulces artesanales y una taza de café que refleja la riqueza de sus tierras.",
    places: [
      {
        name: "Entre Nubes",
        description:
          "Hermoso lugar al aire libre con una gran variedad de platillos típicos: sopa de gallina, buñuelos con chilate, riguas, almuerzo típico y opciones vegetarianas.",
        social: {
          facebook: "https://www.facebook.com/profile.php?id=100064457178444",
          instagram: "https://www.instagram.com/cafeentrenubes/",
        },
        query: "Entre Nubes, Ataco, Ahuachapán",
        coordinates: "13.848514,-89.832074",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Occidente y toma la Ruta 205 hacia Sonsonate. Al llegar a Sonsonate, transborda a la Ruta 249 con rumbo a Ahuachapán y pídele al motorista que te baje sobre la carretera entre Ataco y Apaneca, justo frente a Entre Nubes.<br>
                        <b>Opción 2:</b> Desde Ahuachapán: Toma la Ruta 249 o la Ruta 20 con dirección a Apaneca/Ataco y avísale al motorista que vas para el restaurante Entre Nubes.<br>
                        <b>Opción 3:</b> Desde Santa Ana: Dirígete a la Terminal Francisco Lara Pineda y toma la Ruta 210 hacia Ahuachapán. Una vez en Ahuachapán, transborda a la Ruta 249 hacia Ataco/Apaneca y bájate en el restaurante`,
        images: [
          "OCCIDENTE/Entre Nubes/imagen1.jpg",
          "OCCIDENTE/Entre Nubes/imagen2.jpg",
          "OCCIDENTE/Entre Nubes/imagen3.jpg",
        ],
      },
      {
        name: "El Jardín de Celeste",
        description:
          "Un espacio rodeado de exuberantes jardines y áreas verdes que también ofrece hospedaje en cabañas de montaña. Ideal para disfrutar en familia.",
        social: {
          facebook: "https://www.facebook.com/eljardindeceleste",
          instagram: "https://www.instagram.com/eljardindeceleste.oficial/",
        },
        query: "El Jardín de Celeste, Ataco, Ahuachapán",
        coordinates: "13.7105,-89.6531",
        busDirections: `<b>Opción 1:</b> Desde San Salvador (Vía Sonsonate): Terminal de Occidente toma Ruta 205 a Sonsonate, transborda a Ruta 249 y pide parada en El Jardín de Celeste.<br>
                        <b>Opción 2:</b> Desde Ahuachapán: Toma Ruta 249 o 238 hacia Ataco/Apaneca y baja en el restaurante.<br>
                        <b>Opción 3:</b> Desde Santa Ana: Terminal Francisco Lara Pineda toma Ruta 210 hacia Ahuachapán y transborda a Ruta 249.`,
        images: [
          "OCCIDENTE/El Jardin de Celeste/imagen1.jpg",
          "OCCIDENTE/El Jardin de Celeste/imagen2.jpg",
          "OCCIDENTE/El Jardin de Celeste/imagen3.jpg",
          "OCCIDENTE/El Jardin de Celeste/imagen4.jpg",
          "OCCIDENTE/El Jardin de Celeste/imagen5.jpg",
        ],
      },
      {
        name: "Plaza El Bosque",
        description:
          "Complejo recreativo y plaza al aire libre rodeada de un pinar con clima fresco. Cuenta con diversas alternativas gastronómicas y zonas de aventura.",
        social: {
          facebook: "https://www.facebook.com/plazaelbosque87",
          instagram:
            "https://www.instagram.com/plazaelbosqueahuachapan/?hl=es-la",
        },
        query: "Plaza del Bosque, Ahuachapán",
        coordinates: "13.8495,-89.8351",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Occidente y toma la Ruta 205 hacia Sonsonate. Al llegar, transborda a la Ruta 249 rumbo a Ahuachapán. Una vez en la ciudad de Ahuachapán, puedes tomar un microbús local o un mototaxi directo hacia la plaza.<br>
                        <b>Opción 2:</b> Desde Santa Ana: Ve a la Terminal Francisco Lara Pineda y toma la Ruta 210 directa hacia Ahuachapán. Al llegar a la terminal de Ahuachapán, toma el transporte local o camina hacia la zona de la plaza según tu ubicación exacta.`,
        images: [
          "OCCIDENTE/Plaza El Bosque/imagen1.jpg",
          "OCCIDENTE/Plaza El Bosque/imagen2.jpg",
          "OCCIDENTE/Plaza El Bosque/imagen3.jpg",
        ],
      },
      {
        name: "Restaurante Rincon Tipico de El Sopón",
        description:
          "Restaurante rustico con comida típica salvadoreña, como sopas, almuerzos y postres caseros. Ideal para disfrutar de un ambiente familiar y acogedor.",
        social: {
          facebook: "https://www.facebook.com/Rincontipicosantaana",
          instagram:
            "https://www.instagram.com/restauranterincontipico/?hl=es-la",
        },
        query: "Restaurante Rincon Tipico de El Sopón, Santa Ana",
        coordinates: "13.981372337372681, -89.55839734232842",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Occidente y toma la Ruta 201 directa hacia la ciudad de Santa Ana. Una vez en la terminal de Santa Ana, puedes tomar un taxi o abordar un microbús urbano local que te acerque a la zona céntrica (cerca de la 3ª Avenida Sur).<br>
                        <b>Opción 2:</b> Desde Ahuachapán: Dirígete a la terminal de Ahuachapán y toma la Ruta 210 hacia Santa Ana. Al llegar a la terminal Francisco Lara Pineda en Santa Ana, trasládate hacia el centro de la ciudad para llegar al restaurante.`,
        images: [
          "OCCIDENTE/Restaurante Rincon Tipico de El Sopon/imagen1.jpg",
          "OCCIDENTE/Restaurante Rincon Tipico de El Sopon/imagen2.jpg",
          "OCCIDENTE/Restaurante Rincon Tipico de El Sopon/imagen3.jpg",
        ],
      },
      {
        name: "Cafe Tejas",
        description:
          "Restaurante acojedor con tintes rusticos, mesas de billar y un menu tipico de comida salvadoreña. Ideal para disfrutar de un ambiente familiar y relajado.",
        social: {
          facebook: "https://www.facebook.com/cafetejas.santaana",
          instagram: "https://www.instagram.com/cafetejas_santaana/?hl=es-la",
        },
        query: "Cafe Tejas, calle 13 poniente, Santa Ana",
        coordinates: "13.981748859112143, -89.55369339814943",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Occidente y toma la Ruta 201 directa hacia Santa Ana. Al llegar a la terminal en Santa Ana, toma un microbús urbano o un taxi que te lleve directamente hacia la 13 Calle Poniente y Avenida Independencia.<br>
                        <b>Opción 2:</b> Desde Ahuachapán: Dirígete a la terminal de Ahuachapán y toma la Ruta 210 hacia Santa Ana. Una vez en la terminal Francisco Lara Pineda, trasládate en transporte local hacia la zona de la 13 Calle Poniente.`,
        images: [
          "OCCIDENTE/Cafe Tejas/imagen1.jpg",
          "OCCIDENTE/Cafe Tejas/imagen2.jpg",
          "OCCIDENTE/Cafe Tejas/imagen3.jpg",
          "OCCIDENTE/Cafe Tejas/imagen4.jpg",
        ],
      },

      {
        name: "Casa Margarita - Cocina Tradicional Santaneca",
        description:
          "Comedor familiar con platillos típicos de Santa Ana, como sopa de gallina india, tamales y almuerzos caseros.",
        note: "Redes: Facebook e Instagram no disponibles, pero puedes buscar reseñas en Google Maps",
        query: "Casa Margarita - Cocina Tradicional Santaneca, Santa Ana",
        coordinates: "13.981789015190174, -89.56384058465683",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Occidente y toma la Ruta 201 directa hacia Santa Ana. Al bajar en la terminal de Santa Ana, toma un microbús urbano o un taxi que te acerque a la zona de la 23 Calle Poniente.<br>
                        <b>Opción 2:</b> Desde Ahuachapán: Dirígete a la terminal de Ahuachapán y toma la Ruta 210 hacia Santa Ana. Una vez en la terminal Francisco Lara Pineda, toma el transporte local hacia el sector de la 23 Calle Poniente donde se ubica el restaurante.`,
        images: [
          "OCCIDENTE/Casa Margarita/imagen1.jpg",
          "OCCIDENTE/Casa Margarita/imagen2.jpg",
          "OCCIDENTE/Casa Margarita/imagen3.jpg",
        ],
      },

      {
        name: "Artisant",
        description:
          "Un lugar con un ambiente hogareño y acogedor, en el cual hay una buena variedad de platillos tipicos, asados, sopas y hamburguesas.",
        social: {
          facebook: "https://www.facebook.com/ArtisantSantaana",
          instagram: "https://www.instagram.com/artisantsantaana/?hl=es-la",
        },
        query: "Artisant, Santa Ana",
        coordinates: "13.994982449700828, -89.5555596184765",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Occidente y toma la Ruta 201 directa hacia Santa Ana. Al llegar a la terminal en Santa Ana, toma un microbús urbano o un taxi que te lleve directo hacia el centro histórico, específicamente por los alrededores del Callejón Sur de la Catedral.<br>
                        <b>Opción 2:</b> Desde Ahuachapán: Dirígete a la terminal de Ahuachapán y toma la Ruta 210 hacia Santa Ana. Una vez en la terminal Francisco Lara Pineda, trasládate en transporte local o camina hacia el centro de la ciudad para llegar a la zona de la catedral.`,
        images: [
          "OCCIDENTE/Artisant/imagen1.jpg",
          "OCCIDENTE/Artisant/imagen2.jpg",
          "OCCIDENTE/Artisant/imagen3.jpg",
          "OCCIDENTE/Artisant/imagen4.jpg",
        ],
      },

      {
        name: "La Finca - Tipicos y Asados",
        description:
          "Hermosa hacienda con un ambiente familiar y acogedor, donde se pueden disfrutar de platillos típicos salvadoreños y asados a la parrilla.",
        social: {
          facebook: "https://www.facebook.com/profile.php?id=61591595156692",
          instagram: "https://www.instagram.com/lafincatipicos.sv/?hl=es-la",
        },
        query: "La Finca - Tipicos y Asados, Sonsonate",
        coordinates: "13.847769193629075, -89.6761823338216",
        busDirections: `Opción 1: Desde San Salvador: Dirígete a la Terminal de Occidente y toma la Ruta 205 hacia Sonsonate. Pídele al motorista que te baje sobre la carretera en el tramo entre Nahuizalco y Sonsonate (cerca de la Cancha Altamira / Cantón Los Arenales), justo frente al restaurante.<br>
                        Opción 2: Desde Santa Ana: Dirígete a la Terminal Francisco Lara Pineda y toma la Ruta 216 hacia Sonsonate. Al llegar a Sonsonate, transborda a un microbús o bus local que suba hacia Nahuizalco por la carretera principal y pídele parada en la zona de Los Arenales.<br>
                        Opción 3: Desde Ahuachapán: Dirígete a la terminal de Ahuachapán y toma la Ruta 249 con dirección a Sonsonate (pasando por Apaneca, Juayúa y Nahuizalco). Pídele al motorista que te baje sobre la carretera antes de llegar a Sonsonate, específicamente en el sector del restaurante.`,
        images: [
          "OCCIDENTE/La Finca - Tipicos y Asados/imagen1.jpg",
          "OCCIDENTE/La Finca - Tipicos y Asados/imagen2.jpg",
          "OCCIDENTE/La Finca - Tipicos y Asados/imagen3.jpg",
          "OCCIDENTE/La Finca - Tipicos y Asados/imagen4.jpg",
        ],
      },

      {
        name: "Restaurante Finca Santa Teresa",
        description:
          "Restaurante con una decoracion rustica, areas de juegos para niños y un menu variado de comida tipica salvadoreña, asados y desaunos. Otorga un ambiente familiar y acojedor para el publico.",
        social: {
          facebook: "https://www.facebook.com/FincaStaTeresa",
          instagram: "https://www.instagram.com/finca_santa_teresa/?hl=es-la",
        },
        query: "Restaurante Finca Santa Teresa, Sonsonate",
        coordinates: "13.71222062498682, -89.72433369149509",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Occidente y toma la Ruta 205 directa hacia Sonsonate. Al llegar a la terminal de Sonsonate, toma un transporte local (como un bus hacia Juayúa/Ahuachapán por la ruta vieja o un taxi/tuk-tuk) que te lleve hacia la zona rural o desvío correspondiente de la finca.<br>
                        <b>Opción 2:</b> Desde Santa Ana: Dirígete a la Terminal Francisco Lara Pineda y toma la Ruta 216 hacia Sonsonate. Una vez en Sonsonate, transborda a un microbús o transporte local que se dirija hacia la zona norte del departamento.<br>
                        <b>Opción 3:</b> Desde Ahuachapán: Dirígete a la terminal de Ahuachapán y toma la Ruta 249 con dirección a Sonsonate (pasando por Apaneca y Juayúa). Pídele al motorista que te baje en el desvío o tramo de carretera más cercano que conecta con la finca.`,
        images: [
          "OCCIDENTE/Restaurante Finca Santa Teresa/imagen1.jpg",
          "OCCIDENTE/Restaurante Finca Santa Teresa/imagen2.jpg",
          "OCCIDENTE/Restaurante Finca Santa Teresa/imagen3.jpg",
          "OCCIDENTE/Restaurante Finca Santa Teresa/imagen4.jpg",
        ],
      },

      {
        name: "El Paraisal",
        description:
          "Restaurante acogedor,con una decoracion sencilla y un menu variado de diferentes comidas tipicas salvadoreñas.",
        social: {
          facebook: "https://www.facebook.com/Restaurante.ElParaisal",
        },
        query: "El Paraisal, Sonsonate",
        coordinates: "13.739620992345944, -89.70095540498771",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Occidente y toma la Ruta 205 hacia Sonsonate. Al llegar a Sonsonate, puedes tomar un transporte local (como un bus o microbús de la zona) que te lleve sobre la carretera hacia los destinos del norte o la ruta hacia Juayúa/Ahuachapán, y pedir parada en el sector de El Paraisal.<br>
                        <b>Opción 2:</b> Desde Santa Ana: Dirígete a la Terminal Francisco Lara Pineda y toma la Ruta 216 hacia Sonsonate. Una vez en la terminal de Sonsonate, transborda a un bus o microbús local que recorra la carretera principal hacia el norte del departamento.<br>
                        <b>Opción 3:</b> Desde Ahuachapán: Dirígete a la terminal de Ahuachapán y toma la Ruta 249 con dirección a Sonsonate (pasando por Apaneca y Juayúa). Pídele al motorista que te indique o te baje sobre la carretera en la zona del restaurante.`,

        images: [
          "OCCIDENTE/El Paraisal/imagen1.jpg",
          "OCCIDENTE/El Paraisal/imagen2.jpg",
          "OCCIDENTE/El Paraisal/imagen3.jpg",
        ],
      },
    ],
  },
  central: {
    description:
      "Pueblos llenos de historia, calles bulliciosas y tradiciones que pasan de generación en generación. La región central de El Salvador es el corazón de la vida cotidiana, donde los mercados, las plazas y las cocinas familiares mantienen vivo el sabor de nuestra cultura. Aquí, el aroma de las pupusas recién hechas se mezcla con el de las tortillas de maíz, los tamales y las bebidas tradicionales. Entre ciudades llenas de movimiento y pueblos con encanto, cada comida se convierte en una oportunidad para compartir, celebrar nuestras raíces y disfrutar de los sabores que hacen única a la gastronomía salvadoreña.",
    places: [
      {
        name: "Kuskatan",
        description:
          "Restaurante con alta calidad el cual es caracterizado por sus pupusas de maíz y de arroz, así como otros platillos  como pasteles, nuegados y riguas.",
        social: {
          facebook: "https://www.facebook.com/profile.php?id=100063705752617",
          instagram: "https://www.instagram.com/kuskatans/?hl=es-la",
        },
        coordinates: "13.697249023852292, -89.19003092033101",
        query: "Kuskatan,Plaza Libertad, San Salvador",
        busDirections: `<b>Opción 1:</b> En San Salvador (Desde otras zonas de la capital): Toma cualquier ruta de bus o microbús que circule por el Centro Histórico de San Salvador (como las que pasan por la Calle Arce o la 4ª Calle Poniente) y bájate en las inmediaciones de la Plaza Libertad; el local se encuentra sobre la plaza.<br>
                        <b>Opción 2:</b> Desde Santa Ana: Dirígete a la Terminal Francisco Lara Pineda y toma la Ruta 201 hacia San Salvador (Terminal de Occidente). Desde allí, aborda un microbús urbano o bus que te lleve directo al Centro Histórico hasta la zona de la Plaza Libertad.<br>
                        <b>Opción 3:</b> Desde Sonsonate: Dirígete a la terminal de Sonsonate y toma la Ruta 205 hacia San Salvador (Terminal de Occidente). Al llegar, transborda a un microbús o bus del transporte colectivo urbano que se dirija hacia el centro de la ciudad.`,
        images: [
          "CENTRO/Kuskatan/imagen1.jpg",
          "CENTRO/Kuskatan/imagen2.jpg",
          "CENTRO/Kuskatan/imagen3.jpg",
        ],
      },

      {
        name: "Tipicos El Mirador",
        description:
          "Un restaurante con unas excelentes vistas a varios puntos de la ciudad, al igual a varios volcanes y montañas. Su menu es variado, con platillos tipicos salvadoreños y postres.",
        social: {
          facebook: "https://www.facebook.com/profile.php?id=100063862963536r",
          instagram: "https://www.instagram.com/tipicoselmirador/?hl=es-la",
        },
        coordinates: "13.648344107939677, -89.2186744049892",
        query: "Tipicos El Mirador,Calle antigua a Huizucar, San Salvador",
        busDirections: `<b>Opción 1:</b> En San Salvador (Desde el centro o terminales): Dirígete al centro de San Salvador (cerca del Parque Cuscatlán o la zona del Mercado Central) y toma la Ruta 12 o la Ruta 2, que suben hacia los Planes de Renderos. Pídele al motorista que te baje sobre la Calle Antigua a Huizúcar en el sector del restaurante.<br>
                        <b>Opción 2:</b> Desde Santa Ana: Dirígete a la Terminal Francisco Lara Pineda y toma la Ruta 201 hacia la Terminal de Occidente en San Salvador. Desde ahí, aborda un bus o microbús hacia el centro y transborda a una ruta que suba a los Planes de Renderos.<br>
                        <b>Opción 3:</b> Desde Sonsonate: Dirígete a la terminal de Sonsonate y toma la Ruta 205 hacia la Terminal de Occidente en San Salvador. Al llegar, toma el transporte colectivo hacia el centro de la capital y transborda a la ruta que te lleve hacia la zona de los Planes de Renderos y la calle a Huizúcar.`,
        images: [
          "CENTRO/Tipicos El Mirador/imagen1.jpg",
          "CENTRO/Tipicos El Mirador/imagen2.jpg",
          "CENTRO/Tipicos El Mirador/imagen3.jpg",
          "CENTRO/Tipicos El Mirador/imagen4.jpg",
        ],
      },

      {
        name: "Tomadulu",
        description:
          "Restaurante con un extensa variedad de platillos tipicos y preciosas vistas al mar y cerros adyacentes. Ideal para disfrutar de un ambiente familiar y relajado.",
        social: {
          facebook: "https://www.facebook.com/Tomadulu",
          instagram: "https://www.instagram.com/tomadulusv/?hl=es-la",
        },
        coordinates: "13.493406604160059, -89.42521283197776",
        query: "Tomadulu, La Libertad",
        busDirections: `Opción 1: Desde San Salvador: Dirígete al Terminal de Buses de Oriente (en el Boulevard del Ejército). Toma la Ruta 125 con dirección a Chalatenango o Nueva Concepción. Pídele al motorista que te baje en el desvío hacia El Paraíso / Embalse Cerrón Grande o en la zona cercana al Cantón Santa Bárbara sobre la carretera Longitudinal del Norte, donde podrás abordar un transporte local o mototaxi hacia el restaurante.
Opción 2: Desde Sonsonate: Dirígete a la terminal de Sonsonate y toma la Ruta 205 hacia la Terminal de Occidente en San Salvador. Desde allí, cruza hacia la zona del Boulevard del Ejército (Terminal de Oriente) para abordar la Ruta 125 hacia Chalatenango y bájate en el desvío rumbo a El Paraíso.`,
        images: [
          "CENTRO/Tomadulu/imagen1.jpg",
          "CENTRO/Tomadulu/imagen2.jpg",
          "CENTRO/Tomadulu/imagen3.jpg",
          "CENTRO/Tomadulu/imagen4.jpg",
          "CENTRO/Tomadulu/imagen5.jpg",
        ],
      },

      {
        name: "La Cocina de de Marina",
        description:
          "Hermoso restaurante a los bordes del lago,ambientacion rustica en su mas puro estilo, menu variado de comida de la sopa, mariscos y platillos tipicos salvadoreños. Ideal para disfrutar de un ambiente familiar y relajado.",
        social: {
          facebook:
            "https://www.facebook.com/La-Cocina-de-Marina-100063862963536",
          instagram: "https://www.instagram.com/lacocinademarina/?hl=es-la",
        },
        coordinates: "14.08061219563114, -89.10250241107686",
        query: "La Cocina de Marina, Chalatenango, Cantón Santa Barbara",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete al Terminal de Buses de Oriente (en el Boulevard del Ejército). Toma la Ruta 125 con dirección a Chalatenango o Nueva Concepción. Pídele al motorista que te baje en el desvío hacia El Paraíso / Embalse Cerrón Grande o en la zona cercana al Cantón Santa Bárbara sobre la carretera Longitudinal del Norte, donde podrás abordar un transporte local o mototaxi hacia el restaurante.<br>
                        <b>Opción 2:</b> Desde Sonsonate: Dirígete a la terminal de Sonsonate y toma la Ruta 205 hacia la Terminal de Occidente en San Salvador. Desde allí, cruza hacia la zona del Boulevard del Ejército (Terminal de Oriente) para abordar la Ruta 125 hacia Chalatenango y bájate en el desvío rumbo a El Paraíso.`,
        images: [
          "CENTRO/La Cocina de Marina/imagen1.jpg",
          "CENTRO/La Cocina de Marina/imagen2.jpg",
          "CENTRO/La Cocina de Marina/imagen3.jpg",
          "CENTRO/La Cocina de Marina/imagen4.jpg",
        ],
      },

      {
        name: "Rancho Bambu",
        description:
          "Un rancho de calidad, cabañas, picinas y hermosas vistas de la naturaleza alrededor. Su menu es variado, con platillos tipicos salvadoreños.",
        social: {
          facebook: "https://www.facebook.com/profile.php?id=100075750405272",
        },
        coordinates: "14.035411999979484, -88.91861349333927",
        query: "Rancho Bambu, Chalatenango",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Buses de Oriente (en el Boulevard del Ejército) y toma la Ruta 125 con dirección a Chalatenango. Al llegar a la ciudad de Chalatenango, toma un transporte local o mototaxi que te acerque directamente al establecimiento.<br>
                        <b>Opción 2:</b> Desde Nueva Concepción (Chalatenango): Si te encuentras en el norte del departamento, dirígete a la terminal o zona céntrica de Nueva Concepción y toma un bus o microbús de la Ruta 125 (o rutas locales que conectan hacia la cabecera departamental de Chalatenango) y bájate en el sector de Rancho Bambú.`,
        images: [
          "CENTRO/Rancho Bambu/imagen1.jpg",
          "CENTRO/Rancho Bambu/imagen2.jpg",
          "CENTRO/Rancho Bambu/imagen3.jpg",
          "CENTRO/Rancho Bambu/imagen4.jpg",
        ],
      },

      {
        name: "La Teca de Don Napo",
        description:
          "Hermoso rancho con un menu tipico centrado en mariscos, ambiente fresco y excelente servicio ",
        social: {
          facebook: "https://www.facebook.com/profile.php?id=100054241580756",
        },
        coordinates: "14.033022485996144, -88.96244607301392",
        query: "La Teca de Don Napo - Restaurante de maricos, Ahuachapan",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Buses de Oriente (en el Boulevard del Ejército) y toma la Ruta 125 o buses locales que se dirijan hacia la zona norte de Chalatenango. Pídele al motorista que te baje en el desvío o tramo cercano al Cantón San José, donde podrás tomar un transporte local o mototaxi hacia el restaurante.<br>
                        <b>Opción 2:</b> Desde Nueva Concepción: Dirígete a la zona céntrica o terminal y toma un bus o microbús que conecte hacia el sector de Chalatenango / Cantón San José, indicándole al conductor tu destino.  `,
        images: [
          "CENTRO/La Teca de Don Napo/imagen1.jpg",
          "CENTRO/La Teca de Don Napo/imagen2.jpg",
          "CENTRO/La Teca de Don Napo/imagen3.jpg",
          "CENTRO/La Teca de Don Napo/imagen4.jpg",
        ],
      },

      {
        name: "La Cuadra",
        description: "Maravillosa vista al lago",
        social: {
          facebook: "https://www.facebook.com/lacuadra.2021"
        },
        coordinates: "14.081891786756202, -89.02767065582177",
        query: "La Caudra, Chalatenango, Santa Rita",
        busDirections: `<b>Opción 1:</b> Desde San Salvador: Dirígete a la Terminal de Buses de Oriente (en el Boulevard del Ejército) y toma la Ruta 125 con dirección a Chalatenango. Pídele al motorista que te baje sobre la carretera Troncal del Norte a la altura del municipio de Santa Rita (o en el desvío hacia El Tronconal), desde donde puedes tomar un mototaxi o transporte local directo al restaurante.<br>
                        <b>Opción 2:</b> Desde Nueva Concepción: Dirígete a la zona de abordaje y toma un bus o microbús que circule por la Carretera Troncal del Norte con dirección hacia el sur (hacia San Salvador / Chalatenango) y bájate en la zona de Santa Rita para conectar con el transporte local.`,
        image: [
          "CENTRO"
        ]
        
      },
    ],
  },
  oriente: {
    description:
      "Golfo, playas y montañas. Mariscos frescos, sopas contundentes y fiestas que duran días.",
    places: [
      {
        name: "Mariscos en Playa El Cuco",
        description:
          "Ranchos frente al mar con ceviche, sopa de mariscos, pescado frito y cocteles de concha.",
        note: "Redes: cada rancho tiene su propia página", 
        query: "Playa El Cuco San Miguel",
      },
      {
        name: "Perquín, Morazán",
        description:
          "Pueblo de montaña con comedores de comida casera, atol y tamales.",
        note: "Redes: busca Perquín turismo",
        query: "Perquín Morazán",
        IMAGE_DIRECTORY:""
      },
    ],
  },
};

// FUNCIONES PARA LA NAVEGACIÓN Y RENDERIZADO DE CONTENIDO
const app = document.querySelector("#app");

// Funciones Para generar URLs de Google Maps y Waze
function googleMapsUrl(place) {
  if (place.coordinates) {
    return `https://www.google.com/maps/search/?api=1&query=${place.coordinates}`;
  }
  const searchQuery = place.query || place.name;
  const search = encodeURIComponent(`${searchQuery}, El Salvador`);
  return `https://www.google.com/maps/search/?api=1&query=${search}`;
}

function googleReviewsUrl(place) {
  const searchQuery = place.query || place.name;
  const search = encodeURIComponent(`${searchQuery}, El Salvador`);
  return `https://www.google.com/maps/search/?api=1&query=${search}`;
}

function wazeUrl(place) {
  if (place.coordinates) {
    return `https://waze.com/ul?ll=${place.coordinates}&navigate=yes`;
  }
  const searchQuery = place.query || place.name;
  const search = encodeURIComponent(`${searchQuery}, El Salvador`);
  return `https://waze.com/ul?q=${search}&navigate=yes`;
}

// Funciones para renderizar el contenido

function renderHome() {
  const regionLinks = Object.entries(REGIONES)
    .map(
      ([key, region]) => `
        <a href="#/${key}" class="region-card" style="border-top: 4px solid ${region.color}">
          <span class="dot" style="background-color: ${region.color}"></span>
          <div>
            <h3>${region.name}</h3>
            <p>${region.departments}</p>
          </div>
        </a>`,
    )
    .join("");

  app.innerHTML = `
    <section class="hero">
      <h1>Lugares Recomendados</h1>
      <div class="intro">
        <p class="intro-text">
          En El Salvador, cada región tiene un sabor propio que refleja su historia, sus tradiciones y la riqueza de sus tierras. Desde las montañas del occidente hasta las costas del oriente, la gastronomía salvadoreña ofrece una gran variedad de aromas, ingredientes y platillos que forman parte de la identidad de su gente.
          En el occidente, el aroma del café recién preparado acompaña los días frescos, mientras los panes, dulces típicos y antojitos tradicionales conquistan a quienes visitan sus pueblos. En el centro del país, las pupusas se convierten en las grandes protagonistas, acompañadas de curtido y salsa, como símbolo de una tradición que reúne a familias y amigos alrededor de la mesa.
          Por su parte, el oriente destaca por la frescura de sus productos marinos y los sabores del Golfo de Fonseca, donde los pescados, camarones y otros mariscos forman parte de la cocina local. Cada zona tiene algo especial que ofrecer, desde recetas transmitidas de generación en generación hasta preparaciones que aprovechan los ingredientes propios de cada lugar.
          Recorrer El Salvador también significa descubrirlo a través de su comida. Cada platillo cuenta una historia, cada ingrediente habla de su tierra y cada sabor nos recuerda que, aunque somos un país pequeño, nuestra riqueza gastronómica es enorme.
        </p>
      </div>
    </section>

    <section class="pick" aria-labelledby="region-heading">
      <img class="map" src="/img/sv.svg" alt="Mapa de El Salvador" />
      <h2 id="region-heading">Elige una región para ver sus lugares favoritos</h2>
      <div class="legend">
        ${regionLinks}
      </div>
    </section>
  `;
}

function renderGallery(place) {
  if (!place.images?.length) {
    return `
      <div class="gallery">
        <div class="gallery-main photo-placeholder" role="img" aria-label="Fotografía no disponible">
          <span>Sin fotos disponibles</span>
        </div>
      </div>`;
  }

  const images = place.images.map((path) => encodeURI(IMAGE_DIRECTORY + path));
  const thumbnails = images
    .map(
      (src, index) => `
        <button class="thumbnail" type="button" data-image="${src}" aria-label="Ver foto ${index + 1}">
          <img src="${src}" alt="" loading="lazy" />
        </button>`,
    )
    .join("");

  return `
    <div class="gallery">
      <div class="gallery-main">
        <img src="${images[0]}" alt="${place.name}" loading="lazy" />
      </div>
      <div class="thumbnails">
        ${thumbnails}
      </div>
    </div>`;
}

function renderDirections(place) {
  const busDirections = place.busDirections
    ? `
      <p class="bus">
        <strong>🚌 Cómo llegar en bus:</strong><br>
        ${place.busDirections.replace(/\n/g, "<br>")}
      </p>`
    : "";

  return `
    <section class="how" aria-label="Cómo llegar">
      <h4>Cómo llegar y Navegación</h4>
      ${busDirections}
      <div class="maps">
        <a class="map-btn gmaps" href="${googleMapsUrl(place)}" target="_blank" rel="noopener noreferrer">
          📍 Google Maps
        </a>
        <a class="map-btn waze" href="${wazeUrl(place)}" target="_blank" rel="noopener noreferrer">
          🚗 Waze
        </a>
      </div>
    </section>`;
}

function renderPlace(place) {
  const note = place.note ? `<p class="s">${place.note}</p>` : "";
  const socialHtml = renderSocialLinks(place.social);

  return `
    <article class="item">
      <div class="place-info">
        <h3>${place.name}</h3>
        <p class="d">${place.description}</p>
        ${socialHtml}
        ${note}
        <div class="reviews">
          <a href="${googleReviewsUrl(place)}" target="_blank" rel="noopener noreferrer">
            ⭐ Ver reseñas de visitantes en Google Maps
          </a>
        </div>
        ${renderDirections(place)}
      </div>
      ${renderGallery(place)}
    </article>`;
}

function renderRegion(key) {
  const region = REGIONES[key];
  const data = DATA[key];

  app.innerHTML = `
    <div class="region-container">
      <a class="back" href="#/">← Volver a regiones</a>
      <h1 class="rname">${region.name}</h1>
      <p class="rblurb">${data.description}</p>
      <h2 class="sec">Lugares recomendados</h2>
      <div class="places-list">
        ${data.places.map(renderPlace).join("")}
      </div>
    </div>
  `;
}

function renderSocialLinks(social) {
  if (!social) return "";
  let links = "";
  if (social.instagram) {
    links += `<a href="${social.instagram}" target="_blank" rel="noopener noreferrer" class="social-btn instagram">Instagram</a>`;
  }
  if (social.facebook) {
    links += `<a href="${social.facebook}" target="_blank" rel="noopener noreferrer" class="social-btn facebook">Facebook</a>`;
  }
  return links ? `<div class="social-links">${links}</div>` : "";
}

// Función para manejar la navegación basada en hash
function route() {
  const regionKey = decodeURIComponent(window.location.hash.slice(2));
  if (REGIONES[regionKey]) {
    renderRegion(regionKey);
  } else {
    renderHome();
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("click", (event) => {
  const thumbnail = event.target.closest(".thumbnail");
  if (!thumbnail) return;

  const mainImage = thumbnail
    .closest(".gallery")
    .querySelector(".gallery-main img");
  mainImage.src = thumbnail.dataset.image;
});

window.addEventListener("hashchange", route);
route();
