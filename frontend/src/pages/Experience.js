import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'
import UniversityIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work'

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education'
                                 date='Sept 2017 - May 2021'

                                 iconStyle={{background:'#3e497a',color:'#fff'}}
                                 icon={<SchoolIcon />}>
            <h3 className='vertical-timeline-element-title'>LDRP Institute of Technology and Research(India)</h3>
            <p> Bachelor's in computer engineering</p>
                <p> GPA:8.72</p>
        </VerticalTimelineElement>
          <VerticalTimelineElement className='vertical-timeline-element--education'
                                   date='Aug 2022-Expected May 2024'
                                   iconStyle={{background:'#3e497a',color:'#fff'}}
                                   icon={<UniversityIcon />}>
              <h3 className='vertical-timeline-element-title'>University of the Pacific(USA)</h3>
              <p> Master's in computer Science</p>
              <p>GPA:3.50</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement className='vertical-timeline-element--work'
                                   date='Aug 2021-Jan 2022'
                                   iconStyle={{background:'#FFD700',color:'#fff'}}
                                   icon={<WorkIcon />}>
              <h3 className='vertical-timeline-element-title'>ShreeHari Technology(India)</h3>
              <p>Python Developer- Internship</p>
          </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience