import React from 'react';
import { DiStackoverflow, DiReact, DiGithub } from 'react-icons/di';

export const AcomplishmentsData = [
    { icon: <DiStackoverflow size="3rem"/>, number: (new Date().getFullYear()-2010), text: 'Jahre am programmieren', },
    { icon: <DiReact size="3rem"/>, number: 10000, text: 'Instagram Follower', },
    { icon: <DiGithub size="3rem"/>, number: 0, text: 'GitHub Follower :(', },
  ];
