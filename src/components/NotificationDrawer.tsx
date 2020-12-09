import { ReactElement } from 'react'
import { useState } from 'react'
import { useDrag } from 'react-use-gesture'
import { animated as a, useSpring, useSprings } from 'react-spring'
import { settingsBar, settingsData } from '../data'

import '../styles/NotificationDrawer.css'

export const NotificationDrawer = () => {
  const [status, setStatus] = useState<string>('close')
  const [settingsStatus, setSettingsStatus] = useState<string>('close')
  const [currentPag, setCurrentPag] = useState<number>(1)
  console.log('currentPag', currentPag)

  const time: string = new Date().toLocaleTimeString().split(':').slice(0, 2).join(':')
  const date: string = (new Date() as any).toGMTString().split(' ').slice(0, 3).join(' ')

  let DRAWER_SIZE: number = 160
  const DRAWER_CLOSE: number = -190
  const DRAWER_OPEN: number = -28
  const DRAWER_SPACE: number = window.innerHeight - DRAWER_SIZE
  const STATUS_HEIGHT: number = 28
  let LEFT_PAG_BOUND: number = 0
  let AMOUNT_OF_INDICATOR: number = 0
  console.log('AMOUNT_OF_INDICATOR', AMOUNT_OF_INDICATOR)

  const [drawerProps, drawerSet] = useSpring(() => ({
    y: DRAWER_CLOSE,
    height: DRAWER_SIZE
  }))

  const [gestureHeightProps, setGestureHeight] = useSpring(() => ({
    height: STATUS_HEIGHT,
    opacity: 0
  }))

  const [headingProps, setHeading] = useSpring(() => ({
    opacity: 0
  }))

  const [first3Props, setFirst3Props] = useSpring(() => ({
    w: 50,
    mtb: 0
  }))

  const [second3Props, setSecond3Props] = useSpring(() => ({
    w: 50,
    l: 50,
    t: 0
  }))

  const [endProps, setEndProps] = useSpring(() => ({
    opacity: 0
  }))

  const [settingsPaginate, setSettingsPaginate] = useSpring(() => ({
    l: 13
  }))

  const [tagsPaginate, setTagsPaginate] = useSpring(() => ({
    l: 24
  }))
  console.log('tagPaginate', tagsPaginate.l.get())

  const [pagIndicatorProps, setPagIndicator] = useSprings(2, i => ({
    opacity: 0.5
  }))

  const first3Style = {
    width: first3Props.w.to(w => `${w}%`),
    margin: first3Props.mtb.to(m => `${m}px 0`)
  }

  const second3Style = {
    width: second3Props.w.to(w => `${w}%`),
    left: second3Props.l.to(l => `${l}%`),
    top: second3Props.t.to(t => `${t}px`)
  }

  const settingsDataStyle = {
    gridTemplateColumns: `repeat(${settingsStatus === 'close' ? 2 : 3}, 1fr)`,
    gridRowGap: settingsStatus === 'close' ? 0 : 14 + 'px'
  }

  const imgStyle = {
    margin: settingsStatus === 'close' ? 0 : '0 auto',
    marginTop: settingsStatus === 'close' ? 0 : 80 + 'px'
  }

  const openNotifications = (): void => {
    console.log('OPEN NOTIFICATIONS')
    setStatus('open')
    drawerSet({ y: DRAWER_OPEN })
    setGestureHeight({ height: DRAWER_SPACE, opacity: 0.4 })
    setHeading({ opacity: 0.9 })
  }

  const closeNotifications = (): void => {
    console.log('CLOSE NOTIFICATIONS')
    drawerSet({ y: DRAWER_CLOSE })
    setGestureHeight({ height: STATUS_HEIGHT, opacity: 0 })
    setHeading({ opacity: 0 })
    setStatus('close')
  }

  const expandSettings = (): void => {
    console.log('EXPAND SETTINGS')
    setFirst3Props({
      w: 100,
      mtb: 80,
      onRest: () => setSettingsStatus('open')
    })
    setSecond3Props({
      w: 100,
      l: 0,
      t: 210,
      onRest: () => setSettingsStatus('open')
    })
    drawerSet({ height: 580 })
    setEndProps({ opacity: 1 })
  }

  const collapseSettings = (): void => {
    console.log('COLLAPSE SETTINGS')
    setFirst3Props({
      w: 50,
      mtb: 0,
    })
    setSecond3Props({
      w: 50,
      l: 50,
      t: 0,
    })
    drawerSet({ height: DRAWER_SIZE })
    setSettingsStatus('close')
    setEndProps({ opacity: 0 })
  }

  setPagIndicator(si => ({
    opacity: si === 0 ? 1 : 0.5
  }))
  const paginateTo1 = (): void => {
    setCurrentPag(1)
    setSettingsPaginate({ l: 13 })
    setTagsPaginate({ l: 24 })
    setPagIndicator(si => ({
      opacity: si === 0 ? 1 : 0.5
    }))
  }

  const paginateTo2 = (): void => {
    setCurrentPag(2)
    setSettingsPaginate({ l: 13 - 100 })
    setTagsPaginate({ l: -476 })
    setPagIndicator(si => ({
      opacity: si === 1 ? 1 : 0.5
    }))
  }

  const paginateTo3 = (): void => {
    setCurrentPag(3)
    setSettingsPaginate({ l: 13 - 200 })
    setPagIndicator(si => ({
      opacity: si === 2 ? 1 : 0.5
    }))
  }

  let settingsItems1: ReactElement[] = []
  let settingsItems2: ReactElement[] = []
  let settingsItems3: ReactElement[] = []
  let settingsItemsALL1: ReactElement[] = []
  let settingsItemsALL2: ReactElement[] = []
  let settingsItemsALL3: ReactElement[] = []
  let settingsTags1: ReactElement[] = []
  let settingsTags2: ReactElement[] = []
  let settingsTags3: ReactElement[] = []
  console.log('settingsItems1', settingsItems1)
  console.log('settingsItems2', settingsItems2)
  console.log('settingsItems3', settingsItems3)
  console.log('settingsItemsALL1', settingsItemsALL1)
  console.log('settingsItemsALL2', settingsItemsALL2)
  console.log('settingsItemsALL3', settingsItemsALL3)
  console.log('settingsItemsALL1LEN', settingsItemsALL1.length)
  console.log('settingsItemsALL2LEN', settingsItemsALL2.length)
  console.log('settingsItemsALL3LEN', settingsItemsALL3.length)
  console.log('settingsTags1', settingsTags1)
  console.log('settingsTags2', settingsTags2)
  console.log('settingsTags3', settingsTags3)
  let settingsNames: ReactElement[] = []
  settingsData.forEach(({ name, image }: Settings, i: number) => {
    const index = i + 1
    settingsNames.push( <a.p style={endProps as any} key={name}>{name}</a.p> )
    if (index <= 3 && settingsStatus === 'close') {
      settingsItems1.push(
        <img src={image} style={imgStyle} key={image} className='first3Elems' alt='' />
      )
      settingsTags1.push(
        <a.p style={endProps as any} key={name}>{name}</a.p>
      )
    } else if (index <= 6 && settingsStatus === 'close') {
      settingsItems2.push(
        <img src={image} style={imgStyle} key={image} className='second3Elems' alt='' />
      )
      settingsTags1.push(
        <a.p style={endProps as any} key={name}>{name}</a.p>
      )
    } else if (index <= 9 && settingsStatus === 'close') {
      settingsItems3.push(
        <img src={image} style={imgStyle} key={image} className='third3Elems' alt='' />
      )
      settingsTags1.push(
        <a.p style={endProps as any} key={name}>{name}</a.p>
      )
    } else if (index <= 9 && settingsStatus === 'open') {
      settingsItemsALL1.push(
        <img src={image} className='allData' style={imgStyle} key={image} alt='' />
      )
      settingsTags1.push(
        <a.p style={endProps as any} key={name}>{name}</a.p>
      )
    } else if (index <= 21 && settingsStatus === 'open') {
      settingsItemsALL2.push(
        <img src={image} className='allData' style={imgStyle} key={image} alt='' />
      )
      settingsTags2.push(
        <a.p style={endProps as any} key={name}>{name}</a.p>
      )
    } else {
      settingsItemsALL3.push(
        <img src={image} className='allData' style={imgStyle} key={image} alt='' />
      )
      settingsTags3.push(
        <a.p style={endProps as any} key={name}>{name}</a.p>
      )
    }

    LEFT_PAG_BOUND = (settingsItemsALL1.length && settingsItemsALL2.length && settingsItemsALL3.length) ?
      -150 : settingsItemsALL1.length && settingsItemsALL2.length ?
      -100 : 0

    AMOUNT_OF_INDICATOR = LEFT_PAG_BOUND === -150 ? 3 : LEFT_PAG_BOUND === -100 ? 2 : 1
    console.log('AMOUNT_OF_INDICATOR', AMOUNT_OF_INDICATOR)
  })

  const settingsItems: ReactElement[] | JSX.Element = settingsItemsALL1.length + settingsItemsALL2.length + settingsItemsALL3.length > 7 ? (
    <>
      <a.div className="paginate1" style={{ marginLeft: settingsPaginate.l.to(l => `${l}%`) }}>
        {settingsItemsALL1}
      </a.div>
      <a.div className="paginate2" style={{ marginLeft: settingsPaginate.l.to(l => `${l + 100}%`) }}>
        {settingsItemsALL2}
      </a.div>
      <a.div className="paginate3" style={{ marginLeft: settingsPaginate.l.to(l => `${l + 200}%`) }}>
        {settingsItemsALL3}
      </a.div>
    </>
  ) : (
    <>
      <a.div style={first3Style} className='first3'>
        {settingsItems1}
      </a.div>
      <a.div style={second3Style} className='second3'>
        {settingsItems2}
      </a.div>
      <a.div style={endProps as any} className='third3'>
        {settingsItems3}
      </a.div>
    </>
  )

  const bindDrawer = useDrag(({ direction: [, dy], vxvy: [, vy], tap, last, movement: [, my], dragging }) => {
    // if my mx direction goes up turn off opacity of endprops
    console.log('my', my)
    if (tap) return
    drawerSet({ y: my <= DRAWER_OPEN ? my : DRAWER_OPEN })

    if (status === 'open' && settingsStatus === 'close' && my <= 25 && !dragging && dy === -1) {
      setFirst3Props({
        w: 50,
        mtb: 0
      })
      setSecond3Props({
        w: 50,
        l: 50,
        t: 0
      })
      drawerSet({ height: DRAWER_SIZE })
      setEndProps({ opacity: 0 })
    } else if (status === 'open' && settingsStatus === 'close' && my <= 100 && my > 0 && dragging && dy === 1) {
      setFirst3Props({
        w: my * 0.5 + 50,
        mtb: my * 0.8
      })
      setSecond3Props({
        w: my * 0.5 + 50,
        l: 50 - my * 0.5,
        t: my * 2.1,
      })
      drawerSet({ height: DRAWER_SIZE + my * 4.2 })
      if (my > 90) setEndProps({ opacity: 1 })
    }

    const naturalVelocity = 0.5
    if (!last) return

    my > DRAWER_CLOSE * naturalVelocity || vy > naturalVelocity
      ? openNotifications() : closeNotifications()

    my > (status === 'close' ? DRAWER_SPACE : status === 'open' ? DRAWER_SIZE : 0) / 2
      || (vy > naturalVelocity && status === 'open' && settingsStatus === 'close')
        ? expandSettings() : collapseSettings()
  }, {
    bounds: { top: -160 },
    axis: 'y',
    filterTaps: true,
    initial: () => [0, drawerProps.y.get()]
  })

  const bindPaginate = useDrag(({ tap, last, movement: [mx] }) => {
    console.log('l paginate: ', settingsPaginate.l.get())
    if (settingsStatus === 'close' || tap) return

    const requiredMargin = 13;
    console.log('mx', mx)
    const gesture = mx < -100 ? -100 : mx
    setSettingsPaginate({ l: gesture + requiredMargin })
    setTagsPaginate({ l: gesture * 5 + 24 })

    if (!last) return;

    mx <= -150 && currentPag === 2 ? paginateTo3() :
    mx <= -100 && currentPag === 3 ? paginateTo2() :
    mx < -50 && currentPag === 1 ? paginateTo2() : paginateTo1()

  }, {
    bounds: { left: LEFT_PAG_BOUND, right: 0 },
    filterTaps: true,
    axios: 'x',
    initial: () => [settingsPaginate.l.get(), 0]
  })

  return (
    <>
      <a.div style={drawerProps} id='notification-drawer'>
        <div id="top">
          <h2 id="clock">
            {time}<br />{date}
          </h2>
          <a.div style={endProps as any} id="brightnessSlider">
            <input id="slider" type="range" defaultValue={25} name="brightness" />
          </a.div>
          <div id="settingsBar">
            {settingsBar.slice(0,2).map(({ name, image }: Settings) => {
              return (
                <a.img style={endProps as any} className={name} src={image} alt='' key={name} />
              )
            })}
            {settingsBar.slice(2,4).map(({ name, image }: Settings) => {
              return (
                <img className={name} src={image} alt='' key={name} />
              )
            })}
          </div>
        </div>
        <div id="settingsData" {...bindPaginate()} style={settingsDataStyle}>
          {settingsItems}
          <div id="tags">
            <>
              <a.div className="tags1" style={{ marginLeft: tagsPaginate.l.to(l => `${l - 24}px`) }}>
                {settingsTags1}
              </a.div>
              <a.div className="tags2" style={{ marginLeft: tagsPaginate.l.to(l => `${l + 500}px`) }}>
                {settingsTags2}
              </a.div>
              <a.div className="tags3">
                {settingsTags3}
              </a.div>
            </>
          </div>
          <a.div style={endProps as any} id="pagIndicator">
            {pagIndicatorProps.map(props => <a.div style={props as any} className='pagItem' />)}
          </a.div>
        </div>
        <a.div style={gestureHeightProps as any} {...bindDrawer()} className='extraHeight' />
      </a.div>
      <a.h3 style={headingProps as any} className='noNotificationsFeedback'>No notifications</a.h3>
    </>
  )
}
