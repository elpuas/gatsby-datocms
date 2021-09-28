import React from "react"
import Video from "../components/bricks/video-block"

export default {
    component: Video,
    title: "Blocks/Video Block"
}

const Template = (args) => <Video {...args} />

export const Default = Template.bind({})

export const Video1 = Template.bind({});


Video1.args = {
    videoSrcURL: 'https://www.youtube.com/embed/W4cx5L12ewI',
    videoTitle: 'MeetUp WordPress CDMX',
    children: React.createElement('img', {src: 'https://www.elpuas.com/static/76ea641a15d2e022792acd0a82cc60ab/a8378/wordcamp-mexico.png'} )
};
