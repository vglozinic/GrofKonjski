from pyramid.view import view_config
from random import randint
from json import JSONEncoder, dumps
from .models import Generator, Motor, MyModel, Pumpa, Stroj

@view_config(context=MyModel, renderer='templates/index.pt')
def my_view(request):
    
    return {
        'project': 'grof_konjski', 
        'waste_pump': MyModel.waste_pump.getStatus(),
        'water_pump': MyModel.water_pump.getStatus(),

        'port_engine_status': MyModel.port_engine.getStatus(),
        'port_engine_rpm': MyModel.port_engine.getRPM(),
        'port_engine_temp': MyModel.port_engine.getTemp(),
        'port_engine_pressure': MyModel.port_engine.getPressure(),

        'starboard_engine_status': MyModel.starboard_engine.getStatus(),
        'starboard_engine_rpm': MyModel.starboard_engine.getRPM(),
        'starboard_engine_temp': MyModel.starboard_engine.getTemp(),
        'starboard_engine_pressure': MyModel.starboard_engine.getPressure(),

        'starboard_generator_status': MyModel.starboard_generator.getStatus(),
        'starboard_generator_voltage': MyModel.starboard_generator.getVolt(),
        'port_generator_status': MyModel.port_generator.getStatus(),
        'port_generator_voltage': MyModel.port_generator.getVolt()
    }

@view_config(context=MyModel, route_name='status', request_method='GET', renderer='json')
def get_all(request):
    return '{"starboard_engine": ' + dumps(MyModel.starboard_engine.__dict__) + ', "port_engine": ' + dumps(MyModel.port_engine.__dict__) + ',"waste_pump": ' + dumps(MyModel.waste_pump.__dict__) + ',"water_pump": ' + dumps(MyModel.water_pump.__dict__) + ',"starboard_generator": ' + dumps(MyModel.starboard_generator.__dict__) + ',"port_generator": ' + dumps(MyModel.port_generator.__dict__) + '}'

@view_config(context=MyModel, route_name='engine', request_method='POST', renderer='json')
def engine(request):
    side = request.POST.get('side')
    action = request.POST.get('action')

    if action == 'on':
        if side == 'starboard':
            MyModel.starboard_engine.setRPM(randint(4000, 5000))
            MyModel.starboard_engine.setTemp(randint(120, 130))
            MyModel.starboard_engine.setPressure(randint(3, 5))
            MyModel.starboard_engine.setStatus("on")
        elif side == 'port':
            MyModel.port_engine.setRPM(randint(4000, 5000))
            MyModel.port_engine.setTemp(randint(120, 130))
            MyModel.port_engine.setPressure(randint(3, 5))
            MyModel.port_engine.setStatus("on")
    elif action == 'off':
        if side == 'starboard':
            MyModel.starboard_engine.setRPM(0)
            MyModel.starboard_engine.setTemp(0)
            MyModel.starboard_engine.setPressure(0)
            MyModel.starboard_engine.setStatus("off")
        elif side == 'port':
            MyModel.port_engine.setRPM(0)
            MyModel.port_engine.setTemp(0)
            MyModel.port_engine.setPressure(0)
            MyModel.port_engine.setStatus("off")
    return '{"success": true, "request": {"side": "' + side + '", "action": "' + action + '"}}'

@view_config(context=MyModel, route_name='pump', request_method='POST', renderer='json')
def pump(request):
    pump_type = request.POST.get('type')
    action = request.POST.get('action')

    if action == 'on':
        if pump_type == 'waste':
            MyModel.waste_pump.setStatus("on")
        elif pump_type == 'water':
            MyModel.water_pump.setStatus("on")
    elif action == 'off':
        if pump_type == 'waste':
            MyModel.waste_pump.setStatus("off")
        elif pump_type == 'water':
            MyModel.water_pump.setStatus("off")
    return '{"success": true, "request": {"type": "' + pump_type + '", "action": "' + action + '"}}'

@view_config(context=MyModel, route_name='generator', request_method='POST', renderer='json')
def generator(request):
    side = request.POST.get('side')
    action = request.POST.get('action')

    if action == 'on':
        if side == 'starboard':
            if MyModel.starboard_engine.getStatus() == "on":
                MyModel.starboard_generator.setStatus("on")
                MyModel.starboard_generator.setVolt(randint(200,220))
            else:
                return '{"success": false, "msg": "Starboard engine not running!", "request": {"side": "' + side + '", "action": "' + action + '"}}'
        elif side == 'port':
            if MyModel.port_engine.getStatus() == "on":
                MyModel.port_generator.setStatus("on")
                MyModel.port_generator.setVolt(randint(200, 220))
            else:
                return '{"success": false, "msg": "Port engine not running!", "request": {"side": "' + side + '", "action": "' + action + '"}}'
    elif action == 'off':
        if side == 'starboard':
            MyModel.starboard_generator.setStatus("off")
            MyModel.starboard_generator.setVolt(0)
        elif side == 'port':
            MyModel.port_generator.setStatus("off")
            MyModel.port_generator.setVolt(0)
    return '{"success": true, "request": {"side": "' + side + '", "action": "' + action + '"}}'