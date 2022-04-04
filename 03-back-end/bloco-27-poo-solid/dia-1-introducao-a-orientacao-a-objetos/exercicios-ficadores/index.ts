import Tv from './classes/Tv';

const obj = { brand: 'LG', size: 49, resolution: '4k', connections: 'hdmi, ethernet' }

const tv = new Tv(obj)

tv.turnOn()
