$(document).ready(function () {
    var port_engine = false;
    var starboard_engine = false;
    var waste_pump = false;
    var water_pump = false;
    var port_generator = false;
    var starboard_generator = false;
    var port_generator_button = false;
    var starboard_generator_button = false;

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
                starboard_generator = (data.starboard_generator.status == "on" ? true : false)

                $("#port_engine_status").html(data.port_engine.status);
                $("#port_engine_rpm").html(data.port_engine.rpm);
                $("#port_engine_temp").html(data.port_engine.temp);
                $("#port_engine_pressure").html(data.port_engine.pressure);

                $("#starboard_engine_status").html(data.starboard_engine.status);
                $("#starboard_engine_rpm").html(data.starboard_engine.rpm);
                $("#starboard_engine_temp").html(data.starboard_engine.temp);
                $("#starboard_engine_pressure").html(data.starboard_engine.pressure);

                $("#waste_pump_status").html(data.waste_pump.status);
                $("#water_pump_status").html(data.water_pump.status);

                $("#starboard_generator_status").html(data.starboard_generator.status);
                $("#starboard_generator_voltage").html(data.starboard_generator.volt);
                $("#port_generator_status").html(data.port_generator.status);
                $("#port_generator_voltage").html(data.port_generator.volt);
            }
        });
    }
    refresh();

    $("#starboard_engine_button").click(function (e) { 
        var formData = new FormData();

        if (starboard_engine) {
            action = "off";
            starboard_engine = false;
        } 
        else {
            action = "on";
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
                refresh();
            }
        });
    });

    $("#port_engine_button").click(function (e) { 
        var formData = new FormData();

        if (port_engine) {
            action = "off";
            port_engine = false;
        } 
        else {
            action = "on";
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
                refresh();
            }
        });
    });

    $("#waste_pump_button").click(function (e) { 
        var formData = new FormData();

        if (waste_pump) {
            action = "off";
            waste_pump = false;
        } 
        else {
            action = "on";
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
                refresh();
            }
        });
    });

    $("#water_pump_button").click(function (e) { 
        var formData = new FormData();

        if (water_pump) {
            action = "off";
            water_pump = false;
        } 
        else {
            action = "on";
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
                refresh();
            }
        });
    });

    $("#port_generator_button").click(function (e) { 
        var formData = new FormData();

        if (port_generator_button) {
            port_generator_button = false;
            $(this).css("background-image","url('static/switch_off.png')");
        } else {
            port_generator_button = true;
            $(this).css("background-image","url('static/switch_on.png')");
        }
        
        if (port_generator) {
            action = "off";
            port_generator = false;
        } 
        else {
            if (port_engine && port_generator_button) action = "on";
            else action = "off";
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

    $("#starboard_generator_button").click(function (e) { 
        var formData = new FormData();

        if (starboard_generator_button) {
            starboard_generator_button = false;
            $(this).css("background-image","url('static/switch_off.png')");
        } else {
            starboard_generator_button = true;
            $(this).css("background-image","url('static/switch_on.png')");
        }

        if (starboard_generator) {
            action = "off";
            starboard_generator = false;
        } 
        else {
            if (starboard_engine && starboard_generator_button) action = "on";
            else action = "off";
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