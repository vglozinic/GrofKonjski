from pyramid.view import view_config
from random import randint
from json import JSONEncoder, dumps
from .models import Generator, Motor, Strojarnica, Pumpa, Stroj

@view_config(context=Strojarnica, renderer='templates/index.pt')
def my_view(request):
    
    return {
        'project': 'grof_konjski', 
        'waste_pump': Strojarnica.waste_pump.getStatus(),
        'water_pump': Strojarnica.water_pump.getStatus(),

        'port_engine_status': Strojarnica.port_engine.getStatus(),
        'port_engine_rpm': Strojarnica.port_engine.getRPM(),
        'port_engine_temp': Strojarnica.port_engine.getTemp(),
        'port_engine_pressure': Strojarnica.port_engine.getPressure(),

        'starboard_engine_status': Strojarnica.starboard_engine.getStatus(),
        'starboard_engine_rpm': Strojarnica.starboard_engine.getRPM(),
        'starboard_engine_temp': Strojarnica.starboard_engine.getTemp(),
        'starboard_engine_pressure': Strojarnica.starboard_engine.getPressure(),

        'starboard_generator_status': Strojarnica.starboard_generator.getStatus(),
        'starboard_generator_voltage': Strojarnica.starboard_generator.getVolt(),
        'port_generator_status': Strojarnica.port_generator.getStatus(),
        'port_generator_voltage': Strojarnica.port_generator.getVolt()
    }

@view_config(context=Strojarnica, route_name='status', request_method='GET', renderer='json')
def get_all(request):
    return '{"starboard_engine": ' + dumps(Strojarnica.starboard_engine.__dict__) + ', "port_engine": ' + dumps(Strojarnica.port_engine.__dict__) + ',"waste_pump": ' + dumps(Strojarnica.waste_pump.__dict__) + ',"water_pump": ' + dumps(Strojarnica.water_pump.__dict__) + ',"starboard_generator": ' + dumps(Strojarnica.starboard_generator.__dict__) + ',"port_generator": ' + dumps(Strojarnica.port_generator.__dict__) + '}'

@view_config(context=Strojarnica, route_name='engine', request_method='POST', renderer='json')
def engine(request):
    side = request.POST.get('side')
    action = request.POST.get('action')

    if action == 'on':
        if side == 'starboard':
            Strojarnica.starboard_engine.setRPM(randint(440, 480))
            Strojarnica.starboard_engine.setTemp(randint(80, 85))
            Strojarnica.starboard_engine.setPressure(randint(70, 75))
            Strojarnica.starboard_engine.setStatus("on")
        elif side == 'port':
            Strojarnica.port_engine.setRPM(randint(440, 480))
            Strojarnica.port_engine.setTemp(randint(80, 85))
            Strojarnica.port_engine.setPressure(randint(70, 75))
            Strojarnica.port_engine.setStatus("on")
    elif action == 'off':
        if side == 'starboard':
            Strojarnica.starboard_engine.setRPM(0)
            Strojarnica.starboard_engine.setTemp(0)
            Strojarnica.starboard_engine.setPressure(0)
            Strojarnica.starboard_engine.setStatus("off")
            Strojarnica.starboard_generator.setVolt(0)
        elif side == 'port':
            Strojarnica.port_engine.setRPM(0)
            Strojarnica.port_engine.setTemp(0)
            Strojarnica.port_engine.setPressure(0)
            Strojarnica.port_engine.setStatus("off")
            Strojarnica.port_generator.setVolt(0)
    return '{"success": true, "request": {"side": "' + side + '", "action": "' + action + '"}}'

@view_config(context=Strojarnica, route_name='pump', request_method='POST', renderer='json')
def pump(request):
    pump_type = request.POST.get('type')
    action = request.POST.get('action')

    if action == 'on':
        if pump_type == 'waste':
            Strojarnica.waste_pump.setStatus("on")
        elif pump_type == 'water':
            Strojarnica.water_pump.setStatus("on")
    elif action == 'off':
        if pump_type == 'waste':
            Strojarnica.waste_pump.setStatus("off")
        elif pump_type == 'water':
            Strojarnica.water_pump.setStatus("off")
    return '{"success": true, "request": {"type": "' + pump_type + '", "action": "' + action + '"}}'

@view_config(context=Strojarnica, route_name='generator', request_method='POST', renderer='json')
def generator(request):
    side = request.POST.get('side')
    action = request.POST.get('action')

    if action == 'on':
        if side == 'starboard':
            if Strojarnica.starboard_engine.getStatus() == "on":
                Strojarnica.starboard_generator.setStatus("on")
                Strojarnica.starboard_generator.setVolt(randint(124,128))
            else:
                return '{"success": false, "msg": "Starboard engine not running!", "request": {"side": "' + side + '", "action": "' + action + '"}}'
        elif side == 'port':
            if Strojarnica.port_engine.getStatus() == "on":
                Strojarnica.port_generator.setStatus("on")
                Strojarnica.port_generator.setVolt(randint(124, 128))
            else:
                return '{"success": false, "msg": "Port engine not running!", "request": {"side": "' + side + '", "action": "' + action + '"}}'
    elif action == 'off':
        if side == 'starboard':
            Strojarnica.starboard_generator.setStatus("off")
            Strojarnica.starboard_generator.setVolt(0)
        elif side == 'port':
            Strojarnica.port_generator.setStatus("off")
            Strojarnica.port_generator.setVolt(0)
    return '{"success": true, "request": {"side": "' + side + '", "action": "' + action + '"}}'