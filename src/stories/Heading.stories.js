import React from "react"
import Heading from "../components/atoms/heading"

export default {
    component: Heading,
    title: "Atoms/Heading"
}

const Template = (args) => <Heading {...args} />

export const Default = Template.bind({})

export const Level1 = Template.bind({});

Level1.args = {
    content: 'I\'m a Heading level 1',
    level: '1',
};

export const Level2 = Template.bind({});

Level2.args = {
    content: 'I\'m a Heading level 2',
    level: '2',
};

export const Level3 = Template.bind({});

Level3.args = {
    content: 'I\'m a Heading level 3',
    level: '3',
};

export const Level4= Template.bind({});

Level4.args = {
    content: 'I\'m a Heading level 4',
    level: '4',
};


