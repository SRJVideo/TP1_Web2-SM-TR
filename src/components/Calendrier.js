import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!



function DemoApp () {
        return (
            <div>
                <h1 className='MyCalendar' style={{ textAlign: "left" }}>Calendrier</h1>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    weekends={true}
                    events={[
                      { title: 'Début TP1', date: '2023-09-12' },
                      { title: 'Remise TP1', date: '2023-09-26' }
                    ]}
                />
            </div>
        )
    
}
export default DemoApp;