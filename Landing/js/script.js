// DOM elements
const menu = document.getElementById('menu');
const navLi = document.querySelectorAll('.navigation__item');
const phoneNav = document.getElementById('phone-nav');
const modal = document.querySelector('.modal');
const modalCard = document.querySelector('.modal__card');
const modalTitle = document.querySelector('.modal__card--title');
const modalList = document.querySelector('.modal__card--list');
const modalClose = document.querySelector('.modal__card--close');
const services = document.querySelectorAll('.services__container--icon');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const termsBtn = document.getElementById('terms');

// Responsive

var tabLand = window.matchMedia('(max-width: 1100px)');
var tabPort = window.matchMedia('(max-width: 900px)');
var phone = window.matchMedia('(max-width: 600px)');

// Navigation active <li>

const clearNavActive = () => {
  navLi.forEach((e) => {
    e.classList.remove('active');
  });
};
navLi.forEach((e) => {
  e.addEventListener('click', () => {
    clearNavActive();
    e.classList.add('active');
  });
});

// Phone Navigation sidebar

menu.addEventListener('click', () => {
  menu.classList.toggle('open');
  phoneNav.classList.toggle('open');
});

// Services - Modals

services.forEach((e) => {
  e.addEventListener('click', () => {
    if (e.classList.contains('fiscal')) {
      modalTitle.innerHTML = 'Fiscal';
      modalList.insertAdjacentHTML('afterbegin', fiscal);
    } else if (e.classList.contains('laboral')) {
      modalTitle.innerHTML = 'Laboral';
      modalList.insertAdjacentHTML('afterbegin', laboral);
    } else if (e.classList.contains('data')) {
      modalTitle.innerHTML = 'Protección de Datos';
      modalList.insertAdjacentHTML('afterbegin', data);
    } else if (e.classList.contains('familia')) {
      modalTitle.innerHTML = 'Familia';
      modalList.insertAdjacentHTML('afterbegin', familia);
    } else if (e.classList.contains('otros')) {
      modalTitle.innerHTML = 'Otros';
      modalList.insertAdjacentHTML('afterbegin', otros);
    } else if (e.classList.contains('extranjeria')) {
      modalTitle.innerHTML = 'Extranjería';
      modalList.insertAdjacentHTML('afterbegin', extranjeria);
    } else if (e.classList.contains('inmobiliario')) {
      modalTitle.innerHTML = 'Inmobiliario';
      modalList.insertAdjacentHTML('afterbegin', inmobiliario);
    }

    modal.classList.add('active');
    modalCard.classList.add('active');
  });
});

// Terms modal

termsBtn.addEventListener('click', () => {
  modalTitle.innerHTML = 'TRATAMIENTO DE DATOS PERSONALES';
  modalList.insertAdjacentHTML('afterbegin', terms);
  modal.classList.add('active');
  modalCard.classList.add('active');
  modalCard.classList.add('terms');
});

//Modal close

modalClose.addEventListener('click', () => {
  modal.classList.remove('active');
  modalCard.classList.remove('active');
  modalCard.classList.remove('terms');
  while (modalList.hasChildNodes()) {
    modalList.removeChild(modalList.firstChild);
  }
});
// modal.removeEventListener('click', () => {
//   modalCard.classList.remove('active');
//   modal.classList.remove('active');
//   while (modalList.hasChildNodes()) {
//     modalList.removeChild(modalList.firstChild);
//   }
// });   NOT WORKING FOR SOME REASON UNKWOWN

//Services list

const fiscal =
  '<li>Asesoría Autónomos</li> <li>Nuevas PYMEs</li> <li>Ayudas y Subvenciones</li> <li>Gestión impuestos trimestrales y anuales</li> <li>Llevanza de libros contables</li><b>--> Precios adaptados a gestiones y responsabilidad</b> ';

const laboral =
  '<li>Asesoría al trabajador y finiquitos</li><li>Contratación de trabajadores</li> <li>Altas, bajas y modificaciones </li> <li>Nominas y seguros sociales </li> <li> Partes de accidente y bajas laborales</li><b>--> Presupuesto según tu caso particular</b> ';

const extranjeria =
  ' <li>Permisos de residencia y trabajo</li> <li>Reagrupación familiar</li> <li>Nacionalidad</li> <li>Expedientes de expulsión y sanciones</li> <b>--> Primera consulta gratis</b>';

const familia =
  ' <li>Matrimonios </li> <li>Capitulaciones matrimoniales</li> <li>Pareja de hecho</li> <li>Filiación y reconocimiento </li> <li>Separación y divorcio</li> <li>Nulidad</li> <li>Pensiones compensatorias y alimenticias</li> <li>Pensiones> </li> <li>Herencias</li> <li>Adopciones</li> <li>Familia Internacional(Matrimonios mixtos, etc)</li><b>--> Presupuesto según tu caso particular</b>';

const inmobiliario =
  ' <li>Asesoría en operaciones inmobiliarias</li> <li>Compra-venta y arrendamiento de inmuebles</li> <li>Revisión situación jurídica del inmueble</li> <li>Negociación y redacción de contratos</li> <li>Asesoría Deshaucios</li> <li> Asesoría y planificación financiera</li><b>--> Primera consulta gratis</b>';

const data =
  ' <li>Asesoría a Autónomos, Sociedades y Asociaciones</li> <li>Adaptación LOPD/RGPD</li> <li>Redacción Documentos de Seguridad</li> <li>Cláusulas informativas</li> <li>Contratos de acceso a datos y confidencialidad</li> <li>Información y protocolo para el ejercicio de los derechos de interesados</li> <li>Cumplimiento de obligaciones para videovigilancia</li><b>--> Presupuesto según tus necesidades</b>';

const otros =
  '<li>Trámites con Administraciones</li>  <li>Ayuntamientos</li> <li>ASNEF y RAI</li> --> CONSULTA TU CASO';

// Terms - text for Modal

const terms =
  '<h4> Clausula informativa:</h4><br><p>Datos del responsable del tratamiento: <br>Identidad: Ama Quella - NIF: X8398057K  <br>Dirección postal: Calle Bolívar 37. 1c<br>Teléfono: 617729711 - Correo electrónico: amaquella.asesoria@gmail.com<br><br>“En Ama Quella tratamos la información que nos facilita con el fin de prestarles el servicio solicitado y realizar su facturación. Los datos proporcionados se conservarán mientras se mantenga la relación comercial o durante el tiempo necesario para cumplir con las obligaciones legales y atender las posibles responsabilidades que pudieran derivar del cumplimiento de la finalidad para la que los datos fueron recabados. Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal. Usted tiene derecho a obtener información sobre si en Ama Quella estamos tratando sus datos personales, por lo que puede ejercer sus derechos de acceso, rectificación, supresión y portabilidad de datos y oposición y limitación a su tratamiento ante Ama Quella, Calle Bolívar 37. 1c o en la dirección de correo electrónico amaquella.asesoria@gmail.com, adjuntando copia de su DNI o documento equivalente.  Asimismo, y especialmente si considera que no ha obtenido satisfacción plena en el ejercicio de sus derechos, podrá presentar una reclamación ante la autoridad nacional de control dirigiéndose a estos efectos a la Agencia Española de Protección de Datos, C/ Jorge Juan, 6 – 28001 Madrid.</p>';
