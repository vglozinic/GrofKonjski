$(document).ready(function () {
    var port_engine = false;
    var starboard_engine = false;
    var waste_pump = false;
    var water_pump = false;
    var port_generator = false;
    var starboard_generator = false;

    function refresh() {
        $.ajax({
            type: "get",
            url: "/status",
            dataType: "json",
            success: function (response) {
                var data = $.parseJSON(response);
                console.log(data);
                $("#port_engine_rpm").html(data.port_engine.rpm);
                $("#port_engine_temp").html(data.port_engine.temp);
                $("#port_engine_pressure").html(data.port_engine.pressure);
                $("#starboard_engine_rpm").html(data.starboard_engine.rpm);
                $("#starboard_engine_temp").html(data.starboard_engine.temp);
                $("#starboard_engine_pressure").html(data.starboard_engine.pressure);
                $("#waste_pump").html(data.waste_pump.status);
                $("#water_pump").html(data.water_pump.status);
            }
        });
    }

    $("#starboard_engine_button").click(function (e) { 
        var formData = new FormData();

        if (starboard_engine) {
            action = "on";
            starboard_engine = false;
        } 
        else {
            action = "off";
            starboard_engine = true;
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
                console.log(response);
                refresh();
            }
        });
    });

    $("#port_engine_button").click(function (e) { 
        var formData = new FormData();

        if (port_engine) {
            action = "on";
            port_engine = false;
        } 
        else {
            action = "off";
            port_engine = true;
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
                console.log(response);
                refresh();
            }
        });
    });

    $("#waste_pump_button").click(function (e) { 
        var formData = new FormData();

        if (waste_pump) {
            action = "on";
            waste_pump = false;
        } 
        else {
            action = "off";
            waste_pump = true;
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
                console.log(response);
                refresh();
            }
        });
    });

    $("#water_pump_button").click(function (e) { 
        var formData = new FormData();

        if (water_pump) {
            action = "on";
            water_pump = false;
        } 
        else {
            action = "off";
            water_pump = true;
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
                console.log(response);
                refresh();
            }
        });
    });
});