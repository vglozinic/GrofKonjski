from pyramid.view import view_config
from random import randint
from json import JSONEncoder, dumps

from .models import Generator, Motor, MyModel, Pumpa, Stroj


@view_config(context=MyModel, renderer='templates/index.pt')
def my_view(request):
    
    return {
        'project': 'grof_konjski', 
        'port_engine_rpm': MyModel.port_engine.getRpm(),
        'port_engine_temp': MyModel.port_engine.getTemp(),
        'port_engine_pressure': MyModel.port_engine.getPressure(),
        'starboard_engine_rpm': MyModel.starboard_engine.getRpm(),
        'starboard_engine_temp': MyModel.starboard_engine.getTemp(),
        'starboard_engine_pressure': MyModel.starboard_engine.getPressure(),
        'waste_pump': MyModel.waste_pump.getStatus(),
        'water_pump': MyModel.water_pump.getStatus()
    }

@view_config(context=MyModel, route_name='status', request_method='GET', renderer='json')
def get_all(request):
    return '{"starboard_engine": ' + dumps(MyModel.starboard_engine.__dict__) + ', "port_engine": ' + dumps(MyModel.port_engine.__dict__) + ', "waste_pump": ' + dumps(MyModel.waste_pump.__dict__) + ', "water_pump": ' + dumps(MyModel.water_pump.__dict__) + '}'

@view_config(context=MyModel, route_name='engine', request_method='POST', renderer='json')
def engine(request):
    side = request.POST.get('side')
    action = request.POST.get('action')
    if action == 'on':
        if side == 'starboard':
            MyModel.starboard_engine.setRpm(randint(4000, 5000))
            MyModel.starboard_engine.setTemp(randint(120, 130))
            MyModel.starboard_engine.setPressure(randint(3, 5))
            MyModel.starboard_engine.setStatus("on")
        elif side == 'port':
            MyModel.port_engine.setRpm(randint(4000, 5000))
            MyModel.port_engine.setTemp(randint(120, 130))
            MyModel.port_engine.setPressure(randint(3, 5))
            MyModel.port_engine.setStatus("on")
    elif action == 'off':
        if side == 'starboard':
            MyModel.starboard_engine.setRpm(0)
            MyModel.starboard_engine.setTemp(0)
            MyModel.starboard_engine.setPressure(0)
            MyModel.starboard_engine.setStatus("off")
        elif side == 'port':
            MyModel.port_engine.setRpm(0)
            MyModel.port_engine.setTemp(0)
            MyModel.port_engine.setPressure(0)
            MyModel.port_engine.setStatus("off")
    return "{'success': true, request: {'side': '" + side + "', 'action': '" + action + "'}}"

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
    return "{'success': true, request: {'type': '" + pump_type + "', 'action': '" + action + "'}}"
