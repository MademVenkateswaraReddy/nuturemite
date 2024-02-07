import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { CgCalendarDates } from "react-icons/cg";
import { IoMdPerson } from "react-icons/io";
import './blog.css'

function Blog() {
    return (
        <div className='blog-container'>
            <h1>Blog Latest Posts</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}                    
                >
                    <h4 className="vertical-timeline-element-title">Uncategorized</h4>
                    <h2 className="vertical-timeline-element-subtitle">Loving yourself even being too fat or skinny</h2>
                    <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                    </p>
                    <div className="actions">
                    <small className='date'><CgCalendarDates/> February 3, 2024</small>
                    <small className='client'><IoMdPerson/> Nuturemite</small>
                    <small className='comments'>2 comments</small>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h4 className="vertical-timeline-element-title">Uncategorized</h4>
                    <h2 className="vertical-timeline-element-subtitle">Loving yourself even being too fat or skinny</h2>
                    <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                    </p>
                    <div className="actions">
                    <small className='date'><CgCalendarDates/> February 3, 2024</small>
                    <small className='client'><IoMdPerson/> Nuturemite</small>
                    <small className='comments'>2 comments</small>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    <h4 className="vertical-timeline-element-title">Uncategorized</h4>
                    <h2 className="vertical-timeline-element-subtitle">Loving yourself even being too fat or skinny</h2>
                    <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                    </p>
                    <div className="actions">
                    <small className='date'><CgCalendarDates/> February 3, 2024</small>
                    <small className='client'><IoMdPerson/> Nuturemite</small>
                    <small className='comments'>2 comments</small>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    // icon={<SchoolIcon />}
                >
                    <h4 className="vertical-timeline-element-title">Uncategorized</h4>
                    <h2 className="vertical-timeline-element-subtitle">Loving yourself even being too fat or skinny</h2>
                    <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                    </p>
                    <div className="actions">
                    <small className='date'><CgCalendarDates/> February 3, 2024</small>
                    <small className='client'><IoMdPerson/> Nuturemite</small>
                    <small className='comments'>2 comments</small>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    // icon={<SchoolIcon />}
                >
                    <h4 className="vertical-timeline-element-title">Uncategorized</h4>
                    <h2 className="vertical-timeline-element-subtitle">Loving yourself even being too fat or skinny</h2>
                    <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                    </p>
                    <div className="actions">
                    <small className='date'><CgCalendarDates/> February 3, 2024</small>
                    <small className='client'><IoMdPerson/> Nuturemite</small>
                    <small className='comments'>2 comments</small>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    // icon={<SchoolIcon />}
                >
                    <h4 className="vertical-timeline-element-title">Uncategorized</h4>
                    <h2 className="vertical-timeline-element-subtitle">Loving yourself even being too fat or skinny</h2>
                    <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                    </p>
                    <div className="actions">
                    <small className='date'><CgCalendarDates/> February 3, 2024</small>
                    <small className='client'><IoMdPerson/> Nuturemite</small>
                    <small className='comments'>2 comments</small>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    // icon={<StarIcon />}
                />
            </VerticalTimeline>
        </div>
    )
}

export default Blog
