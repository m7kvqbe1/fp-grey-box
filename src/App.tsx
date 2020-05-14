import React from 'react'
import { format } from 'date-fns'

import {
  TimelineContext,
  useTimelinePosition,
  Timeline,
  TimelineEvent,
  TimelineEvents,
  TimelineRow,
  TimelineRows,
  TimelineTodayMarker,
  TimelineMonths,
  TimelineWeeks,
  TimelineDays,
  TimelineSide,
} from '@royalnavy/react-component-library'

import './index.scss'

const CustomTimelineMonth = (
  index: number,
  dayWidth: number,
  daysTotal: number,
  startDate: Date
) => {
  return (
    <span
      style={{
        display: 'inline-block',
        width: `${dayWidth * daysTotal}px`,
        backgroundColor: '#fff',
        color: '#000',
      }}
    >
      {format(startDate, 'MMMM yyyy')}
    </span>
  )
}

const CustomTimelineDay = (index: number, dayWidth: number, date: Date) => {
  return (
    <span
      style={{
        display: 'inline-block',
        width: `${dayWidth}px`,
        height: '2.5rem',
        backgroundColor: '#fff',
        color: '#000',
        padding: '.5rem 0',
      }}
    >
      {format(date, 'dd')}
    </span>
  )
}

const CustomEvent = ({
  children,
  startDate,
  endDate,
  widthPx,
  offsetPx,
}: {
  children: React.ReactNode
  startDate: Date
  endDate: Date
  widthPx: string
  offsetPx: string
}) => {
  return (
    <div
      style={{
        backgroundColor: '#000',
        color: '#fff',
        marginLeft: offsetPx,
        width: widthPx,
      }}
    >
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Timeline startDate={new Date(2020, 4, 0)} today={new Date(2020, 3, 15)}>
        {/* <TimelineTodayMarker /> */}
        <TimelineMonths render={CustomTimelineMonth} />
        <TimelineDays render={CustomTimelineDay} />
        <TimelineRows renderColumns={() => null}>
          <div className="row-group__wrapper">
            <div className="row-group__key">
              <span className="row-group__name">Tidespring</span>
            </div>
            <div className="row-group__rows">
              <TimelineRow name="Waypoints">
                <div className="row-group__row-key">
                  <span>Waypoints</span>
                </div>
                <TimelineEvents>
                  <TimelineEvent
                    startDate={new Date(2020, 3, 6)}
                    endDate={new Date(2020, 3, 10)}
                    render={(
                      startDate: Date,
                      endDate: Date,
                      widthPx: string,
                      offsetPx: string
                    ) => {
                      return (
                        <CustomEvent
                          startDate={startDate}
                          endDate={endDate}
                          widthPx={widthPx}
                          offsetPx={offsetPx}
                        >
                          Event 1
                        </CustomEvent>
                      )
                    }}
                  />
                </TimelineEvents>
              </TimelineRow>
              <TimelineRow name="Tasking">
                <div className="row-group__row-key">
                  <span>Tasking</span>
                </div>
                <TimelineEvents>
                  <TimelineEvent
                    startDate={new Date(2020, 3, 10)}
                    endDate={new Date(2020, 3, 16)}
                    render={(
                      startDate: Date,
                      endDate: Date,
                      widthPx: string,
                      offsetPx: string
                    ) => {
                      return (
                        <CustomEvent
                          startDate={startDate}
                          endDate={endDate}
                          widthPx={widthPx}
                          offsetPx={offsetPx}
                        >
                          Event 2
                        </CustomEvent>
                      )
                    }}
                  />
                </TimelineEvents>
              </TimelineRow>
            </div>
          </div>
        </TimelineRows>
        <TimelineRows renderColumns={() => null}>
          <div className="row-group__wrapper">
            <div className="row-group__key">
              <span className="row-group__name">Queen Elizabeth</span>
            </div>
            <div className="row-group__rows">
              <TimelineRow name="Waypoints">
                <div className="row-group__row-key">
                  <span>Waypoints</span>
                </div>
                <TimelineEvents>
                  <TimelineEvent
                    startDate={new Date(2020, 3, 6)}
                    endDate={new Date(2020, 3, 10)}
                    render={(
                      startDate: Date,
                      endDate: Date,
                      widthPx: string,
                      offsetPx: string
                    ) => {
                      return (
                        <CustomEvent
                          startDate={startDate}
                          endDate={endDate}
                          widthPx={widthPx}
                          offsetPx={offsetPx}
                        >
                          Event 3
                        </CustomEvent>
                      )
                    }}
                  />
                </TimelineEvents>
              </TimelineRow>
              <TimelineRow name="Tasking">
                <div className="row-group__row-key">
                  <span>Tasking</span>
                </div>
                <TimelineEvents>
                  <TimelineEvent
                    startDate={new Date(2020, 3, 10)}
                    endDate={new Date(2020, 3, 16)}
                    render={(
                      startDate: Date,
                      endDate: Date,
                      widthPx: string,
                      offsetPx: string
                    ) => {
                      return (
                        <CustomEvent
                          startDate={startDate}
                          endDate={endDate}
                          widthPx={widthPx}
                          offsetPx={offsetPx}
                        >
                          Event 4
                        </CustomEvent>
                      )
                    }}
                  />
                </TimelineEvents>
              </TimelineRow>
            </div>
          </div>
        </TimelineRows>
        <TimelineRows renderColumns={() => null}>
          <div className="row-group__wrapper">
            <div className="row-group__key">
              <span className="row-group__name">Daring</span>
            </div>
            <div className="row-group__rows">
              <TimelineRow name="Waypoints">
                <div className="row-group__row-key">
                  <span>Waypoints</span>
                </div>
                <TimelineEvents>
                  <TimelineEvent
                    startDate={new Date(2020, 3, 6)}
                    endDate={new Date(2020, 3, 10)}
                    render={(
                      startDate: Date,
                      endDate: Date,
                      widthPx: string,
                      offsetPx: string
                    ) => {
                      return (
                        <CustomEvent
                          startDate={startDate}
                          endDate={endDate}
                          widthPx={widthPx}
                          offsetPx={offsetPx}
                        >
                          Event 5
                        </CustomEvent>
                      )
                    }}
                  />
                </TimelineEvents>
              </TimelineRow>
              <TimelineRow name="Tasking">
                <div className="row-group__row-key">
                  <span>Tasking</span>
                </div>
                <TimelineEvents>
                  <TimelineEvent
                    startDate={new Date(2020, 3, 10)}
                    endDate={new Date(2020, 3, 16)}
                    render={(
                      startDate: Date,
                      endDate: Date,
                      widthPx: string,
                      offsetPx: string
                    ) => {
                      return (
                        <CustomEvent
                          startDate={startDate}
                          endDate={endDate}
                          widthPx={widthPx}
                          offsetPx={offsetPx}
                        >
                          Event 6
                        </CustomEvent>
                      )
                    }}
                  />
                </TimelineEvents>
              </TimelineRow>
            </div>
          </div>
        </TimelineRows>
      </Timeline>
    </div>
  )
}

export default App
