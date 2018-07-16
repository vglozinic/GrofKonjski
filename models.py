from persistent import Persistent
from persistent.mapping import PersistentMapping

class Stroj(Persistent):
    def __init__(self, naziv):
        self.status = "off"
        self.naziv = naziv

    def setStatus(self, status):
        self.status = status

    def getStatus(self):
        return self.status

    def getNaziv(self):
        return self.naziv

class Generator(Stroj):
    def __init__(self, naziv):
        super(Generator, self).__init__(naziv)
        self.volt = 0
        self.naziv = naziv

    def setVolt(self, volt):
        self.volt = volt

    def getVolt(self):
        return self.volt

class Motor(Stroj):
    def __init__(self, naziv):
        super(Motor, self).__init__(naziv)
        self.rpm = 0
        self.temp = 0
        self.pressure = 0
        self.naziv = naziv

    def getRPM(self):
        return self.rpm

    def getTemp(self):
        return self.temp

    def getPressure(self):
        return self.pressure

    def setRPM(self, rpm):
        self.rpm = rpm

    def setTemp(self, temp):
        self.temp = temp

    def setPressure(self, pressure):
        self.pressure = pressure

class Pumpa(Stroj):
    def __init__(self, naziv):
        super(Pumpa, self).__init__(naziv)
        self.naziv = naziv

class Strojarnica(PersistentMapping):
    __parent__ = __name__ = None
    port_engine = Motor("Port Engine")
    starboard_engine = Motor("Starboard Engine")
    water_pump = Pumpa("Water Pump")
    waste_pump = Pumpa("Waste Pump")
    port_generator = Generator("Port Generator")
    starboard_generator = Generator("Starboard Generator")

def appmaker(zodb_root):
    if 'app_root' not in zodb_root:
        app_root = Strojarnica()
        zodb_root['app_root'] = app_root
    return zodb_root['app_root']
