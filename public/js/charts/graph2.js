var width2 = 500;
var height2 = 400;

var color2 = d3.scale.category20();

var force2 = d3.layout.force()
.charge(-120)
.linkDistance(30)
.size([width2, height2]);

var svg_graph2 = d3.select("#community2").append("svg")
.attr("width", width2)
.attr("height", height2);

graph2 = {"nodes":[{"name":"expdem","group":1},{"name":"OrgSarau","group":1},{"name":"Downberri","group":1},{"name":"jopoita","group":1},{"name":"lpm631","group":1},{"name":"TomasCan0","group":1},{"name":"skalope76","group":1},{"name":"associacioSARAU","group":1},{"name":"oleajeinfinito","group":1},{"name":"CocemfeBCN","group":1},{"name":"albertquilesbcn","group":1},{"name":"asoc_solcom","group":1},{"name":"Katvibon","group":1},{"name":"icalmendros","group":1},{"name":"Unrovi","group":1},{"name":"colorae","group":1},{"name":"jaumepre","group":1},{"name":"alida_d","group":1},{"name":"vi_andalucia","group":1},{"name":"Eva_yauka","group":1},{"name":"AnaLiebanas","group":1},{"name":"OndaCero_cat","group":1},{"name":"JLBuenache","group":1},{"name":"edudevelazquez","group":1},{"name":"retronesyhombre","group":1},{"name":"PodemosDiscap","group":1},{"name":"estelamartin63","group":1},{"name":"miriam_arenas","group":1},{"name":"RAULde","group":1},{"name":"Anabeldorado","group":1},{"name":"grupdincat","group":1},{"name":"dlopezgom","group":1},{"name":"cgimenezs","group":1},{"name":"markcotarola","group":1},{"name":"sienacoop","group":1},{"name":"DownCatalunya","group":1},{"name":"RocioThovar","group":1},{"name":"desdevic","group":1},{"name":"AsocAMAPyP","group":1},{"name":"carles_escrig","group":1},{"name":"Carles1951","group":1},{"name":"zuloark","group":1},{"name":"dukinecid892","group":1},{"name":"CBarrachi","group":1},{"name":"ismaelllorens","group":1},{"name":"CannelaF","group":1},{"name":"APSOCECAT","group":1},{"name":"redcts","group":1},{"name":"HeadActive","group":1},{"name":"jmoyakohler","group":1},{"name":"entornoalasilla","group":1},{"name":"birrabel","group":1},{"name":"Federacion_VI","group":1},{"name":"eCOHOUSINGes","group":1},{"name":"IppliapOficial","group":1},{"name":"CEDD_dis","group":1},{"name":"AndoniMoreno3","group":1},{"name":"oscar_veloso","group":1},{"name":"FPilares","group":1},{"name":"IsabelCorral","group":1},{"name":"guiemb","group":1},{"name":"_robertoflorez","group":1},{"name":"ULOBA","group":1},{"name":"SweetyMapi","group":1},{"name":"abrazotrade","group":1},{"name":"BarrerasParaBaj","group":1},{"name":"blacknoireblack","group":1},{"name":"VICOVAL1","group":1},{"name":"VIgalicia","group":1},{"name":"asc_asap","group":1},{"name":"Montsei_uoc","group":1},{"name":"Onai_Ram","group":1},{"name":"lupicinio","group":1},{"name":"leydetodos","group":1},],"links":[{"source":61,"target":0,"value":1},{"source":26,"target":61,"value":1},{"source":67,"target":61,"value":1},{"source":56,"target":61,"value":1},{"source":69,"target":61,"value":1},{"source":11,"target":61,"value":1},{"source":52,"target":61,"value":1},{"source":40,"target":61,"value":1},{"source":8,"target":61,"value":1},{"source":18,"target":61,"value":1},{"source":33,"target":0,"value":1},{"source":49,"target":33,"value":1},{"source":31,"target":33,"value":1},{"source":17,"target":33,"value":1},{"source":50,"target":33,"value":1},{"source":47,"target":33,"value":1},{"source":37,"target":33,"value":1},{"source":8,"target":33,"value":1},{"source":41,"target":0,"value":1},{"source":17,"target":41,"value":1},{"source":50,"target":41,"value":1},{"source":47,"target":41,"value":1},{"source":8,"target":41,"value":1},{"source":42,"target":0,"value":1},{"source":47,"target":0,"value":1},{"source":49,"target":47,"value":1},{"source":31,"target":47,"value":1},{"source":17,"target":47,"value":1},{"source":5,"target":47,"value":1},{"source":50,"target":47,"value":1},{"source":41,"target":47,"value":1},{"source":33,"target":47,"value":1},{"source":51,"target":47,"value":1},{"source":72,"target":47,"value":1},{"source":37,"target":47,"value":1},{"source":8,"target":47,"value":1},{"source":36,"target":0,"value":1},{"source":26,"target":36,"value":1},{"source":60,"target":36,"value":1},{"source":56,"target":36,"value":1},{"source":25,"target":36,"value":1},{"source":51,"target":36,"value":1},{"source":44,"target":36,"value":1},{"source":18,"target":36,"value":1},{"source":65,"target":0,"value":1},{"source":6,"target":65,"value":1},{"source":13,"target":65,"value":1},{"source":69,"target":65,"value":1},{"source":50,"target":65,"value":1},{"source":37,"target":0,"value":1},{"source":53,"target":37,"value":1},{"source":31,"target":37,"value":1},{"source":17,"target":37,"value":1},{"source":6,"target":37,"value":1},{"source":59,"target":37,"value":1},{"source":71,"target":37,"value":1},{"source":69,"target":37,"value":1},{"source":50,"target":37,"value":1},{"source":41,"target":37,"value":1},{"source":47,"target":37,"value":1},{"source":8,"target":37,"value":1},{"source":19,"target":0,"value":1},{"source":17,"target":19,"value":1},{"source":6,"target":19,"value":1},{"source":69,"target":19,"value":1},{"source":50,"target":19,"value":1},{"source":15,"target":19,"value":1},{"source":9,"target":0,"value":1},{"source":48,"target":9,"value":1},{"source":24,"target":9,"value":1},{"source":7,"target":9,"value":1},{"source":39,"target":9,"value":1},{"source":35,"target":9,"value":1},{"source":40,"target":9,"value":1},{"source":30,"target":9,"value":1},{"source":16,"target":0,"value":1},{"source":24,"target":16,"value":1},{"source":31,"target":16,"value":1},{"source":51,"target":16,"value":1},{"source":35,"target":16,"value":1},{"source":30,"target":16,"value":1},{"source":7,"target":0,"value":1},{"source":9,"target":7,"value":1},{"source":1,"target":7,"value":1},{"source":51,"target":7,"value":1},{"source":35,"target":7,"value":1},{"source":30,"target":7,"value":1},{"source":1,"target":0,"value":1},{"source":30,"target":1,"value":1},{"source":71,"target":0,"value":1},{"source":59,"target":71,"value":1},{"source":72,"target":71,"value":1},{"source":39,"target":0,"value":1},{"source":9,"target":39,"value":1},{"source":73,"target":0,"value":1},{"source":66,"target":73,"value":1},{"source":48,"target":73,"value":1},{"source":26,"target":73,"value":1},{"source":2,"target":73,"value":1},{"source":56,"target":73,"value":1},{"source":25,"target":73,"value":1},{"source":11,"target":73,"value":1},{"source":20,"target":73,"value":1},{"source":63,"target":73,"value":1},{"source":40,"target":73,"value":1},{"source":4,"target":73,"value":1},{"source":29,"target":73,"value":1},{"source":45,"target":0,"value":1},{"source":46,"target":0,"value":1},{"source":9,"target":46,"value":1},{"source":33,"target":46,"value":1},{"source":30,"target":46,"value":1},{"source":20,"target":0,"value":1},{"source":9,"target":20,"value":1},{"source":26,"target":20,"value":1},{"source":24,"target":20,"value":1},{"source":32,"target":20,"value":1},{"source":17,"target":20,"value":1},{"source":6,"target":20,"value":1},{"source":56,"target":20,"value":1},{"source":27,"target":20,"value":1},{"source":69,"target":20,"value":1},{"source":25,"target":20,"value":1},{"source":11,"target":20,"value":1},{"source":50,"target":20,"value":1},{"source":73,"target":20,"value":1},{"source":23,"target":20,"value":1},{"source":36,"target":20,"value":1},{"source":51,"target":20,"value":1},{"source":8,"target":20,"value":1},{"source":18,"target":20,"value":1},{"source":35,"target":0,"value":1},{"source":48,"target":35,"value":1},{"source":9,"target":35,"value":1},{"source":16,"target":35,"value":1},{"source":49,"target":35,"value":1},{"source":2,"target":35,"value":1},{"source":13,"target":35,"value":1},{"source":7,"target":35,"value":1},{"source":11,"target":35,"value":1},{"source":36,"target":35,"value":1},{"source":51,"target":35,"value":1},{"source":30,"target":35,"value":1},{"source":17,"target":0,"value":1},{"source":26,"target":17,"value":1},{"source":56,"target":17,"value":1},{"source":27,"target":17,"value":1},{"source":50,"target":17,"value":1},{"source":15,"target":17,"value":1},{"source":47,"target":17,"value":1},{"source":23,"target":17,"value":1},{"source":33,"target":17,"value":1},{"source":36,"target":17,"value":1},{"source":20,"target":17,"value":1},{"source":51,"target":17,"value":1},{"source":28,"target":17,"value":1},{"source":40,"target":17,"value":1},{"source":8,"target":17,"value":1},{"source":18,"target":17,"value":1},{"source":19,"target":17,"value":1},{"source":54,"target":0,"value":1},{"source":59,"target":0,"value":1},{"source":48,"target":59,"value":1},{"source":24,"target":59,"value":1},{"source":2,"target":59,"value":1},{"source":71,"target":59,"value":1},{"source":11,"target":59,"value":1},{"source":50,"target":59,"value":1},{"source":50,"target":0,"value":1},{"source":26,"target":50,"value":1},{"source":24,"target":50,"value":1},{"source":32,"target":50,"value":1},{"source":31,"target":50,"value":1},{"source":17,"target":50,"value":1},{"source":6,"target":50,"value":1},{"source":59,"target":50,"value":1},{"source":56,"target":50,"value":1},{"source":27,"target":50,"value":1},{"source":7,"target":50,"value":1},{"source":61,"target":50,"value":1},{"source":12,"target":50,"value":1},{"source":25,"target":50,"value":1},{"source":41,"target":50,"value":1},{"source":15,"target":50,"value":1},{"source":47,"target":50,"value":1},{"source":23,"target":50,"value":1},{"source":62,"target":50,"value":1},{"source":33,"target":50,"value":1},{"source":36,"target":50,"value":1},{"source":20,"target":50,"value":1},{"source":65,"target":50,"value":1},{"source":51,"target":50,"value":1},{"source":44,"target":50,"value":1},{"source":37,"target":50,"value":1},{"source":40,"target":50,"value":1},{"source":8,"target":50,"value":1},{"source":68,"target":50,"value":1},{"source":18,"target":50,"value":1},{"source":19,"target":50,"value":1},{"source":21,"target":0,"value":1},{"source":45,"target":21,"value":1},{"source":46,"target":21,"value":1},{"source":34,"target":0,"value":1},{"source":66,"target":34,"value":1},{"source":31,"target":34,"value":1},{"source":10,"target":34,"value":1},{"source":22,"target":34,"value":1},{"source":58,"target":34,"value":1},{"source":51,"target":0,"value":1},{"source":26,"target":51,"value":1},{"source":16,"target":51,"value":1},{"source":49,"target":51,"value":1},{"source":32,"target":51,"value":1},{"source":53,"target":51,"value":1},{"source":31,"target":51,"value":1},{"source":17,"target":51,"value":1},{"source":60,"target":51,"value":1},{"source":27,"target":51,"value":1},{"source":50,"target":51,"value":1},{"source":47,"target":51,"value":1},{"source":36,"target":51,"value":1},{"source":20,"target":51,"value":1},{"source":44,"target":51,"value":1},{"source":8,"target":51,"value":1},{"source":18,"target":51,"value":1},{"source":2,"target":0,"value":1},{"source":48,"target":2,"value":1},{"source":26,"target":2,"value":1},{"source":16,"target":2,"value":1},{"source":32,"target":2,"value":1},{"source":13,"target":2,"value":1},{"source":59,"target":2,"value":1},{"source":11,"target":2,"value":1},{"source":73,"target":2,"value":1},{"source":51,"target":2,"value":1},{"source":52,"target":2,"value":1},{"source":35,"target":2,"value":1},{"source":18,"target":2,"value":1},{"source":57,"target":0,"value":1},{"source":13,"target":0,"value":1},{"source":26,"target":13,"value":1},{"source":49,"target":13,"value":1},{"source":32,"target":13,"value":1},{"source":2,"target":13,"value":1},{"source":6,"target":13,"value":1},{"source":56,"target":13,"value":1},{"source":27,"target":13,"value":1},{"source":12,"target":13,"value":1},{"source":11,"target":13,"value":1},{"source":15,"target":13,"value":1},{"source":23,"target":13,"value":1},{"source":65,"target":13,"value":1},{"source":52,"target":13,"value":1},{"source":44,"target":13,"value":1},{"source":8,"target":13,"value":1},{"source":68,"target":13,"value":1},{"source":18,"target":13,"value":1},{"source":40,"target":0,"value":1},{"source":9,"target":40,"value":1},{"source":26,"target":40,"value":1},{"source":24,"target":40,"value":1},{"source":67,"target":40,"value":1},{"source":32,"target":40,"value":1},{"source":17,"target":40,"value":1},{"source":56,"target":40,"value":1},{"source":11,"target":40,"value":1},{"source":50,"target":40,"value":1},{"source":73,"target":40,"value":1},{"source":36,"target":40,"value":1},{"source":63,"target":40,"value":1},{"source":52,"target":40,"value":1},{"source":44,"target":40,"value":1},{"source":4,"target":40,"value":1},{"source":68,"target":40,"value":1},{"source":69,"target":0,"value":1},{"source":26,"target":69,"value":1},{"source":24,"target":69,"value":1},{"source":17,"target":69,"value":1},{"source":6,"target":69,"value":1},{"source":56,"target":69,"value":1},{"source":27,"target":69,"value":1},{"source":61,"target":69,"value":1},{"source":12,"target":69,"value":1},{"source":25,"target":69,"value":1},{"source":50,"target":69,"value":1},{"source":41,"target":69,"value":1},{"source":15,"target":69,"value":1},{"source":33,"target":69,"value":1},{"source":51,"target":69,"value":1},{"source":52,"target":69,"value":1},{"source":44,"target":69,"value":1},{"source":37,"target":69,"value":1},{"source":68,"target":69,"value":1},{"source":18,"target":69,"value":1},{"source":70,"target":0,"value":1},{"source":25,"target":0,"value":1},{"source":24,"target":25,"value":1},{"source":6,"target":25,"value":1},{"source":56,"target":25,"value":1},{"source":27,"target":25,"value":1},{"source":69,"target":25,"value":1},{"source":50,"target":25,"value":1},{"source":73,"target":25,"value":1},{"source":15,"target":25,"value":1},{"source":36,"target":25,"value":1},{"source":20,"target":25,"value":1},{"source":51,"target":25,"value":1},{"source":38,"target":25,"value":1},{"source":8,"target":25,"value":1},{"source":68,"target":0,"value":1},{"source":48,"target":68,"value":1},{"source":26,"target":68,"value":1},{"source":67,"target":68,"value":1},{"source":6,"target":68,"value":1},{"source":13,"target":68,"value":1},{"source":56,"target":68,"value":1},{"source":61,"target":68,"value":1},{"source":69,"target":68,"value":1},{"source":12,"target":68,"value":1},{"source":11,"target":68,"value":1},{"source":50,"target":68,"value":1},{"source":15,"target":68,"value":1},{"source":62,"target":68,"value":1},{"source":63,"target":68,"value":1},{"source":51,"target":68,"value":1},{"source":52,"target":68,"value":1},{"source":44,"target":68,"value":1},{"source":40,"target":68,"value":1},{"source":18,"target":68,"value":1},{"source":49,"target":0,"value":1},{"source":24,"target":49,"value":1},{"source":31,"target":49,"value":1},{"source":13,"target":49,"value":1},{"source":47,"target":49,"value":1},{"source":33,"target":49,"value":1},{"source":51,"target":49,"value":1},{"source":72,"target":49,"value":1},{"source":8,"target":49,"value":1},{"source":44,"target":0,"value":1},{"source":26,"target":44,"value":1},{"source":67,"target":44,"value":1},{"source":32,"target":44,"value":1},{"source":1,"target":44,"value":1},{"source":6,"target":44,"value":1},{"source":13,"target":44,"value":1},{"source":56,"target":44,"value":1},{"source":69,"target":44,"value":1},{"source":12,"target":44,"value":1},{"source":11,"target":44,"value":1},{"source":50,"target":44,"value":1},{"source":36,"target":44,"value":1},{"source":63,"target":44,"value":1},{"source":51,"target":44,"value":1},{"source":52,"target":44,"value":1},{"source":40,"target":44,"value":1},{"source":68,"target":44,"value":1},{"source":18,"target":44,"value":1},{"source":28,"target":0,"value":1},{"source":17,"target":28,"value":1},{"source":50,"target":28,"value":1},{"source":36,"target":28,"value":1},{"source":43,"target":0,"value":1},{"source":62,"target":0,"value":1},{"source":26,"target":62,"value":1},{"source":67,"target":62,"value":1},{"source":17,"target":62,"value":1},{"source":6,"target":62,"value":1},{"source":69,"target":62,"value":1},{"source":11,"target":62,"value":1},{"source":50,"target":62,"value":1},{"source":63,"target":62,"value":1},{"source":51,"target":62,"value":1},{"source":52,"target":62,"value":1},{"source":8,"target":62,"value":1},{"source":68,"target":62,"value":1},{"source":18,"target":62,"value":1},{"source":38,"target":0,"value":1},{"source":32,"target":38,"value":1},{"source":56,"target":38,"value":1},{"source":25,"target":38,"value":1},{"source":20,"target":38,"value":1},{"source":5,"target":0,"value":1},{"source":47,"target":5,"value":1},{"source":23,"target":5,"value":1},{"source":72,"target":5,"value":1},{"source":8,"target":5,"value":1},{"source":58,"target":5,"value":1},{"source":55,"target":0,"value":1},{"source":23,"target":55,"value":1},{"source":30,"target":55,"value":1},{"source":48,"target":0,"value":1},{"source":9,"target":48,"value":1},{"source":26,"target":48,"value":1},{"source":56,"target":48,"value":1},{"source":73,"target":48,"value":1},{"source":63,"target":48,"value":1},{"source":18,"target":48,"value":1},{"source":26,"target":0,"value":1},{"source":67,"target":26,"value":1},{"source":17,"target":26,"value":1},{"source":6,"target":26,"value":1},{"source":13,"target":26,"value":1},{"source":56,"target":26,"value":1},{"source":27,"target":26,"value":1},{"source":69,"target":26,"value":1},{"source":12,"target":26,"value":1},{"source":11,"target":26,"value":1},{"source":50,"target":26,"value":1},{"source":73,"target":26,"value":1},{"source":15,"target":26,"value":1},{"source":36,"target":26,"value":1},{"source":20,"target":26,"value":1},{"source":63,"target":26,"value":1},{"source":51,"target":26,"value":1},{"source":52,"target":26,"value":1},{"source":44,"target":26,"value":1},{"source":40,"target":26,"value":1},{"source":68,"target":26,"value":1},{"source":18,"target":26,"value":1},{"source":29,"target":26,"value":1},{"source":30,"target":0,"value":1},{"source":55,"target":30,"value":1},{"source":9,"target":30,"value":1},{"source":16,"target":30,"value":1},{"source":49,"target":30,"value":1},{"source":2,"target":30,"value":1},{"source":34,"target":30,"value":1},{"source":1,"target":30,"value":1},{"source":7,"target":30,"value":1},{"source":39,"target":30,"value":1},{"source":11,"target":30,"value":1},{"source":22,"target":30,"value":1},{"source":15,"target":30,"value":1},{"source":46,"target":30,"value":1},{"source":36,"target":30,"value":1},{"source":20,"target":30,"value":1},{"source":51,"target":30,"value":1},{"source":35,"target":30,"value":1},{"source":22,"target":0,"value":1},{"source":31,"target":22,"value":1},{"source":34,"target":22,"value":1},{"source":10,"target":22,"value":1},{"source":64,"target":22,"value":1},{"source":58,"target":22,"value":1},{"source":30,"target":22,"value":1},{"source":14,"target":0,"value":1},{"source":53,"target":0,"value":1},{"source":24,"target":53,"value":1},{"source":31,"target":53,"value":1},{"source":56,"target":53,"value":1},{"source":51,"target":53,"value":1},{"source":52,"target":0,"value":1},{"source":48,"target":52,"value":1},{"source":26,"target":52,"value":1},{"source":24,"target":52,"value":1},{"source":67,"target":52,"value":1},{"source":32,"target":52,"value":1},{"source":2,"target":52,"value":1},{"source":17,"target":52,"value":1},{"source":6,"target":52,"value":1},{"source":13,"target":52,"value":1},{"source":56,"target":52,"value":1},{"source":27,"target":52,"value":1},{"source":61,"target":52,"value":1},{"source":69,"target":52,"value":1},{"source":12,"target":52,"value":1},{"source":11,"target":52,"value":1},{"source":50,"target":52,"value":1},{"source":15,"target":52,"value":1},{"source":62,"target":52,"value":1},{"source":36,"target":52,"value":1},{"source":63,"target":52,"value":1},{"source":65,"target":52,"value":1},{"source":51,"target":52,"value":1},{"source":44,"target":52,"value":1},{"source":40,"target":52,"value":1},{"source":8,"target":52,"value":1},{"source":68,"target":52,"value":1},{"source":18,"target":52,"value":1},{"source":29,"target":0,"value":1},{"source":26,"target":29,"value":1},{"source":24,"target":29,"value":1},{"source":32,"target":29,"value":1},{"source":56,"target":29,"value":1},{"source":27,"target":29,"value":1},{"source":73,"target":29,"value":1},{"source":18,"target":29,"value":1},{"source":63,"target":0,"value":1},{"source":26,"target":63,"value":1},{"source":67,"target":63,"value":1},{"source":6,"target":63,"value":1},{"source":56,"target":63,"value":1},{"source":69,"target":63,"value":1},{"source":12,"target":63,"value":1},{"source":11,"target":63,"value":1},{"source":73,"target":63,"value":1},{"source":15,"target":63,"value":1},{"source":62,"target":63,"value":1},{"source":36,"target":63,"value":1},{"source":65,"target":63,"value":1},{"source":52,"target":63,"value":1},{"source":44,"target":63,"value":1},{"source":40,"target":63,"value":1},{"source":68,"target":63,"value":1},{"source":18,"target":63,"value":1},{"source":23,"target":0,"value":1},{"source":55,"target":23,"value":1},{"source":24,"target":23,"value":1},{"source":32,"target":23,"value":1},{"source":17,"target":23,"value":1},{"source":6,"target":23,"value":1},{"source":13,"target":23,"value":1},{"source":27,"target":23,"value":1},{"source":5,"target":23,"value":1},{"source":11,"target":23,"value":1},{"source":50,"target":23,"value":1},{"source":15,"target":23,"value":1},{"source":20,"target":23,"value":1},{"source":64,"target":0,"value":1},{"source":22,"target":64,"value":1},{"source":10,"target":0,"value":1},{"source":34,"target":10,"value":1},{"source":22,"target":10,"value":1},{"source":4,"target":0,"value":1},{"source":11,"target":4,"value":1},{"source":73,"target":4,"value":1},{"source":40,"target":4,"value":1},{"source":3,"target":0,"value":1},{"source":56,"target":0,"value":1},{"source":48,"target":56,"value":1},{"source":26,"target":56,"value":1},{"source":24,"target":56,"value":1},{"source":67,"target":56,"value":1},{"source":32,"target":56,"value":1},{"source":53,"target":56,"value":1},{"source":17,"target":56,"value":1},{"source":13,"target":56,"value":1},{"source":69,"target":56,"value":1},{"source":12,"target":56,"value":1},{"source":25,"target":56,"value":1},{"source":11,"target":56,"value":1},{"source":50,"target":56,"value":1},{"source":73,"target":56,"value":1},{"source":15,"target":56,"value":1},{"source":36,"target":56,"value":1},{"source":20,"target":56,"value":1},{"source":63,"target":56,"value":1},{"source":52,"target":56,"value":1},{"source":38,"target":56,"value":1},{"source":44,"target":56,"value":1},{"source":40,"target":56,"value":1},{"source":8,"target":56,"value":1},{"source":68,"target":56,"value":1},{"source":18,"target":56,"value":1},{"source":29,"target":56,"value":1},{"source":60,"target":0,"value":1},{"source":51,"target":60,"value":1},{"source":67,"target":0,"value":1},{"source":48,"target":67,"value":1},{"source":26,"target":67,"value":1},{"source":6,"target":67,"value":1},{"source":13,"target":67,"value":1},{"source":56,"target":67,"value":1},{"source":14,"target":67,"value":1},{"source":61,"target":67,"value":1},{"source":69,"target":67,"value":1},{"source":12,"target":67,"value":1},{"source":11,"target":67,"value":1},{"source":50,"target":67,"value":1},{"source":15,"target":67,"value":1},{"source":43,"target":67,"value":1},{"source":62,"target":67,"value":1},{"source":63,"target":67,"value":1},{"source":52,"target":67,"value":1},{"source":38,"target":67,"value":1},{"source":44,"target":67,"value":1},{"source":40,"target":67,"value":1},{"source":68,"target":67,"value":1},{"source":18,"target":67,"value":1},{"source":29,"target":67,"value":1},{"source":24,"target":0,"value":1},{"source":9,"target":24,"value":1},{"source":16,"target":24,"value":1},{"source":49,"target":24,"value":1},{"source":53,"target":24,"value":1},{"source":6,"target":24,"value":1},{"source":59,"target":24,"value":1},{"source":56,"target":24,"value":1},{"source":27,"target":24,"value":1},{"source":69,"target":24,"value":1},{"source":25,"target":24,"value":1},{"source":11,"target":24,"value":1},{"source":50,"target":24,"value":1},{"source":15,"target":24,"value":1},{"source":23,"target":24,"value":1},{"source":36,"target":24,"value":1},{"source":20,"target":24,"value":1},{"source":52,"target":24,"value":1},{"source":40,"target":24,"value":1},{"source":8,"target":24,"value":1},{"source":29,"target":24,"value":1},{"source":27,"target":0,"value":1},{"source":48,"target":27,"value":1},{"source":26,"target":27,"value":1},{"source":24,"target":27,"value":1},{"source":32,"target":27,"value":1},{"source":31,"target":27,"value":1},{"source":17,"target":27,"value":1},{"source":13,"target":27,"value":1},{"source":56,"target":27,"value":1},{"source":12,"target":27,"value":1},{"source":25,"target":27,"value":1},{"source":11,"target":27,"value":1},{"source":50,"target":27,"value":1},{"source":15,"target":27,"value":1},{"source":23,"target":27,"value":1},{"source":36,"target":27,"value":1},{"source":20,"target":27,"value":1},{"source":51,"target":27,"value":1},{"source":8,"target":27,"value":1},{"source":18,"target":27,"value":1},{"source":29,"target":27,"value":1},{"source":66,"target":0,"value":1},{"source":34,"target":66,"value":1},{"source":73,"target":66,"value":1},{"source":15,"target":0,"value":1},{"source":26,"target":15,"value":1},{"source":24,"target":15,"value":1},{"source":32,"target":15,"value":1},{"source":17,"target":15,"value":1},{"source":6,"target":15,"value":1},{"source":13,"target":15,"value":1},{"source":56,"target":15,"value":1},{"source":27,"target":15,"value":1},{"source":69,"target":15,"value":1},{"source":12,"target":15,"value":1},{"source":25,"target":15,"value":1},{"source":11,"target":15,"value":1},{"source":50,"target":15,"value":1},{"source":73,"target":15,"value":1},{"source":23,"target":15,"value":1},{"source":36,"target":15,"value":1},{"source":63,"target":15,"value":1},{"source":52,"target":15,"value":1},{"source":8,"target":15,"value":1},{"source":68,"target":15,"value":1},{"source":18,"target":15,"value":1},{"source":19,"target":15,"value":1},{"source":12,"target":0,"value":1},{"source":48,"target":12,"value":1},{"source":26,"target":12,"value":1},{"source":67,"target":12,"value":1},{"source":6,"target":12,"value":1},{"source":13,"target":12,"value":1},{"source":56,"target":12,"value":1},{"source":27,"target":12,"value":1},{"source":14,"target":12,"value":1},{"source":11,"target":12,"value":1},{"source":50,"target":12,"value":1},{"source":15,"target":12,"value":1},{"source":36,"target":12,"value":1},{"source":63,"target":12,"value":1},{"source":52,"target":12,"value":1},{"source":44,"target":12,"value":1},{"source":40,"target":12,"value":1},{"source":68,"target":12,"value":1},{"source":18,"target":12,"value":1},{"source":11,"target":0,"value":1},{"source":48,"target":11,"value":1},{"source":26,"target":11,"value":1},{"source":24,"target":11,"value":1},{"source":67,"target":11,"value":1},{"source":32,"target":11,"value":1},{"source":2,"target":11,"value":1},{"source":17,"target":11,"value":1},{"source":6,"target":11,"value":1},{"source":13,"target":11,"value":1},{"source":59,"target":11,"value":1},{"source":56,"target":11,"value":1},{"source":27,"target":11,"value":1},{"source":7,"target":11,"value":1},{"source":61,"target":11,"value":1},{"source":69,"target":11,"value":1},{"source":12,"target":11,"value":1},{"source":25,"target":11,"value":1},{"source":50,"target":11,"value":1},{"source":73,"target":11,"value":1},{"source":15,"target":11,"value":1},{"source":43,"target":11,"value":1},{"source":23,"target":11,"value":1},{"source":36,"target":11,"value":1},{"source":20,"target":11,"value":1},{"source":63,"target":11,"value":1},{"source":51,"target":11,"value":1},{"source":52,"target":11,"value":1},{"source":44,"target":11,"value":1},{"source":40,"target":11,"value":1},{"source":8,"target":11,"value":1},{"source":4,"target":11,"value":1},{"source":68,"target":11,"value":1},{"source":18,"target":11,"value":1},{"source":19,"target":11,"value":1},{"source":58,"target":0,"value":1},{"source":66,"target":58,"value":1},{"source":31,"target":58,"value":1},{"source":34,"target":58,"value":1},{"source":10,"target":58,"value":1},{"source":5,"target":58,"value":1},{"source":50,"target":58,"value":1},{"source":22,"target":58,"value":1},{"source":15,"target":58,"value":1},{"source":72,"target":0,"value":1},{"source":49,"target":72,"value":1},{"source":31,"target":72,"value":1},{"source":5,"target":72,"value":1},{"source":71,"target":72,"value":1},{"source":47,"target":72,"value":1},{"source":33,"target":72,"value":1},{"source":8,"target":72,"value":1},{"source":30,"target":72,"value":1},{"source":18,"target":0,"value":1},{"source":48,"target":18,"value":1},{"source":26,"target":18,"value":1},{"source":67,"target":18,"value":1},{"source":32,"target":18,"value":1},{"source":17,"target":18,"value":1},{"source":6,"target":18,"value":1},{"source":13,"target":18,"value":1},{"source":56,"target":18,"value":1},{"source":61,"target":18,"value":1},{"source":69,"target":18,"value":1},{"source":12,"target":18,"value":1},{"source":11,"target":18,"value":1},{"source":50,"target":18,"value":1},{"source":15,"target":18,"value":1},{"source":36,"target":18,"value":1},{"source":63,"target":18,"value":1},{"source":51,"target":18,"value":1},{"source":52,"target":18,"value":1},{"source":44,"target":18,"value":1},{"source":8,"target":18,"value":1},{"source":68,"target":18,"value":1},{"source":29,"target":18,"value":1},{"source":6,"target":0,"value":1},{"source":48,"target":6,"value":1},{"source":26,"target":6,"value":1},{"source":24,"target":6,"value":1},{"source":67,"target":6,"value":1},{"source":32,"target":6,"value":1},{"source":17,"target":6,"value":1},{"source":27,"target":6,"value":1},{"source":61,"target":6,"value":1},{"source":69,"target":6,"value":1},{"source":12,"target":6,"value":1},{"source":25,"target":6,"value":1},{"source":11,"target":6,"value":1},{"source":50,"target":6,"value":1},{"source":41,"target":6,"value":1},{"source":73,"target":6,"value":1},{"source":15,"target":6,"value":1},{"source":23,"target":6,"value":1},{"source":62,"target":6,"value":1},{"source":36,"target":6,"value":1},{"source":20,"target":6,"value":1},{"source":63,"target":6,"value":1},{"source":65,"target":6,"value":1},{"source":51,"target":6,"value":1},{"source":52,"target":6,"value":1},{"source":44,"target":6,"value":1},{"source":37,"target":6,"value":1},{"source":40,"target":6,"value":1},{"source":8,"target":6,"value":1},{"source":68,"target":6,"value":1},{"source":18,"target":6,"value":1},{"source":19,"target":6,"value":1},{"source":32,"target":0,"value":1},{"source":48,"target":32,"value":1},{"source":26,"target":32,"value":1},{"source":67,"target":32,"value":1},{"source":2,"target":32,"value":1},{"source":6,"target":32,"value":1},{"source":13,"target":32,"value":1},{"source":56,"target":32,"value":1},{"source":27,"target":32,"value":1},{"source":12,"target":32,"value":1},{"source":25,"target":32,"value":1},{"source":11,"target":32,"value":1},{"source":50,"target":32,"value":1},{"source":15,"target":32,"value":1},{"source":23,"target":32,"value":1},{"source":36,"target":32,"value":1},{"source":20,"target":32,"value":1},{"source":51,"target":32,"value":1},{"source":52,"target":32,"value":1},{"source":38,"target":32,"value":1},{"source":44,"target":32,"value":1},{"source":40,"target":32,"value":1},{"source":8,"target":32,"value":1},{"source":68,"target":32,"value":1},{"source":18,"target":32,"value":1},{"source":29,"target":32,"value":1},{"source":31,"target":0,"value":1},{"source":26,"target":31,"value":1},{"source":16,"target":31,"value":1},{"source":49,"target":31,"value":1},{"source":53,"target":31,"value":1},{"source":17,"target":31,"value":1},{"source":34,"target":31,"value":1},{"source":27,"target":31,"value":1},{"source":5,"target":31,"value":1},{"source":69,"target":31,"value":1},{"source":50,"target":31,"value":1},{"source":41,"target":31,"value":1},{"source":15,"target":31,"value":1},{"source":47,"target":31,"value":1},{"source":33,"target":31,"value":1},{"source":51,"target":31,"value":1},{"source":72,"target":31,"value":1},{"source":37,"target":31,"value":1},{"source":8,"target":31,"value":1},{"source":8,"target":0,"value":1},{"source":26,"target":8,"value":1},{"source":24,"target":8,"value":1},{"source":49,"target":8,"value":1},{"source":32,"target":8,"value":1},{"source":31,"target":8,"value":1},{"source":17,"target":8,"value":1},{"source":6,"target":8,"value":1},{"source":13,"target":8,"value":1},{"source":56,"target":8,"value":1},{"source":27,"target":8,"value":1},{"source":5,"target":8,"value":1},{"source":61,"target":8,"value":1},{"source":69,"target":8,"value":1},{"source":25,"target":8,"value":1},{"source":11,"target":8,"value":1},{"source":50,"target":8,"value":1},{"source":41,"target":8,"value":1},{"source":15,"target":8,"value":1},{"source":47,"target":8,"value":1},{"source":33,"target":8,"value":1},{"source":36,"target":8,"value":1},{"source":20,"target":8,"value":1},{"source":51,"target":8,"value":1},{"source":52,"target":8,"value":1},{"source":72,"target":8,"value":1},{"source":28,"target":8,"value":1},{"source":37,"target":8,"value":1},{"source":18,"target":8,"value":1},] }

//d3.json(json_graph, function(error, graph) {
    force2
        .nodes(graph2.nodes)
        .links(graph2.links)
        .start();
        
        var link2 = svg_graph2.selectAll(".link")
        .data(graph2.links)
        .enter().append("line")
        .attr("class", "link")
        .style("stroke-width", function(d) { return Math.sqrt(d.value); });
        
        var node2 = svg_graph2.selectAll(".node")
        .data(graph2.nodes)
        .enter().append("circle")
        .attr("class", "node")
        .attr("r", 5)
        .style("fill", function(d) { return color2(d.group); })
        .call(force2.drag);
        
        node2.append("title")
        .text(function(d) { return d.name; });
        
        force2.on("tick", function() {
                 link2.attr("x1", function(d) { return d.source.x; })
                 .attr("y1", function(d) { return d.source.y; })
                 .attr("x2", function(d) { return d.target.x; })
                 .attr("y2", function(d) { return d.target.y; });
                 
                 node2.attr("cx", function(d) { return d.x; })
                 .attr("cy", function(d) { return d.y; });
                 });
      //  });