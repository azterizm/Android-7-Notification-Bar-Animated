import { statusBar } from '../data';
import '../styles/StatusBar.css'

export const StatusBar = () => {
  const time = new Date().toLocaleTimeString().split(':').slice(0,2).join(':')
  return (
    <div className="status-bar">
      <div className="shadowOverlay"/>
      <div id="bar">
        <div id="clock">
          <h3>{time}</h3>
        </div>
        <div id="status">
          {statusBar.map(({name, image}: Settings) => (
            <img src={image} key={name} alt='' />
          ))}
        </div>
      </div>
    </div>
  )
}
