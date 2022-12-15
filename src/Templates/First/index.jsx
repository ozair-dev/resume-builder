import React from "react";

import { Box, Stack, Typography } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AiTwotoneMail, AiFillPhone, AiFillEnvironment } from "react-icons/ai";
import { GiConvergenceTarget } from "react-icons/gi";
import { BsInfo, BsCodeSlash, BsListTask } from "react-icons/bs";
import { SlGraduation } from "react-icons/sl";
import { CiTimer } from "react-icons/ci";
import SocialIcon from "../../SocialIcon";

import Heading from "./Heading";
import Skill from "./Skill";
import Education from "./Education";
import Experience from "./Experience";
import Project from "./Project";

const First = () => {
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
    <Stack direction="row" width={1} height={1}>
      <Stack
        alignItems="center"
        p={2}
        height={1}
        width={2 / 5}
        backgroundColor="primary.main"
      >
        <Box
          width="22.3vw"
          height="22.3vw"
          alignSelf="center"
          border="0.3vw solid"
          borderRadius="50%"
          p={0.5}
          sx={{ "& img": { width: 1, height: 1, borderRadius: "50%" } }}
        >
          <img src={photo} />
        </Box>
        <Typography
          variant="large"
          fontWeight="bold"
          textAlign="center"
          textTransform="uppercase"
        >
          {name}
        </Typography>
        <Typography
          variant="x-small"
          color="white"
          textAlign="center"
          textTransform="uppercase"
        >
          {role}
        </Typography>
        <Stack direction="row" spacing={0.5} justifyContent="center" my={1}>
          {socials.map((url, i) => (
            <SocialIcon key={i} url={url} width="4.5vw" height="4.5vw" />
          ))}
        </Stack>
        <Stack
          pb={2}
          borderBottom="0.3vw solid"
          spacing={0.5}
          width={1}
          sx={{
            "& svg": { verticalAlign: "middle", mr: 1 },
            "& a": { color: "text.primary", textDecoration: "none" },
          }}
        >
          <Stack
            component="a"
            href={`mailto:${email}`}
            direction="row"
            alignItems="center"
          >
            <Typography variant="x-small" component="span">
              <AiTwotoneMail />
            </Typography>
            <Typography variant="x-small">{email}</Typography>
          </Stack>
          <Stack
            component="a"
            href={`tel:${phone}`}
            direction="row"
            alignItems="center"
          >
            <Typography variant="x-small" component="span">
              <AiFillPhone />
            </Typography>
            <Typography variant="x-small">{phone}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Typography variant="x-small" component="span">
              <AiFillEnvironment />
            </Typography>
            <Typography variant="x-small">{address}</Typography>
          </Stack>
        </Stack>
        <Heading Icon={GiConvergenceTarget}>About Me</Heading>
        <Typography variant="x-small">{about}</Typography>

        {!!interests.length && (
          <>
            <Heading Icon={BsInfo}>General Info</Heading>
            <Typography
              color="white"
              variant="small"
              fontWeight="bold"
              width={1}
              mb={1}
            >
              Interests
            </Typography>
            {interests.map(({ interest, icon }, i) => (
              <Stack key={i} direction="row" spacing={1} width={1}>
                <Box width={0.1} lineHeight="initial">
                  <Typography variant="small" component="span">
                    <FontAwesomeIcon icon={icon} />
                  </Typography>
                </Box>
                <Typography variant="x-small" alignSelf="center">
                  {interest}
                </Typography>
              </Stack>
            ))}
          </>
        )}
      </Stack>
      <Box p={2} pt={0} height={1} width={3 / 5}>
        {!!educations.length && (
          <>
            <Heading Icon={SlGraduation}>Education</Heading>
            <Stack spacing={1}>
              {educations.map((edu, i) => (
                <Education key={i} edu={edu} />
              ))}
            </Stack>
          </>
        )}

        {!!experiences.length && (
          <>
            <Heading Icon={CiTimer}>Experience</Heading>
            <Stack spacing={1}>
              {experiences.map((exp, i) => (
                <Experience key={i} exp={exp} />
              ))}
            </Stack>
          </>
        )}

        {!!projects.length && (
          <>
            <Heading Icon={BsListTask}>Projects</Heading>
            <Stack spacing={1}>
              {projects.map((project, i) => (
                <Project key={i} project={project} />
              ))}
            </Stack>
          </>
        )}

        <Heading Icon={BsCodeSlash}>Skills</Heading>
        <Stack spacing={1}>
          {skills.map((skill, i) => (
            <Skill key={i} skill={skill} />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export default First;
