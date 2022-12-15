import React from "react";

import { Box, Stack, Typography } from "@mui/material";

import { MdEmail } from "react-icons/md";
import { HiLocationMarker, HiAcademicCap } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import { IoIosTimer } from "react-icons/io";
import { BsListTask } from "react-icons/bs";

import Contact from "./Contact";
import Social from "./Social";
import Heading from "./Heading";
import Skill from "./Skill";
import InfoContainer from "./InfoContainer";

const Index = () => {
  const {
    photo,
    name,
    role,
    socials,
    email,
    phone,
    address,
    about,
    interests,
    skills,
    educations,
    experiences,
    projects,
  } = JSON.parse(localStorage.getItem("info"));
  return (
    <Stack height={1}>
      <Stack bgcolor="primary.main" p={1}>
        <Typography variant="xx-large" fontWeight="bold" color="white">
          {name}
        </Typography>
        <Typography color="white" variant="medium">
          {role}
        </Typography>
      </Stack>
      <Stack direction="row" flex={1} bgcolor="secondary.dark">
        <Stack width={1 / 3} height={1} p={1}>
          <Box
            component="img"
            src={photo}
            alignSelf="center"
            width="27vw"
            height="27vw"
            borderRadius="50%"
            mb={1}
          />
          <Stack
            bgcolor="rgba(255,255,255,0.1)"
            spacing={0.5}
            p={0.5}
            borderRadius={1}
          >
            <Contact Icon={MdEmail} component="a" href={"mailto:" + email}>
              {email}
            </Contact>
            <Contact Icon={AiFillPhone} component="a" href={"tel:" + phone}>
              {phone}
            </Contact>
            <Contact Icon={HiLocationMarker}>{address}</Contact>
            {socials.map((url, i) => (
              <Social key={i} url={url} />
            ))}
          </Stack>
          <Heading>Skills</Heading>
          <Stack spacing={0.25}>
            {skills.map((skill, i) => (
              <Skill key={i} skill={skill} />
            ))}
          </Stack>
        </Stack>
        <Stack width={2 / 3} height={1} p={1} bgcolor="rgba(255,255,255,0.2)">
          <Typography variant="large" color="primary.main" fontWeight="bold">
            About Me
          </Typography>
          <Typography
            variant="x-small"
            color="rgba(255,255,255,0.8)"
            fontWeight="bold"
          >
            {about}
          </Typography>
          {!!educations.length && (
            <>
              <Heading Icon={HiAcademicCap}>Education</Heading>
              <Stack spacing={0.5}>
                {educations.map(
                  ({ studyProgram, institute, started, ended, present }, i) => (
                    <InfoContainer
                      key={i}
                      main={studyProgram}
                      body={institute}
                      date={getDate(started) + "-" + getDate(ended, present)}
                    />
                  )
                )}
              </Stack>
            </>
          )}

          {!!experiences.length && (
            <>
              <Heading Icon={IoIosTimer}>Experience</Heading>
              <Stack spacing={0.5}>
                {experiences.map(
                  (
                    {
                      started,
                      ended,
                      present,
                      title,
                      company,
                      location,
                      responsibilities,
                    },
                    i
                  ) => (
                    <InfoContainer
                      key={i}
                      main={title}
                      body={company + ", " + location}
                      list={responsibilities}
                      date={getDate(started) + "-" + getDate(ended, present)}
                    />
                  )
                )}
              </Stack>
            </>
          )}

          {!!projects.length && (
            <>
              <Heading Icon={BsListTask}>Projects</Heading>
              <Stack spacing={0.5}>
                {projects.map(({ name, description, link, finished }, i) => (
                  <InfoContainer
                    component="a"
                    href={link}
                    key={i}
                    main={name}
                    body={description}
                    date={getDate(finished)}
                    sx={{ textDecoration: "none" }}
                  />
                ))}
              </Stack>
            </>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Index;

function getDate(time, present) {
  if (present) return "Present";
  time = new Date(time);
  return `${time.toLocaleString("en-us", {
    month: "short",
  })} ${time.getFullYear()}`;
}
