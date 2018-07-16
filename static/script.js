$(document).ready(function () {
    var port_engine = false;
    var starboard_engine = false;
    var waste_pump = false;
    var water_pump = false;
    var port_generator = false;
    var starboard_generator = false;
    var port_generator_button = false;
    var starboard_generator_button = false;

    var starboard_engine_rpm_gauge = new RadialGauge({
        renderTo: "starboard_engine_rpm_gauge",
        width: 316,
        height: 316,
        minValue: 0,
        maxValue: 2000,
        title: "RPM",
        units: "MTU",
        majorTicks: ["0","","200","","400","","600","","800","","1000","","1200","","1400","","1600","","1800","","2000"],
        minorTicks: 5,
        highlightsWidth: 0,
        numbersMargin: 0,
        animationDuration: 2000,
        animationRule: "dequad",
        colorPlate: "#ffffff",
        colorPlateEnd: "#eeeeee",
        colorMajorTicks: "#444444",
        colorMinorTicks: "#444444",
        colorTitle: "#444444",
        colorUnits: "#444444",
        colorNumbers: "#222222",
        colorNeedle: "#222222",
        colorNeedleEnd: "#222222",
        colorNeedleCircleOuter: "#ffffff",
        colorNeedleCircleOuterEnd: "#444444",
        colorNeedleCircleInner: "#dddddd",
        colorNeedleCircleInnerEnd: "#ffffff",
        colorNeedleShadowUp: "#555555",
        colorBorderShadow: "#000000",
        colorBorderOuter: "#444444",
        colorBorderOuterEnd: "#000000",
        colorBorderMiddle: "#777777",
        colorBorderMiddleEnd: "#444444",
        colorBorderInner: "#555555",
        colorBorderInnerEnd: "#888888",
        needleStart: 24,
        needleWidth: 4,
        borderOuterWidth: 4,
        borderInnerWidth: 4,
        borderMiddleWidth: 4,
        borderShadowWidth: 4,
        valueBox: false,
        fontNumbersSize: 18,
        fontTitleSize: 28,
        needleCircleSize: 12
    }).draw();

    var starboard_engine_temp_gauge = new RadialGauge({
        renderTo: "starboard_engine_temp_gauge",
        width: 156,
        height: 156,
        minValue: 0,
        maxValue: 120,
        title: "Temp",
        units: "°C",
        majorTicks: ["0","","20","","40","","60","","80","","100","","120"],
        minorTicks: 4,
        highlights: [{"from": 100, "to": 120, "color":"rgba(255, 0, 0, .5)"}],
        numbersMargin: -8,
        animationDuration: 2000,
        animationRule: "dequad",
        colorPlate: "#ffffff",
        colorPlateEnd: "#eeeeee",
        colorMajorTicks: "#444444",
        colorMinorTicks: "#444444",
        colorTitle: "#444444",
        colorUnits: "#444444",
        colorNumbers: "#222222",
        colorNeedle: "#222222",
        colorNeedleEnd: "#222222",
        colorNeedleCircleOuter: "#ffffff",
        colorNeedleCircleOuterEnd: "#444444",
        colorNeedleCircleInner: "#dddddd",
        colorNeedleCircleInnerEnd: "#ffffff",
        colorNeedleShadowUp: "#555555",
        colorBorderShadow: "#000000",
        colorBorderOuter: "#444444",
        colorBorderOuterEnd: "#000000",
        colorBorderMiddle: "#777777",
        colorBorderMiddleEnd: "#444444",
        colorBorderInner: "#555555",
        colorBorderInnerEnd: "#888888",
        needleStart: 0,
        needleWidth: 4,
        borderOuterWidth: 4,
        borderInnerWidth: 2,
        borderMiddleWidth: 4,
        borderShadowWidth: 4,
        valueBox: false,
        fontNumbersSize: 28,
        fontUnitsSize: 32,
        fontTitleSize: 32,
        needleCircleSize: 16
    }).draw();

    var starboard_engine_pressure_gauge = new RadialGauge({
        renderTo: "starboard_engine_pressure_gauge",
        width: 156,
        height: 156,
        minValue: 0,
        maxValue: 100,
        title: "Pressure",
        units: "psi",
        majorTicks: ["0","","20","","40","","60","","80","","100"],
        minorTicks: 4,
        highlightsWidth: 0,
        numbersMargin: -8,
        animationDuration: 2000,
        animationRule: "dequad",
        colorPlate: "#ffffff",
        colorPlateEnd: "#eeeeee",
        colorMajorTicks: "#444444",
        colorMinorTicks: "#444444",
        colorTitle: "#444444",
        colorUnits: "#444444",
        colorNumbers: "#222222",
        colorNeedle: "#222222",
        colorNeedleEnd: "#222222",
        colorNeedleCircleOuter: "#ffffff",
        colorNeedleCircleOuterEnd: "#444444",
        colorNeedleCircleInner: "#dddddd",
        colorNeedleCircleInnerEnd: "#ffffff",
        colorNeedleShadowUp: "#555555",
        colorBorderShadow: "#000000",
        colorBorderOuter: "#444444",
        colorBorderOuterEnd: "#000000",
        colorBorderMiddle: "#777777",
        colorBorderMiddleEnd: "#444444",
        colorBorderInner: "#555555",
        colorBorderInnerEnd: "#888888",
        needleStart: 0,
        needleWidth: 4,
        borderOuterWidth: 4,
        borderInnerWidth: 2,
        borderMiddleWidth: 4,
        borderShadowWidth: 4,
        valueBox: false,
        fontNumbersSize: 28,
        fontUnitsSize: 32,
        fontTitleSize: 32,
        needleCircleSize: 16
    }).draw();

    var port_engine_rpm_gauge = new RadialGauge({
        renderTo: "port_engine_rpm_gauge",
        width: 316,
        height: 316,
        minValue: 0,
        maxValue: 2000,
        title: "RPM",
        units: "MTU",
        majorTicks: ["0","","200","","400","","600","","800","","1000","","1200","","1400","","1600","","1800","","2000"],
        minorTicks: 5,
        highlightsWidth: 0,
        numbersMargin: 0,
        animationDuration: 2000,
        animationRule: "dequad",
        colorPlate: "#ffffff",
        colorPlateEnd: "#eeeeee",
        colorMajorTicks: "#444444",
        colorMinorTicks: "#444444",
        colorTitle: "#444444",
        colorUnits: "#444444",
        colorNumbers: "#222222",
        colorNeedle: "#222222",
        colorNeedleEnd: "#222222",
        colorNeedleCircleOuter: "#ffffff",
        colorNeedleCircleOuterEnd: "#444444",
        colorNeedleCircleInner: "#cccccc",
        colorNeedleCircleInnerEnd: "#ffffff",
        colorNeedleShadowUp: "#555555",
        colorBorderShadow: "#000000",
        colorBorderOuter: "#444444",
        colorBorderOuterEnd: "#000000",
        colorBorderMiddle: "#777777",
        colorBorderMiddleEnd: "#444444",
        colorBorderInner: "#555555",
        colorBorderInnerEnd: "#888888",
        needleStart: 24,
        needleWidth: 4,
        borderOuterWidth: 4,
        borderInnerWidth: 4,
        borderMiddleWidth: 4,
        borderShadowWidth: 4,
        valueBox: false,
        fontNumbersSize: 18,
        fontTitleSize: 28,
        needleCircleSize: 12
    }).draw();

    var port_engine_temp_gauge = new RadialGauge({
        renderTo: "port_engine_temp_gauge",
        width: 156,
        height: 156,
        minValue: 0,
        maxValue: 120,
        title: "Temp",
        units: "°C",
        majorTicks: ["0","","20","","40","","60","","80","","100","","120"],
        minorTicks: 4,
        highlights: [{"from": 100, "to": 120, "color":"rgba(255, 0, 0, .5)"}],
        numbersMargin: -8,
        animationDuration: 2000,
        animationRule: "dequad",
        colorPlate: "#ffffff",
        colorPlateEnd: "#eeeeee",
        colorMajorTicks: "#444444",
        colorMinorTicks: "#444444",
        colorTitle: "#444444",
        colorUnits: "#444444",
        colorNumbers: "#222222",
        colorNeedle: "#222222",
        colorNeedleEnd: "#222222",
        colorNeedleCircleOuter: "#ffffff",
        colorNeedleCircleOuterEnd: "#444444",
        colorNeedleCircleInner: "#dddddd",
        colorNeedleCircleInnerEnd: "#ffffff",
        colorNeedleShadowUp: "#555555",
        colorBorderShadow: "#000000",
        colorBorderOuter: "#444444",
        colorBorderOuterEnd: "#000000",
        colorBorderMiddle: "#777777",
        colorBorderMiddleEnd: "#444444",
        colorBorderInner: "#555555",
        colorBorderInnerEnd: "#888888",
        needleStart: 0,
        needleWidth: 4,
        borderOuterWidth: 4,
        borderInnerWidth: 2,
        borderMiddleWidth: 4,
        borderShadowWidth: 4,
        valueBox: false,
        fontNumbersSize: 28,
        fontUnitsSize: 32,
        fontTitleSize: 32,
        needleCircleSize: 16
    }).draw();

    var port_engine_pressure_gauge = new RadialGauge({
        renderTo: "port_engine_pressure_gauge",
        width: 156,
        height: 156,
        minValue: 0,
        maxValue: 100,
        title: "Pressure",
        units: "psi",
        majorTicks: ["0","","20","","40","","60","","80","","100"],
        minorTicks: 4,
        highlightsWidth: 0,
        numbersMargin: -8,
        animationDuration: 2000,
        animationRule: "dequad",
        colorPlate: "#ffffff",
        colorPlateEnd: "#eeeeee",
        colorMajorTicks: "#444444",
        colorMinorTicks: "#444444",
        colorTitle: "#444444",
        colorUnits: "#444444",
        colorNumbers: "#222222",
        colorNeedle: "#222222",
        colorNeedleEnd: "#222222",
        colorNeedleCircleOuter: "#ffffff",
        colorNeedleCircleOuterEnd: "#444444",
        colorNeedleCircleInner: "#dddddd",
        colorNeedleCircleInnerEnd: "#ffffff",
        colorNeedleShadowUp: "#555555",
        colorBorderShadow: "#000000",
        colorBorderOuter: "#444444",
        colorBorderOuterEnd: "#000000",
        colorBorderMiddle: "#777777",
        colorBorderMiddleEnd: "#444444",
        colorBorderInner: "#555555",
        colorBorderInnerEnd: "#888888",
        needleStart: 0,
        needleWidth: 4,
        borderOuterWidth: 4,
        borderInnerWidth: 2,
        borderMiddleWidth: 4,
        borderShadowWidth: 4,
        valueBox: false,
        fontNumbersSize: 28,
        fontUnitsSize: 32,
        fontTitleSize: 32,
        needleCircleSize: 16
    }).draw();

    var port_generator_voltage_gauge = new RadialGauge({
        renderTo: "port_generator_voltage_gauge",
        width: 280,
        height: 280,
        minValue: 0,
        maxValue: 250,
        majorTicks: ["0","5","10","15","20","25"],
        minorTicks: 5,
        highlightsWidth: 0,
        needleType: "line",
        numbersMargin: 0,
        animationDuration: 1000,
        animationRule: "dequint",
        colorPlate: "#f8f8f8",
        colorPlateEnd: "#f8f8f8",
        colorMajorTicks: "#222222",
        colorMinorTicks: "#222222",
        colorNumbers: "#222222",
        colorNeedle: "#222222",
        colorNeedleEnd: "#222222",
        colorNeedleCircleOuter: "#000000",
        colorNeedleCircleOuterEnd: "#000000",
        colorNeedleCircleInner: "#000000",
        colorNeedleCircleInnerEnd: "#000000",
        borderShadowWidth: 0,
        borders: false, 
        valueBox: false,
        needleStart: 0,
        needleEnd: 95,
        needleWidth: 2,
        ticksAngle: 90,
        startAngle: 135,
        fontNumbersSize: 18,
        needleCircleSize: 12
    }).draw();

    var starboard_generator_voltage_gauge = new RadialGauge({
        renderTo: "starboard_generator_voltage_gauge",
        width: 280,
        height: 280,
        minValue: 0,
        maxValue: 250,
        majorTicks: ["0","5","10","15","20","25"],
        minorTicks: 5,
        highlightsWidth: 0,
        needleType: "line",
        numbersMargin: 0,
        animationDuration: 1000,
        animationRule: "dequint",
        colorPlate: "#f8f8f8",
        colorPlateEnd: "#f8f8f8",
        colorMajorTicks: "#222222",
        colorMinorTicks: "#222222",
        colorNumbers: "#222222",
        colorNeedle: "#222222",
        colorNeedleEnd: "#222222",
        colorNeedleCircleOuter: "#000000",
        colorNeedleCircleOuterEnd: "#000000",
        colorNeedleCircleInner: "#000000",
        colorNeedleCircleInnerEnd: "#000000",
        borderShadowWidth: 0,
        borders: false, 
        valueBox: false,
        needleStart: 0,
        needleEnd: 95,
        needleWidth: 2,
        ticksAngle: 90,
        startAngle: 135,
        fontNumbersSize: 18,
        needleCircleSize: 12
    }).draw();

    function control(status, name){
        if(status){
            $("#" + name + "_switch").css("background-image","url('static/img/switch_on.png')");
            $("#" + name + "_lamp").css("background-image","url('static/img/light_on.png')");
        }
        else{
            $("#" + name + "_switch").css("background-image","url('static/img/switch_off.png')");
            $("#" + name + "_lamp").css("background-image","url(''static/img/light_off.png')");
        }
    }

    function generator_control() {
        if (port_generator && port_generator_button) {
            $("#port_generator_switch").css("background-image","url('static/img/switch_on.png')");
            $("#port_generator_lamp").css("background-image","url('static/img/light_on.png')");
        } 
        else if (!port_generator && port_generator_button) {
            $("#port_generator_switch").css("background-image","url('static/img/switch_on.png')");
            $("#port_generator_lamp").css("background-image","url('static/img/light_off.png')");
        } 
        else if (port_generator && !port_generator_button) {
            $("#port_generator_switch").css("background-image","url('static/img/switch_on.png')");
            $("#port_generator_lamp").css("background-image","url('static/img/light_on.png')");
        } 
        else if (!port_generator && !port_generator_button) {
            $("#port_generator_switch").css("background-image","url('static/img/switch_off.png')");
            $("#port_generator_lamp").css("background-image","url(''static/img/light_off.png')");
        }

        if (starboard_generator && starboard_generator_button) {
            $("#starboard_generator_switch").css("background-image","url('static/img/switch_on.png')");
            $("#starboard_generator_lamp").css("background-image","url('static/img/light_on.png')");
        } 
        else if (!starboard_generator && starboard_generator_button) {
            $("#starboard_generator_switch").css("background-image","url('static/img/switch_on.png')");
            $("#starboard_generator_lamp").css("background-image","url('static/img/light_off.png')");
        } 
        else if (starboard_generator && !starboard_generator_button) {
            $("#starboard_generator_switch").css("background-image","url('static/img/switch_on.png')");
            $("#starboard_generator_lamp").css("background-image","url('static/img/light_on.png')");
        } 
        else if (!starboard_generator && !starboard_generator_button) {
            $("#starboard_generator_switch").css("background-image","url('static/img/switch_off.png')");
            $("#starboard_generator_lamp").css("background-image","url(''static/img/light_off.png')");
        }
    }

    $.ajax({
        type: "get",
        url: "/status",
        dataType: "json",
        success: function (response) {
            var data = $.parseJSON(response);

            port_engine = (data.port_engine.status == "on" ? true : false);
            starboard_engine = (data.starboard_engine.status == "on" ? true : false);
            waste_pump = (data.waste_pump.status == "on" ? true : false);
            water_pump = (data.water_pump.status == "on" ? true : false);
            port_generator = (data.port_generator.status == "on" ? true : false);
            starboard_generator = (data.starboard_generator.status == "on" ? true : false);
            port_generator_button = (data.port_generator.status == "on" ? true : false);
            starboard_generator_button = (data.starboard_generator.status == "on" ? true : false);

            control(port_engine, "port_engine");
            control(starboard_engine, "starboard_engine");
            control(water_pump, "water_pump");
            control(waste_pump, "waste_pump");
            generator_control();

            port_engine_rpm_gauge.value = data.port_engine.rpm;
            port_engine_temp_gauge.value = data.port_engine.temp;
            port_engine_pressure_gauge.value = data.port_engine.pressure;
            starboard_engine_rpm_gauge.value = data.starboard_engine.rpm;
            starboard_engine_temp_gauge.value = data.starboard_engine.temp;
            starboard_engine_pressure_gauge.value = data.starboard_engine.pressure;
            port_generator_voltage_gauge.value = data.port_generator.volt;
            starboard_generator_voltage_gauge.value = data.starboard_generator.volt;
        }
    });

    function refresh() {
        $.ajax({
            type: "get",
            url: "/status",
            dataType: "json",
            success: function (response) {
                var data = $.parseJSON(response);

                port_engine = (data.port_engine.status == "on" ? true : false);
                starboard_engine = (data.starboard_engine.status == "on" ? true : false);
                waste_pump = (data.waste_pump.status == "on" ? true : false);
                water_pump = (data.water_pump.status == "on" ? true : false);
                port_generator = (data.port_generator.status == "on" ? true : false);
                starboard_generator = (data.starboard_generator.status == "on" ? true : false);

                control(port_engine, "port_engine");
                control(starboard_engine, "starboard_engine");
                control(water_pump, "water_pump");
                control(waste_pump, "waste_pump");
                generator_control();

                port_engine_rpm_gauge.value = data.port_engine.rpm;
                port_engine_temp_gauge.value = data.port_engine.temp;
                port_engine_pressure_gauge.value = data.port_engine.pressure;
                starboard_engine_rpm_gauge.value = data.starboard_engine.rpm;
                starboard_engine_temp_gauge.value = data.starboard_engine.temp;
                starboard_engine_pressure_gauge.value = data.starboard_engine.pressure;
                port_generator_voltage_gauge.value = data.port_generator.volt;
                starboard_generator_voltage_gauge.value = data.starboard_generator.volt;
            }
        });
    }
    //refresh();

    $("#starboard_engine_switch").click(function (e) { 
        var formData = new FormData();

        if (starboard_engine) {
            action = "off";
            starboard_engine = false;
            $(this).css("background-image","url('static/img/switch_off.png')");
            $("#starboard_engine_lamp").css("background-image","url('static/img/light_off.png')");
        } 
        else {
            action = "on";
            starboard_engine = true;
            $(this).css("background-image","url('static/img/switch_on.png')");
            $("#starboard_engine_lamp").css("background-image","url('static/img/light_on.png')");
        }

        formData.append("action", action);
        formData.append("side", "starboard");
        e.preventDefault();

        $.ajax({
            type: "post",
            url: "/engine",
            data: formData,
            processData: false,
            contentType: false,
            dataType: "json",
            success: function (response) {
                refresh();
            }
        });
    });

    $("#port_engine_switch").click(function (e) { 
        var formData = new FormData();

        if (port_engine) {
            action = "off";
            port_engine = false;
            $(this).css("background-image","url('static/img/switch_off.png')");
            $("#port_engine_lamp").css("background-image","url('static/img/light_off.png')");
        } 
        else {
            action = "on";
            port_engine = true;
            $(this).css("background-image","url('static/img/switch_on.png')");
            $("#port_engine_lamp").css("background-image","url('static/img/light_on.png')");
        }

        formData.append("action", action);
        formData.append("side", "port");
        e.preventDefault();

        $.ajax({
            type: "post",
            url: "/engine",
            data: formData,
            processData: false,
            contentType: false,
            dataType: "json",
            success: function (response) {
                refresh();
            }
        });
    });

    $("#waste_pump_switch").click(function (e) { 
        var formData = new FormData();

        if (waste_pump) {
            action = "off";
            waste_pump = false;
            $(this).css("background-image","url('static/img/switch_off.png')");
            $("#waste_pump_lamp").css("background-image","url('static/img/light_off.png')");
        } 
        else {
            action = "on";
            waste_pump = true;
            $(this).css("background-image","url('static/img/switch_on.png')");
            $("#waste_pump_lamp").css("background-image","url('static/img/light_on.png')");
        }

        formData.append("action", action);
        formData.append("type", "waste");
        e.preventDefault();

        $.ajax({
            type: "post",
            url: "/pump",
            data: formData,
            processData: false,
            contentType: false,
            dataType: "json",
            success: function (response) {
                refresh();
            }
        });
    });

    $("#water_pump_switch").click(function (e) { 
        var formData = new FormData();

        if (water_pump) {
            action = "off";
            water_pump = false;
            $(this).css("background-image","url('static/img/switch_off.png')");
            $("#water_pump_lamp").css("background-image","url('static/img/light_off.png')");
        } 
        else {
            action = "on";
            water_pump = true;
            $(this).css("background-image","url('static/img/switch_on.png')");
            $("#water_pump_lamp").css("background-image","url('static/img/light_on.png')");
        }

        formData.append("action", action);
        formData.append("type", "water");
        e.preventDefault();

        $.ajax({
            type: "post",
            url: "/pump",
            data: formData,
            processData: false,
            contentType: false,
            dataType: "json",
            success: function (response) {
                refresh();
            }
        });
    });

    $("#port_generator_switch").click(function (e) { 
        var formData = new FormData();

        if (port_generator_button) {
            port_generator_button = false;
            $(this).css("background-image","url('static/img/switch_off.png')");
        } else {
            port_generator_button = true;
            $(this).css("background-image","url('static/img/switch_on.png')"); 
        }
        
        if (port_generator) {
            action = "off";
            port_generator = false;
            $("#port_generator_lamp").css("background-image","url('static/img/light_off.png')");
        } 
        else {
            if (port_engine && port_generator_button){
                $("#port_generator_lamp").css("background-image","url('static/img/light_on.png')");
                action = "on";
            } 
            else {
                action = "off";
            }  
            port_generator = true; 
        }

        formData.append("action", action);
        formData.append("side", "port");
        e.preventDefault();

        $.ajax({
            type: "post",
            url: "/generator",
            data: formData,
            processData: false,
            contentType: false,
            dataType: "json",
            success: function (response) {
                data = $.parseJSON(response);
                if (data.success == false) {
                    port_generator = false;
                }
                refresh();
            }
        });
    });

    $("#starboard_generator_switch").click(function (e) { 
        var formData = new FormData();

        if (starboard_generator_button) {
            starboard_generator_button = false;
            $(this).css("background-image","url('static/img/switch_off.png')");

            
        } else {
            starboard_generator_button = true;
            $(this).css("background-image","url('static/img/switch_on.png')");   
        }

        if (starboard_generator) {
            action = "off";
            starboard_generator = false;
            $("#starboard_generator_lamp").css("background-image","url('static/img/light_off.png')");
        } 
        else {
            if (starboard_engine && starboard_generator_button){
                action = "on";
                $("#starboard_generator_lamp").css("background-image","url('static/img/light_on.png')");
            } 
            else
            {
                action = "off";   
            } 
            starboard_generator = true;
        }

        formData.append("action", action);
        formData.append("side", "starboard");
        e.preventDefault();

        $.ajax({
            type: "post",
            url: "/generator",
            data: formData,
            processData: false,
            contentType: false,
            dataType: "json",
            success: function (response) {
                data = $.parseJSON(response);
                if (data.success == false) {
                    starboard_generator = false;
                }
                refresh();
            }
        });
    });
});