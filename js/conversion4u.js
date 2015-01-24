var Conversion4u = {

	conversionTypes : [
		["km", "length"],
		["m", "length"],
		["miles", "length"],
		["inch", "length"],
		["yards", "length"],
		["ft", "length"],
		["nmi", "length"],
		["league", "length"],
		["furlong", "length"],
		["rod", "length"],
		["mil", "length"],
		["angstrom", "length"],
		["pica", "length"],
		["point", "length"],
		["z", "length"],
		["AU", "length"],
		["ls", "length"],
		["lmin", "length"],
		["ly", "length"],
		["parsec", "length"],
		
		["hectare", "area"],
		["acre", "area"],
		["ft2", "area"],
		
		["tempC", "temperature"],
		["tempF", "temperature"],
		["tempK", "temperature"],
		["tempR", "temperature"],
		
		["kph", "speed"],
		["mph", "speed"],
		["kt", "speed"],
		["fps", "speed"],
		
		["s", "time"],
		["min", "time"],
		["h", "time"],
		["d", "time"],
		["wk", "time"],
		["fortnight", "time"],
		["y", "time"],
		["decade", "time"],
		["century", "time"],
		
		["l", "volume"],
		["gal", "volume"],
		["qt", "volume"],
		["pint", "volume"],
		["cup", "volume"],
		["floz", "volume"],
		["tbs", "volume"],
		["tsp", "volume"],
		["floz", "volume"],
		["bu", "volume"],
		
		["kg", "weight"],
		["lbs", "weight"],
		["oz", "weight"],
		["g", "weight"],
		["stone", "weight"],
		["u", "weight"],
		["Da", "weight"],
		["slug", "weight"],
		["tn", "weight"],
		["tonne", "weight"],
		["ct", "weight"],
		["grain", "weight"],
		["dram", "weight"],
	],
	
	init : function() {
		var me = this;
		$("#outputNumber")[0].value = "";

		$(".dropdown-menu li a").click(function(){
		  var selText = $(this).text();
		  var selValue = $(this)[0].dataset.value;
		  $(this).parents('.form-group').find('button[data-toggle="dropdown"]').html(selText+' <span class="caret"></span>');
		  $(this).parents('.form-group').find('button[data-toggle="dropdown"]')[0].setAttribute('data-value',selValue);
		  me.doConversion();
		});
		
		$("#inputNumber").keyup(function() {
			me.doConversion();
		});
		
		$("#inputUnit").change(function() {
			me.doConversion();
		});
		
		$("#outputUnit").change(function() {
			me.doConversion();
		});
		
	},
	
	doConversion: function() {
		var inputUnit = $("#inputUnit")[0].dataset.value;
		var outputUnit = $('#outputUnit')[0].dataset.value;
		var inputNumber = $('#inputNumber')[0].value;
		var qtyString = inputNumber.concat(' ', inputUnit);
		var inputQty = new Qty(qtyString);
		var outputQty = inputQty.to(outputUnit);
		
		var outputValue = outputQty.toString();
		//outputValue = outputValue.replace(/[A-Za-z ]+/g, '');
		$("#outputNumber")[0].value = outputValue;
	},
	
	inputOptions : $('#inputOptions').html(),
	outputOptions : $('#outputOptions').html(),

	
	frontPage : function() {
		var me = this;
			
		$("#groupList li a").click(function(){
			var selText = $(this).text();
			var selValue = $(this)[0].dataset.value;
			$(this).parents('.form-group').find('button[data-toggle="dropdown"]').html(selText+' <span class="caret"></span>');
			$(this).parents('.form-group').find('button[data-toggle="dropdown"]')[0].setAttribute('data-value',selValue);
			
			var inputOptions = $('#inputOptions').html(me.inputOptions);
			var outputOptions = $('#outputOptions').html(me.outputOptions);
			var conversionType = $('#conversionType')[0].dataset.value;
		    
		    $('#inputOptions li').each(function() {
		        var rm = true;
	        	var optionValue = $(this).find('a')[0].dataset.value;
	
		        for (var i in me.conversionTypes) {
		            if (optionValue == me.conversionTypes[i][0] && conversionType == me.conversionTypes[i][1]){
		            	rm = false;
	            	};
		        }
		        if (rm == true){
		        	$(this).remove();
		        }
		    });
		    
		    $('#outputOptions li').each(function() {
		        var rm = true;
	        	var optionValue = $(this).find('a')[0].dataset.value;
	
		        for (var i in me.conversionTypes) {
		            if (optionValue == me.conversionTypes[i][0] && conversionType == me.conversionTypes[i][1]){
		            	rm = false;
	            	};
		        };
		        if (rm == true){
		        	$(this).remove();
		        };
		     });
		    
		    var inputText = $('#inputOptions li:first a').text();
		    var inputValue = $('#inputOptions li:first a')[0].dataset.value;
		    
		    $('button#inputUnit').html(inputText + ' <span class="caret"></span>');
		    $('button#inputUnit')[0].setAttribute('data-value', inputValue);
		    
		    var outputText = $('#outputOptions li:nth-child(2) a').text();
		    var outputValue = $('#outputOptions li:nth-child(2) a')[0].dataset.value;
		    
		    $('button#outputUnit').html(outputText + ' <span class="caret"></span>');
		    $('button#outputUnit')[0].setAttribute('data-value', outputValue);
		    
			me.applyDropdownListeners();
  
    	});
                
		$("#outputNumber")[0].value = "";

		me.applyDropdownListeners();
		
		$("#inputNumber").keyup(function() {
			me.doConversion();
		});
		
		$("#inputUnit").change(function() {
			me.doConversion();
		});
		
		$("#outputUnit").change(function() {
			me.doConversion();
		});
		
	},
	
	applyDropdownListeners : function(){
		var me = this;
		$(".dropdown-menu li a").click(function(){
		  var selText = $(this).text();
		  var selValue = $(this)[0].dataset.value;
		  $(this).parents('.form-group').find('button[data-toggle="dropdown"]').html(selText+' <span class="caret"></span>');
		  $(this).parents('.form-group').find('button[data-toggle="dropdown"]')[0].setAttribute('data-value',selValue);
		  me.doConversion();
		});
	},
};
