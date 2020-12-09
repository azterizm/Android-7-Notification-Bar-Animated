import wifi from './assets/signal_wifi_4_bar-24px.svg'
import cellular from './assets/signal_cellular_4_bar-24px.svg'
import battery from './assets/battery_full-24px.svg'
import airplane from './assets/airplanemode_inactive-24px.svg'
import bluetooth from './assets/bluetooth_disabled-24px.svg'
import hightlight from './assets/highlight-24px.svg'
import locationIco from './assets/location_off-24px.svg'
import hotspot from './assets/portable_wifi_off-24px.svg'
import doNotDisturb from './assets/remove_circle-24px.svg'
import screenRotation from './assets/screen_rotation-24px.svg'
import sync from './assets/sync_disabled-24px.svg'
import ambientDisplay from './assets/tap_and_play-24px.svg'
import profile from './assets/volume_up-24px.svg'
import account from './assets/account_circle-24px.svg'
import pencil from './assets/create-24px.svg'
import arrow from './assets/keyboard_arrow_up-24px.svg'
import settings from './assets/settings-24px.svg'

export const statusBar: Settings[] = [
  {name: 'Wifi', image: wifi}, {name: 'Cellular', image: cellular}, {name: 'Battery', image: battery}
]

export const statusSettings: Settings[] = [
  {name: 'Wifi', image: wifi}, {name: 'Cellular', image: cellular}, {name: 'Battery', image: battery}, {name: 'DoNotDisturb', image: doNotDisturb}, {name: 'LocationIco', image: locationIco}, {name: 'Hightlight', image: hightlight}
]


export const settingsBar: Settings[] = [
  {name: 'Account', image: account}, {name: 'Pencil', image: pencil}, {name: 'Settings', image: settings}, {name: 'Arrow', image: arrow}
]

export const settingsData: Settings[] = [
  {name: 'Wifi', image: wifi}, {name: 'Cellular', image: cellular}, {name: 'Battery', image: battery},
  {name: 'Do Not Disturb', image: doNotDisturb}, {name: 'Location', image: locationIco}, {name: 'Hightlight', image: hightlight},
  {name: 'Screen Rotation', image: screenRotation}, {name: 'Bluetooth', image: bluetooth}, {name: 'Profile', image: profile},
  {name: 'Airplane', image: airplane}, {name: 'Hotspot', image: hotspot}, {name: 'Ambient Display', image: ambientDisplay},
  {name: 'Sync', image: sync}
]
