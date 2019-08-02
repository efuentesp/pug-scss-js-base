console.log("01-caucion-bursatil");
$("#criterios_busqueda_accordion").accordion({
    collapsible: true
});
$("#input_date").datepicker({
    showOn: "button",
    buttonImage: "/dist/images/calendar.gif",
    buttonImageOnly: true
});
$("#table_contratos").jqGrid({
    url: "http://localhost:3000/fideicomiso",
    datatype: "json",
    mtype: "GET",
    colNames: [
        "Contrato",
        "Libro",
        "Cliente",
        "Digito",
        "TV",
        "Descr TV",
        "Emisora",
        "Serie",
        "Cantidad",
        "Precio",
        "Valuación",
        "Promotor",
        "Folio"
    ],
    colModel: [
        { name: "generalesnumero", width: 55 },
        { name: "generalesnombre", width: 90 },
        { name: "generalesadministrador", width: 80, align: "right" },
        { name: "generalespromotor", width: 80, align: "right" },
        { name: "caracteristicasformamanejo", width: 80, align: "right" },
        { name: "caracteristicastiponegocio", width: 150, sortable: false },
        { name: "caracteristicasproducto", width: 90 },
        { name: "caracteristicasmontoapertura", width: 90 },
        { name: "adicionalesnoescritura", width: 90 },
        { name: "caracteristicasfechaalta", width: 90 },
        { name: "adicionalesfechainscripcion", width: 90 },
        { name: "adicionalesnombrenotario", width: 90 },
        { name: "adicionalesnonotario", width: 90 }
    ],
    pager: "#pager_contratos",
    rowNum: 10,
    rowList: [10, 20, 30],
    sortname: "generalesnumero",
    sortorder: "desc",
    viewrecords: true,
    gridview: true,
    autoencode: true,
    caption: ""
});
