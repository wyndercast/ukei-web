// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Tramite {
    tramiteId:                   number;
    numeroTramite:               string;
    primerNombre:                string;
    primerApellido:              string;
    correoElectronico:           string;
    estadoCliente:               null;
    estadoTramite:               string;
    tipoTramite:                 string;
    descripcionCasoCliente:      string;
    numeroRadicadoOficial:       string;
    numeroRadicadoContestacion:  string;
    numeroRadicadoDesistimiento: string;
    usuarioId:                   string;
    fechaCreacion:               Date;
    fechaActualizacion:          Date;
    fechaRadicadoOficial:        Date;
    fechaRadicadoContestacion:   Date;
    fechaRadicadoDesistimiento:  Date;
    fechaPresentacionDemanda:    Date;
    fechaContestacionDemanda:    Date;
    fechaAudiencia:              Date;
    fechaRespuestaFallo:         Date;
    reclamacionDirecta:          boolean;
    tipoReclamacion:             string;
    fallo:                       string;
    estado:                      string;
    pretensiones:                string;
    asistirAudiencia:            string;
    derechoVulnerado:            string;
    juramentoEstimatorio:        string;
    entidadOficial:              string;
    cliente:                     Cliente;
    observaciones:               any[];
    datosAdicionales:            DatosAdicionale[];
    documento:                   Documento[];
    reclamacionesAereas:         ReclamacionesAereas;
    reclamacionesDirectas:       ReclamacionesDirectas;
    publicidad:                  Publicidad;
    homologado?:                 string;
    descripcion?:                string;        
}

export interface Cliente {
    id:                   number;
    primerNombre:         string;
    segundoNombre:        string;
    primerApellido:       string;
    segundoApellido:      string;
    numeroIdentificacion: string;
    tipoDocumento:        string;
    cuidad:               string;
    correoElectronico:    string;
    numeroCelular:        string;
    numeroContacto:       string;
    direccion:            string;
    rut:                  string;
    ocupacion:            string;
    estadoCivil:          string;
    genero:               string;
    estado:               string;
    detallePago:          string;
}

export interface DatosAdicionale {
    id:     number;
    nombre: string;
    valor:  string;
}

export interface Documento {
    id:              number;
    tipoDocumento:   string;
    fechaExpedicion: Date;
    numeroDocumento: string;
    nombreDocumento: string;
    ruta:            string;
}

export interface Publicidad {
    id:                number;
    fechaTransaccion:  Date;
    tipoProducto:      string;
    valor:             string;
    evidencia:         string;
    cuantiaPrejuicios: string;
}

export interface ReclamacionesAereas {
    id:              number;
    codigoReserva:   string;
    origen:          string;
    destino:         string;
    tipoReclamo:     string;
    fecha:           Date;
    aerolinea:       string;
    bagTag:          string;
    titularEquipaje: string;
}

export interface ReclamacionesDirectas {
    id:                          number;
    fechaMaximaRespuesta:        Date;
    fechaSolicitudProveedor:     Date;
    respuestaProveedor:          string;
    proveedor:                   string;
    nitProveedor:                string;
    domicilioProveedor:          string;
    representanteLegalProveedor: string;
    correoElectronicoProveedor:  string;
    esFavorable:                 boolean;
}
