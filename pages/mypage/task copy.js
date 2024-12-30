import { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'

const TaskPage = () => {
  const [events, setEvents] = useState([
    { title: 'initial event1', start: new Date() },
  ])

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      events={events}
      datesSet={(arg) => {
        setEvents([...events, { title: 'additional', start: arg.start }])
      }}
    />
  )
}

export default TaskPage