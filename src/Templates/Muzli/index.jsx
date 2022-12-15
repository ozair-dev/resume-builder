import React from "react";

import { Stack, Box, Typography } from "@mui/material";

import { BsCodeSlash, BsListTask } from "react-icons/bs";
import { MdPhoneInTalk } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import { IoIosTimer } from "react-icons/io";

import Heading from "./Heading";
import Skill from "./Skill";
import ChainLink from "./ChainLink";

import SocialIcon from "../../SocialIcon";

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
    <Box height={1} pr={1} bgcolor="primary.main">
      <Stack
        height={1}
        direction="row"
        bgcolor="white"
        sx={{
          borderTopRightRadius: "10vw",
          borderBottomRightRadius: "10vw",
          "& .MuiTypography-root": { textDecoration: "none" },
        }}
      >
        <Stack p={2} width={2 / 5} height={1}>
          <Box
            component="img"
            src={photo}
            borderRadius="50%"
            alignSelf="center"
            position="absolute"
            zIndex={9}
            width="25vw"
            height="25vw"
            sx={{ border: "0.45vw solid", borderColor: "primary.main" }}
          />
          <Box position="relative" borderRadius="5vw" mt={10} height={1}>
            <Box
              width={1}
              height={1}
              bgcolor="primary.main"
              position="absolute"
              top="1vw"
              right="1vw"
              borderRadius="5vw"
            ></Box>
            <Box
              width={1}
              height={1}
              p={1}
              pt={3.5}
              position="absolute"
              zIndex="1"
              borderRadius="5vw"
              bgcolor="secondary.dark"
              overflow="hidden"
            >
              <Heading Icon={BsCodeSlash}>Skills</Heading>
              <Stack spacing={1}>
                {skills.map((skill, i) => (
                  <Skill key={i} skill={skill} />
                ))}
              </Stack>

              <Heading Icon={MdPhoneInTalk}>Contact</Heading>
              <Stack my={0.5}>
                <Typography variant="x-small" color="primary.main">
                  Email
                </Typography>
                <Typography
                  component="a"
                  href={"mailto:" + email}
                  variant="x-small"
                  color="white"
                >
                  {email}
                </Typography>
              </Stack>
              <Stack my={0.5}>
                <Typography variant="x-small" color="primary.main">
                  Phone
                </Typography>
                <Typography
                  component="a"
                  href={"tel:" + phone}
                  variant="x-small"
                  color="white"
                >
                  {phone}
                </Typography>
              </Stack>
              <Stack my={0.5}>
                <Typography variant="x-small" color="primary.main">
                  Address
                </Typography>
                <Typography variant="x-small" color="white">
                  {address}
                </Typography>
              </Stack>
              {!!socials.length && (
                <Stack my={0.5}>
                  <Typography
                    variant="x-small"
                    color="primary.main"
                    gutterBottom
                  >
                    Socials
                  </Typography>
                  <Stack spacing={0.5}>
                    {socials.map((social, i) => (
                      <Stack key={i} direction="row" alignItems="center">
                        <SocialIcon
                          mr={0.4}
                          url={social}
                          width="3vw"
                          height="3vw"
                        />
                        <Typography
                          component="a"
                          href={social}
                          variant="xx-small"
                          color="white"
                        >
                          {social.replace(/https?:\/\/(www[.])?/, "")}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              )}
            </Box>
          </Box>
        </Stack>
        <Stack p={2} pl={0} width={3 / 5} height={1}>
          <Typography
            color="primary"
            variant="xx-large"
            textAlign="center"
            fontWeight="bolder"
          >
            {name}
          </Typography>
          <Typography variant="medium">{role}</Typography>
          <Box my={1} width={0.3} padding={0.15} bgcolor="primary.main"></Box>
          <Typography
            variant="x-small"
            fontWeight="bold"
            color="text.secondary"
          >
            {about}
          </Typography>
          {!!educations.length && (
            <>
              <Heading Icon={HiAcademicCap}>Education</Heading>
              {educations.map(
                ({ started, ended, present, institute, studyProgram }, i) => (
                  <ChainLink
                    key={i}
                    date={getYear(started) + "-" + getYear(ended, present)}
                    main={studyProgram}
                    body={institute}
                    isLast={educations.length === i + 1}
                    isSingle={educations.length === 1}
                  />
                )
              )}
            </>
          )}
          {!!experiences.length && (
            <>
              <Heading Icon={IoIosTimer}>Experience</Heading>
              {experiences.map(
                (
                  {
                    started,
                    ended,
                    present,
                    company,
                    location,
                    title,
                    responsibilities,
                  },
                  i
                ) => (
                  <ChainLink
                    key={i}
                    date={getYear(started) + "-" + getYear(ended, present)}
                    main={title}
                    body={company + ", " + location}
                    list={responsibilities}
                    isLast={experiences.length === i + 1}
                    isSingle={experiences.length === 1}
                  />
                )
              )}
            </>
          )}

          {!!projects.length && (
            <>
              <Heading Icon={BsListTask}>Projects</Heading>
              {projects.map(({ finished, name, description, link }, i) => (
                <ChainLink
                  key={i}
                  component="a"
                  sx={{ textDecoration: "none" }}
                  href={link}
                  date={getMonthYear(finished)}
                  main={name}
                  body={description}
                  isLast={projects.length === i + 1}
                  isSingle={projects.length === 1}
                />
              ))}
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Index;

function getYear(time, present) {
  if (present) return "Present";

  time = new Date(time);
  return time.getFullYear();
}

function getMonthYear(time) {
  time = new Date(time);
  return `${time.toLocaleString("en-us", {
    month: "short",
  })} ${time.getFullYear()}`;
}
