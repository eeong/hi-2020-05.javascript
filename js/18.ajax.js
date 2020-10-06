function dataMaker(r){
	var i,html = '';
for(i in r.students){
	html+='<tr>';
	html+='<td>'+(Number(i)+1)+'</td>';
	html+='<td>'+r.students[i].name+'</td>';
	html+='<td>'+r.students[i].kor+'점</td>';
	html+='<td>'+r.students[i].eng+'점</td>';
	html+='<td>'+r.students[i].math+'점</td>';
	html+='</tr>';
}
/* $("#scoreTbl tbody").empty();
$("#scoreTbl tbody").append(html); */
$(html).appendTo($("#scoreTbl tbody").empty());
}

function onAjax(){
$.ajax({
	type: 'get',
	dataType: 'json',
	url: '../json/score.json',
	success: dataMaker
});}


function onAjaxT(){
	// $.get(url,sendData,callBack);

	 $.get('http://192.168.0.30:5500/json/score.json', dataMaker);

/* 	$.ajax({
		type: 'get',
		dataType: 'json',
		url: 'http://192.168.0.30:5500/json/score.json',
		success: function(r){
			console.log(r);
		}
	}); */
	}

	function onWeather(){
		var data= {
			appid:'d905c12b72e24ba0ea5f7746a96c3d73',
			id: '1835848',
			units:'metric',
		}
		var url = 'https://api.openweathermap.org/data/2.5/weather';

		var success = function(r){
			$("#weatherTbl .temp-td").html(r.main.temp+'도(체감온도'+r.main.feels_like+'도)')
			$("#weatherTbl .weather-td").html(r.weather[0].main+'('+r.weather[0].description+')');
		} 

		$.get(url,data,success);
	}

	$("#btnMy").click(onAjax);
	$("#btnTeacher").click(onAjaxT);
	$("#btnWeather").click(onWeather);
	
	JSON.stringify()