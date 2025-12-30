// ARRAY DE PRODUCTOS //

const productos = [
  {
    id: "linea-depurativa-01",
    nombre: "Zeolita Extracto Líquido 200cc",
    imagen: "../assets/ZEOLITA.jpeg",
    precio: 50000,
    cantidad: 1,
    descripcion: "Producto utilizado tradicionalmente en rutinas depurativas y de limpieza general del organismo.",
    consumo: "Diluir 20 gotas en agua, 1 a 2 veces al día.",
    categoria: "linea-depurativa"
  },
  {
    id: "yerba-01",
    nombre: "Yerba Caballo Negro Secado Barbacuá 500g",
    imagen: "../assets/YERBA.jpeg",
    precio: 45000,
    cantidad: 1,
    descripcion: "Yerba mate de secado barbacuá, sabor intenso y proceso artesanal.",
    consumo: "Preparar de manera tradicional como yerba mate.",
    categoria: "productos-varios"
  },
  {
    id: "linea-depurativa-02",
    nombre: "Valeriana Extracto Líquido 200cc",
    imagen: "../assets/VALERIANA.jpeg",
    precio: 40000,
    cantidad: 1,
    descripcion: "Planta utilizada tradicionalmente para favorecer la relajación y el descanso.",
    consumo: "20 gotas en agua, preferentemente por la noche.",
    categoria: "linea-depurativa"
  },
  {
    id: "prama-01",
    nombre: "Tónico Herbario",
    imagen: "../assets/TON HERB.jpeg",
    precio: 40000,
    cantidad: 1,
    descripcion: "Fórmula herbal utilizada como complemento dentro de rutinas naturales.",
    consumo: "Diluir 20 gotas en agua, 1 vez al día.",
    categoria: "prama"
  },
  {
    id: "linea-depurativa-04",
    nombre: "Sulfato de Magnesio",
    imagen: "../assets/SULF MAG.jpeg",
    precio: 35000,
    cantidad: 1,
    descripcion: "Compuesto utilizado tradicionalmente en prácticas depurativas.",
    consumo: "Usar según indicación específica. No exceder la dosis recomendada.",
    categoria: "linea-depurativa"
  },
  {
    id: "linea-depurativa-05",
    nombre: "Suico Extracto Líquido",
    imagen: "../assets/SUICO.jpeg",
    precio: 50000,
    cantidad: 1,
    descripcion: "Extracto vegetal utilizado en rutinas naturales de bienestar.",
    consumo: "20 gotas diluidas en agua, 1 a 2 veces al día.",
    categoria: "linea-depurativa"
  },
  {
    id: "vitalmar-01",
    nombre: "Sal de Mar 125 g (Frasco)",
    imagen: "../assets/SAL MAR.jpeg",
    precio: 50000,
    cantidad: 1,
    descripcion: "Sal marina natural, obtenida por evaporación.",
    consumo: "Usar como condimento en comidas.",
    categoria: "vital-mar"
  },
  {
    id: "vitalmar-02",
    nombre: "Sal de Mar 500 g (Bolsa)",
    imagen: "../assets/SAL MAR BOLSA.jpeg",
    precio: 50000,
    cantidad: 1,
    descripcion: "Sal marina natural para uso culinario.",
    consumo: "Usar como condimento en comidas.",
    categoria: "vital-mar"
  },
  {
    id: "linea-depurativa-06",
    nombre: "Solución de Propóleo 200cc",
    imagen: "../assets/PROPOLEO.jpeg",
    precio: 50000,
    cantidad: 1,
    descripcion: "Producto apícola utilizado tradicionalmente.",
    consumo: "20 gotas en agua o miel, 1 a 2 veces al día.",
    categoria: "linea-depurativa"
  },
  {
    id: "linea-depurativa-07",
    nombre: "Plata Coloidal 200cc",
    imagen: "../assets/PLAT COL.jpeg",
    precio: 50000,
    cantidad: 1,
    descripcion: "Producto utilizado tradicionalmente en rutinas alternativas.",
    consumo: "Usar según indicación específica.",
    categoria: "linea-depurativa"
  },
  {
    id: "prama-02",
    nombre: "Pimienta de Cayena",
    imagen: "../assets/PIM CAY.jpeg",
    precio: 50000,
    cantidad: 1,
    descripcion: "Especia utilizada en preparaciones culinarias y mezclas naturales.",
    consumo: "Agregar pequeñas cantidades a comidas o infusiones.",
    categoria: "prama"
  },
  {
    id: "vitalmar-03",
    nombre: "Ormus Oro Monoatómico 500ml",
    imagen: "../assets/ORMUS.jpeg",
    precio: 50000,
    cantidad: 1,
    descripcion: "Producto utilizado dentro de prácticas alternativas.",
    consumo: "Usar según indicación del proveedor.",
    categoria: "vital-mar"
  },
  {
    id: "prama-03",
    nombre: "Granos de Mostaza",
    imagen: "../assets/MOSTZ.jpeg",
    precio: 50000,
    cantidad: 1,
    descripcion: "Semillas utilizadas en cocina y preparaciones naturales.",
    consumo: "Agregar a comidas o moler según necesidad.",
    categoria: "prama"
  },
  {
    id: "mortero-01",
    nombre: "Mortero de Mármol",
    imagen: "../assets/MORT.jpeg",
    precio: 50000,
    cantidad: 1,
    descripcion: "Utensilio de cocina ideal para triturar semillas y especias.",
    consumo: "Uso doméstico.",
    categoria: "productos-varios"
  },
  {
    id: "linea-depurativa-08",
    nombre: "Extracto Líquido de Moringa 200cc",
    imagen: "../assets/MORINGA.jpeg",
    precio: 50000,
    cantidad: 1,
    descripcion: "Planta utilizada tradicionalmente como complemento nutricional.",
    consumo: "20 gotas en agua, 1 a 2 veces al día.",
    categoria: "linea-depurativa"
  },
  {
    id: "prama-04",
    nombre: "Levadura Nutricional",
    imagen: "../assets/LEVADURA.jpeg",
    precio: 50000,
    cantidad: 1,
    descripcion: "Alimento utilizado como complemento en dietas.",
    consumo: "Espolvorear sobre comidas.",
    categoria: "prama"
  },
  {
    id: "linea-depurativa-09",
    nombre: "Esencia de Eucalipto 250cc",
    imagen: "../assets/EUCALIPTO.jpeg",
    precio: 50000,
    cantidad: 1,
    descripcion: "Esencia aromática de uso tradicional.",
    consumo: "Uso externo o aromático.",
    categoria: "linea-depurativa"
  },
  {
    id: "esponja-vegetal-01",
    nombre: "Esponja Vegetal Natural Grande",
    imagen: "../assets/ESP VEG.jpeg",
    precio: 50000,
    cantidad: 1,
    descripcion: "Esponja vegetal natural para higiene corporal.",
    consumo: "Uso externo.",
    categoria: "productos-varios"
  },
  {
    id: "tutuna-01",
    nombre: "Aceite de Oliva Extra Virgen 1000ml",
    imagen: "../assets/ACEITE OLV.jpeg",
    precio: 50000,
    cantidad: 1,
    descripcion: "Aceite de oliva extra virgen, prensado en frío.",
    consumo: "Usar como aceite de cocina o aderezo.",
    categoria: "productos-varios"
  }
];