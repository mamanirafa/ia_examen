/* =========================================================
   NEXO · Configuración (este es el ÚNICO archivo que necesitás editar)
   ========================================================= */
window.NEXO_CONFIG = {
  curso: "5.º B · Orientación Ciencias Naturales",
  institucion: "Colegio Integral de Educación Ushuaia",
  docente: "Prof. Rafael Mamani",
  minutos: 75,
  aprobacion: 6,          // nota mínima para el certificado EsencIA
  insigniaMin: 0.7,       // % de puntos de un nodo para ganar su insignia
  salidasMax: 3,          // salidas de la página antes de bloquear el examen

  // URL de la aplicación web de Apps Script (ver apps_script/Codigo.gs).
  // Dejala vacía "" para probar sin planilla.
  sheetUrl: "https://script.google.com/macros/s/AKfycbwXvO-8FdK8R76DA1aNn1ljRAlkEGE6uw_nOPPod0_eSjPPj2Roxx0Psj3niLU72bXu/exec",

  // Los códigos NO se guardan en texto: se guarda su huella (SHA-256).
  // Para cambiarlos, abrí docente.html, escribí el código nuevo y copiá la huella acá.
  hashSala: "c36c9245626c85f025e1e41f84661fcbed886944b3dc62bb37206ab5abf33dc4",    // código de sala actual: ver guía docente
  hashDocente: "090429398e2b567f586baad94d8791521ee85ec04cea254dc29ea4cc2ec644b2", // código docente actual: ver guía docente

  // Cuántas preguntas de cada tipo se sortean por nodo (quick = rápidas, inter = interactivas)
  draw: {
    ia:      { quick: 3, inter: 1 },
    prompt:  { quick: 2, inter: 1, img: 1, write: 1, ai: 1 },
    bigdata: { quick: 3, inter: 1 },
    iot:     { quick: 3, inter: 1 },
    trans:   { quick: 3, inter: 1 },
    redes:   { quick: 3, inter: 1 }
  },

  ias: [
    { nombre: "Gemini", url: "https://gemini.google.com/" },
    { nombre: "ChatGPT", url: "https://chatgpt.com/" },
    { nombre: "Copilot", url: "https://copilot.microsoft.com/" }
  ],
  storageKey: "nexo-examen-5b-v1"
};
